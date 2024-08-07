
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sebastian Perez',
  description: 'portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      style={{ scrollBehavior: 'smooth' }}
      lang='en'>
      <body className='flex flex-col box-border m-0 overflow-x-hidden scroll-bar-light dark:scroll-bar-dark'>
        {children}
      </body>
    </html>
  );
}
