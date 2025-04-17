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

export async function generateMetadata(): Promise<Metadata> {
    const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Solana';
    
    return {
      description: `Inspect transactions, accounts, blocks, and more on the ${appName} blockchain`,
      manifest: '/api/manifest.json',
      metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
      title: `Explorer | ${appName}`,
    };
  }

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
    const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Solana';
    return (
        <html lang="en" className={`${rubikFont.variable}`}>
            <head>
                <link rel="icon" href={`/icons/${appName.toLowerCase()}/favicon.ico`} />
                <link rel="apple-touch-icon" href={`/icons/${appName.toLowerCase()}/apple-icon.png`} />
            </head>
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
