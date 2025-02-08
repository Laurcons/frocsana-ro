import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rocsana Fișer',
  description: 'Arhivist, documentarist din Cluj-Napoca',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className="h-full bg-bg antialiased">
        <main className="mx-auto max-w-screen-md">{children}</main>
      </body>
    </html>
  );
}
