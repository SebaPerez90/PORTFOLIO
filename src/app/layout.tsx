import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import SetUp from '@/components/SetUp';

export const metadata: Metadata = {
  title: 'Sebastian Perez',
  description: 'portfolio',
};

const roboto = Roboto({
  weight: ['500'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <SetUp />
        {children}
      </body>
    </html>
  );
}
