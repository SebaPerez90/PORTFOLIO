import './globals.css';
import type { Metadata } from 'next';
import { Onest } from 'next/font/google';

import Footer from '@/components/Footer/Footer';
import MenuBtn from '@/components/NavBar/MenuBtn';

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
    <html style={{ scrollBehavior: 'smooth' }} lang='en'>
      <body
        className='flex flex-col box-border m-0 overflow-x-hidden scroll-bar-light dark:scroll-bar-dark'
        style={onest.style}>
        <MenuBtn />
        {children}
        <Footer />
      </body>
    </html>
  );
}
