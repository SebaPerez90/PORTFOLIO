'use client';

import { useStore } from '@/store';
import Link from 'next/link';
import ThemeButtons from '@/components/header/ThemeButtons';

interface NavLinks {
  titleES: string;
  titleEN: string;
  label: string;
  url: string;
}

const NavBar = () => {
  const { engLanguageActive } = useStore();

  const navLinks: NavLinks[] = [
    {
      titleES: 'sobre mi',
      titleEN: 'about',
      label: 'about-section',
      url: '#about-section',
    },
    {
      titleES: 'proyectos',
      titleEN: 'projects',
      label: 'projects-section',
      url: '#projects-section',
    },
    {
      titleES: 'contáctame',
      titleEN: 'contact me',
      label: 'contact-section',
      url: '#contact-section',
    },
    {
      titleES: 'servicos',
      titleEN: 'services',
      label: 'services-section',
      url: '#services-section',
    },
  ];

  const handleScroll = () => {
    document.addEventListener('scroll', () => {
      const nav_bar = document.getElementById('nav-bar');

      if (window.scrollY !== 0) {
        nav_bar?.classList.add(
          'bg-[#00000025]',
          '[backdrop-filter:blur(5px)]',
          'top-[-0.4em]'
        );
      } else {
        nav_bar?.classList.remove(
          'bg-[#00000025]',
          '[backdrop-filter:blur(5px)]',
          'top-[-0.4em]'
        );
      }
    });
  };

  handleScroll();

  return (
    <header className='duration-300 dark:bg-theme_dark-main-bg m-[0_auto] min-[1400px]:border-l min-[1400px]:border-r border-slate-700/40'>
      <nav
        id='nav-bar'
        className='min-w-max fixed z-50 top-[1em] translate-x-[-15em] border border-slate-500/10 rounded-full bg-[#eeeeee81] dark:bg-[#0000004a] p-2 px-3 duration-300 flex justify-end gap-2 dark:border dark:border-slate-500/30'>
        {navLinks.map((item, index) => (
          <Link
            // lg:[text-shadow:1px_1px_1px_#333333ac]
            className='dark:text-white p-3 text-[#5c6673] font-medium '
            aria-label={item.label}
            href={item.url}
            key={index}>
            {engLanguageActive ? item.titleEN : item.titleES}
          </Link>
        ))}
        <ThemeButtons />
      </nav>
    </header>
  );
};

export default NavBar;
