'use client';

import Link from 'next/link';
import { useStore } from '@/context/store';
import Preferences from './Preferences';
import { useEffect } from 'react';
import navLinks from '@/utils/nav-links.json';
import { usePathname } from 'next/navigation';

const NavLinks = () => {
  const { engLanguageActive } = useStore();
  const pathname = usePathname();

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
      className='flex justify-between w-full fixed left-0 top-0 z-50 p-[1em_4em] bg-[#fbfbfb8d] dark:bg-[#00000068]'>
      <span className='xl:text-lg dark:text-slate-200 text-[#333333be] font-bold text-sm'>
        SebaPerez.
      </span>
      <nav className='xl:text-lg hidden md:flex gap-7 dark:text-slate-200 text-[#333333be] font-bold text-sm'>
        {navLinks.map((element, index) => (
          <Link
            className='duration-300 hover:duration-200 hover:text-light-500 dark:hover:text-theme_dark-sup-pink'
            key={index}
            href={element.url}
            style={
              pathname === element.url
                ? { borderBottom: '3px solid #38bdf8' }
                : undefined
            }
            aria-label={element.label}>
            {engLanguageActive ? element.titleEN : element.titleES}
          </Link>
        ))}
      </nav>
      <Preferences />
    </header>
  );
};

export default NavLinks;
