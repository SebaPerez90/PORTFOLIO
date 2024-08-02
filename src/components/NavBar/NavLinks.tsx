'use client';

import Link from 'next/link';
import { useStore } from '@/context/store';
import { useEffect } from 'react';
import navLinks from '@/utils/nav-links.json';
// import { usePathname } from 'next/navigation';
import ThemeButtons from './ThemeButtons';
import LanguageButtons from './LanguageButtons';
import HamburguerMenu from './HamburguerMenu';

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
      className='flex justify-between items-center w-full fixed left-0 top-0 z-50 p-[1.5em_4em] bg-[#ffffff8d] dark:bg-[#00000068]'>
      <span className='text-lg text-light-500/70 dark:text-dark-sky font-extrabold'>
        SebaPerez
      </span>
      <nav className='xl:text-lg flex gap-7 items-center dark:text-slate-200 text-[#333333be] font-bold max-[500px]:hidden'>
        {navLinks.map((element, index) => (
          <Link
            className='hover:text-light-500/50 dark:hover:text-dark-pink font-semibold duration-300 border-b-2 border-transparent text-slate-600 dark:text-slate-50'
            key={index}
            href={element.url}
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
