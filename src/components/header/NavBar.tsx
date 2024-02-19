'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';

import LanguageButtons from '@/components/header/LanguageButtons';
import ThemeButtons from '@/components/header/ThemeButtons';

import { useStore } from '@/store';

const NavBar = () => {
  const { engLanguageActive, darkThemeActive } = useStore();

  const elementRef: any = useRef<HTMLDivElement>(null);

  // if (window.location.hash === '#projects-section') {
  //   console.log('ver esto eh, puede ser util');
  //   // linkRef.current.style.border = '3px solid #f00';
  //   console.log(linkRef.current);
  // } else {
  //   console.log('es por aca');
  //   // linkRef.current.style.border = '5px solid #390cda';
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
    { titleES: 'sobre mi', titleEN: 'about', label: 'about', url: '/about' },
    {
      titleES: 'proyectos',
      titleEN: 'projects',
      label: 'projects',
      url: '#projects-section',
    },
    {
      titleES: 'contrátame',
      titleEN: 'hire me',
      label: 'hire me',
      url: '#hire-section',
    },
  ];

  const handleScroll = () => {
    document.addEventListener('scroll', () => {
      if (window.scrollY !== 0) {
        elementRef.current.style.backdropFilter = 'blur(20px)';
        elementRef.current.style.background = '#ffffff0d';
        elementRef.current.style.boxShadow = '0 0 5px #0000008c';
      } else {
        elementRef.current.style.background = 'inherit';
      }
    });
  };
  handleScroll();
  
  return (
    <header
      className={
        darkThemeActive
          ? 'bg-[#3485d5] relative flex justify-center items-center text-white'
          : 'bg-[#fff] flex justify-center items-center '
      }>
      <div
        ref={elementRef}
        className={
          darkThemeActive
            ? 'shadow-[0_0_5px_#0000008c] bg-inherit fixed top-2 z-20 flex justify-center items-center w-max p-2 rounded-md '
            : 'shadow-[0_0_5px_#0000008c] bg-inherit fixed top-2 z-20 flex justify-center items-center w-max p-2 rounded-md '
        }>
        <nav
          className={
            darkThemeActive
              ? 'flex justify-center z-20 gap-1 '
              : 'flex justify-center z-20 gap-1 '
          }>
          {navLinks.map((item, index) => (
            <Link
              className={
                darkThemeActive
                  ? 'p-2 duration-500 text-[#ffffffee] font-bold hover:duration-500'
                  : 'p-2 duration-500 text-[#505050db] font-semibold hover:duration-500'
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
