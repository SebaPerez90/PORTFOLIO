'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';

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
    { titleES: 'sobre mi', titleEN: 'about', label: 'about', url: '/about' },
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
          ? 'bg-[#383838] relative flex justify-center items-center text-white'
          : 'bg-[#fff] flex justify-center items-center '
      }>
      <div
        ref={elementRef}
        className={
          darkThemeActive
            ? 'shadow-[0_0_5px_#0000008c] bg-inherit fixed top-2 z-30 flex justify-center items-center w-max p-2 rounded-md '
            : 'shadow-[0_0_5px_#0000008c] bg-inherit fixed top-2 z-30 flex justify-center items-center w-max p-2 rounded-md '
        }>
        <nav
          className={
            darkThemeActive
              ? 'mr-3 flex justify-center z-30 gap-1 '
              : 'mr-3 flex justify-center z-30 gap-1 '
          }>
          {navLinks.map((item, index) => (
            <Link
              className={
                darkThemeActive
                  ? 'p-2 duration-300 text-[#ffffffee] font-bold hover:duration-300 hover:text-[#da0c81]'
                  : 'p-2 duration-300 text-[#6c6c6cb4] font-bold hover:duration-300 hover:text-[#da0c81]'
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
