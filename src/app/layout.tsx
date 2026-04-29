import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Hackless Docs',
    template: '%s | Hackless Docs',
  },
  description: 'API, SDK, and MCP documentation for Hackless.',
  metadataBase: new URL('https://docs.hackless.dev'),
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
