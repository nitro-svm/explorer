import { NextResponse } from 'next/server';

export async function GET() {
    const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Solana';
    
    // Build the manifest object
    const manifest = {
      "background_color": "#ffffff",
      "display": "standalone",
      "icons": [
        {
          "sizes": "64x64 32x32 24x24 16x16",
          "src": `/icons/${appName.toLowerCase()}/favicon.ico`,
          "type": "image/x-icon"
        },
        {
          "sizes": "512x512",
          "src": `/icons/${appName.toLowerCase()}/apple-icon.png`,
          "type": "image/png"
        }
      ],
      "name": `Inspect transactions, accounts, blocks, and more on the ${appName} blockchain`,
      "short_name": `${appName} Explorer`,
      "start_url": ".",
      "theme_color": "#1dd79b"
    };
  
    return NextResponse.json(manifest);
  }