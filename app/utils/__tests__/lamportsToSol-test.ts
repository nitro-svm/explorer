import { LAMPORTS_PER_SOL, lamportsToSol } from '@utils/index';

describe('lamportsToSol', () => {
    it('converts 0 lamports to 0 SOLX', () => {
        expect(lamportsToSol(0)).toBe(0.0);
        expect(lamportsToSol(BigInt(0))).toBe(0.0);
    });

    it('converts small lamport amounts to SOLX', () => {
        expect(lamportsToSol(1)).toBe(0.000001);
        expect(lamportsToSol(BigInt(1))).toBe(0.000001);
        expect(lamportsToSol(-1)).toBe(-0.000001);
        expect(lamportsToSol(BigInt(-1))).toBe(-0.000001);
    });

    it('converts 1 SOLX worth of lamports to 1.0', () => {
        expect(lamportsToSol(LAMPORTS_PER_SOL)).toBe(1.0);
        expect(lamportsToSol(BigInt(LAMPORTS_PER_SOL))).toBe(1.0);
        expect(lamportsToSol(-LAMPORTS_PER_SOL)).toBe(-1.0);
        expect(lamportsToSol(BigInt(-LAMPORTS_PER_SOL))).toBe(-1.0);
    });

    it('handles large numbers', () => {
        expect(lamportsToSol(2n ** 64n)).toBe(18446744073709.55);
        expect(lamportsToSol(-(2n ** 64n))).toBe(-18446744073709.55);
    });
});
