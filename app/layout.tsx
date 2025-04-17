import './scss/theme-dark.scss';

import { ClusterModal } from '@components/ClusterModal';
import { ClusterStatusBanner } from '@components/ClusterStatusButton';
import { MessageBanner } from '@components/MessageBanner';
import { Navbar } from '@components/Navbar';
import { SearchBar } from '@components/SearchBar';
import { ClusterProvider } from '@providers/cluster';
import { ScrollAnchorProvider } from '@providers/scroll-anchor';
import type { Viewport } from 'next';
import { Rubik } from 'next/font/google';
import { Metadata } from 'next/types';

const appName = process?.env?.NEXT_PUBLIC_APP_NAME || 'Solana';
export const metadata: Metadata = {
    description: `Inspect transactions, accounts, blocks, and more on the ${appName} blockchain`,
    manifest: '/manifest.json',
    title: `Explorer | ${appName}`,
};

export const viewport: Viewport = {
    initialScale: 1,
    maximumScale: 1,
    width: 'device-width',
};

const rubikFont = Rubik({
    display: 'swap',
    subsets: ['latin'],
    variable: '--explorer-default-font',
    weight: ['300', '400', '700'],
});

export default function RootLayout({
    analytics,
    children,
}: {
    analytics?: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${rubikFont.variable}`}>
            <body>
                <ScrollAnchorProvider>
                    <ClusterProvider>
                        <ClusterModal />
                        <div className="main-content pb-4">
                            <Navbar />
                            <MessageBanner />
                            <ClusterStatusBanner />
                            <SearchBar />
                            {children}
                        </div>
                    </ClusterProvider>
                </ScrollAnchorProvider>
                {analytics}
            </body>
        </html>
    );
}
