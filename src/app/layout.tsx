import './globals.css';
import type { Metadata } from 'next';
import { Onest } from 'next/font/google';

import NavBar from '@/components/header/NavBar';
import Footer from '@/components/main/Footer';

export const metadata: Metadata = {
  title: 'Sebastian Perez',
  description: 'portfolio',
};

const onest = Onest({
  subsets: ['latin'],
  style: ['normal'],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className='flex flex-col box-border m-0' style={onest.style}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
