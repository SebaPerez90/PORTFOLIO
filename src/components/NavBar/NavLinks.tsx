'use client';

import Link from 'next/link';
import { useStore } from '@/context/store';
import { useEffect } from 'react';
import navLinks from '@/utils/nav-links.json';
import { usePathname } from 'next/navigation';
import ThemeButtons from './ThemeButtons';
import LanguageButtons from './LanguageButtons';
import HamburguerMenu from './HamburguerMenu';

const NavLinks = () => {
  const { engLanguageActive } = useStore();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/about') {
      document.getElementById('nav-bar')?.classList.add('dark:bg-[#0f172a]');
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const nav_bar: HTMLElement | null = document.getElementById('nav-bar');

      if (window.scrollY !== 0) {
        nav_bar?.classList.add('[backdrop-filter:blur(10px)]');
        nav_bar?.classList.add('bg-[#ffffffaa]', 'dark:bg-[#0000008f]');
        nav_bar?.classList.add('[box-shadow:0px_0px_30px_0px_#00000033]');
      } else {
        nav_bar?.classList.remove('[backdrop-filter:blur(10px)]');
        nav_bar?.classList.remove('bg-[#ffffffaa]', 'dark:bg-[#0000008f]');
        nav_bar?.classList.remove('[box-shadow:0px_0px_30px_0px_#00000033]');
      }
    };

    handleScroll();
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <header
      id='nav-bar'
      className='flex justify-between items-center w-full fixed left-0 top-0 z-50 p-[1.5em_4em] duration-1000'>
      <span className='text-xl text-light-500/85 dark:text-dark-sky font-extrabold'>
        SebaPerez
      </span>
      <nav className='xl:text-lg flex gap-7 items-center font-bold max-[500px]:hidden max-[500px]:pointer-events-none text-[#4d4dff80] dark:text-dark-pink'>
        {navLinks.map((element, index) => (
          <Link
            className='duration-300 hover:text-light-500/50 dark:hover:text-dark-pink font-semibold border-b-2 border-transparent text-slate-600 dark:text-slate-50'
            key={index}
            href={element.url}
            style={
              pathname === element.url
                ? {
                    color: 'inherit',
                    fontWeight: 'bolder',
                    transition: '200ms',
                  }
                : undefined
            }
            aria-label={element.label}>
            {engLanguageActive ? element.titleEN : element.titleES}
          </Link>
        ))}
        <div className='flex items-center gap-2 ml-3'>
          <ThemeButtons />
          <LanguageButtons />
        </div>
      </nav>
      <HamburguerMenu />
    </header>
  );
};

export default NavLinks;
