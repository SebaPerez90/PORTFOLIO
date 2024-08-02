'use client';

import Link from 'next/link';
import { useStore } from '@/context/store';
// import Preferences from './Preferences';
import { useEffect } from 'react';
import navLinks from '@/utils/nav-links.json';
// import { usePathname } from 'next/navigation';
import ThemeButtons from './ThemeButtons';
import LanguageButtons from './LanguageButtons';

const NavLinks = () => {
  const { engLanguageActive } = useStore();
  // const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const nav_bar: HTMLElement | null = document.getElementById('nav-bar');

      if (window.scrollY !== 0) {
        nav_bar?.classList.add('[backdrop-filter:blur(15px)]');
      } else nav_bar?.classList.remove('[backdrop-filter:blur(15px)]');
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
      className='flex justify-between items-center w-full fixed left-0 top-0 z-50 p-[1em_4em] bg-[#ffffff8d] dark:bg-[#00000068]'>
      <span className='text-lg text-light-500/70 dark:text-dark-sky font-extrabold'>
        SebaPerez
      </span>
      <nav className='xl:text-lg hidden md:flex gap-7 dark:text-slate-200 text-[#333333be] font-bold text-sm'>
        {navLinks.map((element, index) => (
          <Link
            className='hover:text-light-500/50 dark:hover:text-dark-pink font-semibold duration-300 border-b-2 border-transparent text-slate-600 dark:text-slate-50'
            key={index}
            href={element.url}
            // style={
            //   pathname === element.url
            //     ? { borderBottom: '2px solid rgb(77 77 255 / 0.5)' }
            //     : undefined
            // }
            aria-label={element.label}>
            {engLanguageActive ? element.titleEN : element.titleES}
          </Link>
        ))}
      </nav>
      <div className='flex gap-2'>
        <ThemeButtons />
        <LanguageButtons />
      </div>
    </header>
  );
};

export default NavLinks;
