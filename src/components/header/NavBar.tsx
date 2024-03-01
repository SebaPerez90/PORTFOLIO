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
    { titleES: 'inicio', titleEN: 'home', label: 'home', url: '/' },
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
    <header id='home' className='z-20 flex justify-between items-center '>
      <div className='pl-8 pt-4 flex items-center gap-2 [letter-spacing:-1px] text-[#333333ac] font-extrabold'>
        <Image src={icon} alt='icon' />
        <span>Seba Perez</span>
      </div>
      <nav className='flex justify-end gap-4 w-[35em]  pt-2 bg-gradient-to-l from-light-500 to-[#DCBFFF]'>
        {navLinks.map((item, index) => (
          <Link
            className='text-sm p-2 pt-4 text-white [text-shadow:2px_2px_0px_rgba(0,0,0,0.69)] font-normal'
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
