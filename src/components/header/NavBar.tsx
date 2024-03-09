'use client';

import Link from 'next/link';
import Image from 'next/image';
import icon from '@/assets/images/icon-hero.png';

import ThemeButtons from '@/components/header/ThemeButtons';
import { useStore } from '@/store';

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
      label: 'about',
      url: '#about-section',
    },
    {
      titleES: 'proyectos',
      titleEN: 'projects',
      label: 'projects',
      url: '#projects-section',
    },
    {
      titleES: 'contáctame',
      titleEN: 'contact me',
      label: 'contact me',
      url: '#contact-section',
    },
    {
      titleES: 'servicos',
      titleEN: 'services',
      label: 'services',
      url: '#services-section',
    },
  ];

  // const handleScroll = () => {
  //   document.addEventListener('scroll', () => {
  //     if (window.scrollY !== 0) {
  //       elementRef.current.style.backdropFilter = 'blur(20px)';
  //       elementRef.current.style.background = '#ffffff0d';
  //       elementRef.current.style.boxShadow = '0 0 5px #0000008c';
  //     } else {
  //       elementRef.current.style.background = 'inherit';
  //     }
  //   });
  // };
  // handleScroll();

  // const elementRef: any = useRef<HTMLDivElement>(null);

  // if (window.location.hash === '#projects-section') {
  //   console.log('ver esto eh, puede ser util');
  //   console.log(linkRef.current);
  // } else {
  //   console.log('es por aca');
  //   console.log(linkRef.current);
  // }

  return (
    <header
      id='home'
      className='dark:bg-theme_dark-main-bg dark:z-10 pb-2 max-[520px]:pb-2 z-20 flex justify-between items-center'>
      <div className='pl-8 pt-4 flex items-center gap-2 [letter-spacing:-1px] text-[#333333ac] font-extrabold'>
        <Image src={icon} alt='icon' />
        <span className='dark:text-zinc-300'>Seba Perez</span>
      </div>
      <nav className='[display:none] md:flex justify-end gap-4 pt-2 '>
        {navLinks.map((item, index) => (
          <Link
            className='dark:text-zinc-300 p-2 pt-4 lg:text-white text-[#383838c4] font-bold lg:[text-shadow:1px_1px_1px_#333333ac] '
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
