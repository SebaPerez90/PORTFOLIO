import './globals.css';
import type { Metadata } from 'next';
import { Onest } from 'next/font/google';

import Preference from '@/components/Preference';

export const metadata: Metadata = {
  title: 'Sebastian Perez',
  description: 'portfolio',
};

const onest = Onest({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={onest.className}>
        <Preference />
        {children}
      </body>
    </html>
  );
}
