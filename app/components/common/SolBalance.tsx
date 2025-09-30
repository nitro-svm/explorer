import { getDecimals, getTicker, lamportsToSolString } from '@utils/index';
import React from 'react';

export function SolBalance({
    lamports,
    maximumFractionDigits,
}: {
    lamports: number | bigint;
    maximumFractionDigits?: number;
}) {
    const ticker = getTicker();
    const decimals = getDecimals();
    const fractionDigits = maximumFractionDigits ?? decimals;

    return (
        <span>
            <span className="font-monospace">{lamportsToSolString(lamports, fractionDigits)}</span> {ticker}
        </span>
    );
}
