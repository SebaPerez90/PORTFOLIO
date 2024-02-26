'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import icon from '@/assets/images/icon-hero.png';

import LanguageButtons from '@/components/header/LanguageButtons';
import ThemeButtons from '@/components/header/ThemeButtons';

import { useStore } from '@/store';

const NavBar = () => {
  const { engLanguageActive, darkThemeActive } = useStore();

  const elementRef: any = useRef<HTMLDivElement>(null);

  // if (window.location.hash === '#projects-section') {
  //   console.log('ver esto eh, puede ser util');
  //   console.log(linkRef.current);
  // } else {
  //   console.log('es por aca');
  //   console.log(linkRef.current);
  // }

  interface NavLinks {
    titleES: string;
    titleEN: string;
    label: string;
    url: string;
  }

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

  return (
    <header
      className={
        darkThemeActive
          ? 'bg-[#383838] relative flex justify-center items-center'
          : 'flex justify-between items-center '
      }>
      <div className='pl-4 flex items-center gap-2 text-[#333333ac] font-extrabold'>
        <Image src={icon} alt='icon' />
        <p>Seba Perez</p>
      </div>
      <div
        ref={elementRef}
        className={
          darkThemeActive
            ? 'shadow-[0_0_5px_#0000008c] bg-inherit fixed top-2 z-30 flex justify-center items-center w-max p-2 rounded-md '
            : 'bg-[#333333e3] flex justify-end items-center  w-[35em] pr-4 pt-2'
        }>
        <nav
          className={
            darkThemeActive
              ? 'flex justify-center z-30'
              : 'flex justify-center z-30 gap-4'
          }>
          {navLinks.map((item, index) => (
            <Link
              className={
                darkThemeActive
                  ? 'p-2 duration-300 text-[#ffffffee] font-bold hover:duration-300 hover:text-[#da0c81]'
                  : 'text-sm p-2 pt-4 text-white font-normal'
              }
              aria-label={item.label}
              href={item.url}
              key={index}>
              {engLanguageActive ? item.titleEN : item.titleES}
            </Link>
          ))}
        </nav>

        <ThemeButtons />
        <LanguageButtons />
      </div>
    </header>
  );
};

export default NavBar;
