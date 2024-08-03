'use client';

import Link from 'next/link';
import { useStore } from '@/context/store';
import { useEffect, useState } from 'react';
import navLinks from '@/utils/nav-links.json';
import { usePathname } from 'next/navigation';
import ThemeButtons from './ThemeButtons';
import LanguageButtons from './LanguageButtons';
import HamburguerMenu from './HamburguerMenu';

const NavLinks = () => {
  const { engLanguageActive } = useStore();
  const pathname = usePathname();
  // const [theme, setTheme] = useState<string | null>('light');

  // useEffect(() => {
  //   setTheme(localStorage.getItem('theme'));
  //   console.log(theme);
  // }, [theme]);

  // useEffect(() => {
  //   localStorage.setItem('theme', theme);
  //   if (theme === 'dark') {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const nav_bar: HTMLElement | null = document.getElementById('nav-bar');

      if (window.scrollY !== 0) {
        nav_bar?.classList.add('[backdrop-filter:blur(15px)]');
        nav_bar?.classList.add('[box-shadow:0px_0px_30px_0px_#0000001a]');
      } else {
        nav_bar?.classList.remove('[box-shadow:0px_0px_30px_0px_#0000001a]');
        nav_bar?.classList.remove('[backdrop-filter:blur(15px)]');
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
      className='flex justify-between items-center w-full fixed left-0 top-0 z-50 p-[1.5em_4em] bg-[#ffffff8d] dark:bg-[#00000068] duration-1000'>
      <span className='text-xl text-light-500/95 dark:text-dark-sky font-extrabold'>
        SebaPerez
      </span>
      <nav className='xl:text-lg flex gap-7 items-center dark:text-slate-200 text-[#333333be] font-bold max-[500px]:hidden max-[500px]:pointer-events-none'>
        {navLinks.map((element, index) => (
          <Link
            className='hover:text-light-500/50 dark:hover:text-dark-pink font-semibold duration-300 border-b-2 border-transparent text-slate-600 dark:text-slate-50'
            key={index}
            href={element.url}
            // style={
            //   pathname === element.url
            //     ? theme === 'dark'
            //       ? { color: '#f00' }
            //       : { color: '#4d4dff80' }
            //     : undefined
            // }
            aria-label={element.label}>
            {engLanguageActive ? element.titleEN : element.titleES}
          </Link>
        ))}
        <div className='flex items-center gap-2 ml-3'>
          <ThemeButtons />
          <LanguageButtons />
        </div>
        {/* {theme === 'dark' && <p>pepe</p>} */}
      </nav>
      <HamburguerMenu />
    </header>
  );
};

export default NavLinks;
