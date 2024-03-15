'use client';

import { useStore } from '@/context/store';
import Link from 'next/link';
import ThemeButtons from '@/components/NavBar/ThemeButtons';

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
      label: 'about-link',
      url: '#about-section',
    },
    {
      titleES: 'experiencia',
      titleEN: 'experience',
      label: 'experience-link',
      url: '#experience-section',
    },
    {
      titleES: 'proyectos',
      titleEN: 'projects',
      label: 'projects-link',
      url: '#projects-section',
    },
    {
      titleES: 'servicios',
      titleEN: 'services',
      label: 'services-link',
      url: '#services-section',
    },
    {
      titleES: 'contáctame',
      titleEN: 'contact me',
      label: 'contact-link',
      url: '#contact-section',
    },
  ];

  const handleScroll = () => {
    document.addEventListener('scroll', () => {
      const nav_bar: HTMLElement | null = document.getElementById('nav-bar');

      if (window.innerWidth > 640) {
        if (window.scrollY !== 0) {
          nav_bar?.classList.add('sticky-navbar');
        } else nav_bar?.classList.remove('sticky-navbar');
      } else nav_bar.style.backdropFilter = 'blur(5px)';
    });
  };

  handleScroll();

  return (
    <header className='z-50 duration-300 w-full bg-transparent flex justify-center fixed'>
      <nav
        id='nav-bar'
        className='flex-col rounded-[0_0_0_0.4em] top-0 items-start p-[1.5em_0.8em_1em_0.7em] right-0 absolute gap-8 capitalize duration-0
        
        || sm:duration-300 sm:gap-6 sm:lowercase sm:flex-row flex z-50 sm:top-2 sm:relative border border-slate-500/10 sm:rounded-full bg-[#eeeeee81] dark:bg-[#0000004a] min-w-max sm:items-center dark:border sm:p-[0.7em_1.5em]  dark:border-slate-500/30'>
        {navLinks.map((item, index) => (
          <Link
            className='max-[500px]:hidden dark:hover:text-theme_dark-sup-pink duration-500 hover:text-light-900 dark:text-white text-[#333333] font-medium '
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
