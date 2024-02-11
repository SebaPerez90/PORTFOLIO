'use client';

import Link from 'next/link';
import React from 'react';

import LanguageButtons from '@/components/header/LanguageButtons';
import ThemeButtons from '@/components/header/ThemeButtons';

import { usePathname } from 'next/navigation';
import { useStore } from '@/store';

const NavBar = () => {
  const currentRoute = usePathname();

  const { engLanguageActive, darkThemeActive } = useStore();

  return (
    <header
      className={
        darkThemeActive
          ? 'flex border-b-[2px] bg-black justify-end items-center text-white'
          : 'flex border-b-[1px] border-b-[#d2daff] justify-end items-center'
      }>
      <nav className='flex justify-between'>
        <ul className='nav-bar flex w-full justify-end items-center p-4 font-medium text-sm'>
          <li>
            <Link
              href={'/'}
              className={currentRoute == '/' ? 'isActive' : 'inactive'}>
              {engLanguageActive ? 'home' : 'inicio'}
            </Link>
          </li>
          <li>
            <Link
              href={'/about'}
              className={currentRoute == '/about' ? 'isActive' : 'inactive'}>
              {engLanguageActive ? 'about me' : 'acerca de mi'}
            </Link>
          </li>
          <li>
            <Link
              href={'/proyects'}
              className={currentRoute == '/proyects' ? 'isActive' : 'inactive'}>
              {engLanguageActive ? 'proyects' : 'proyectos'}
            </Link>
          </li>
          <li>
            <Link
              href={'/experience'}
              className={
                currentRoute == '/experience' ? 'isActive' : 'inactive'
              }>
              {engLanguageActive ? 'experience' : 'experiencia'}
            </Link>
          </li>
          <li>
            <Link
              href={'/contact'}
              className={currentRoute == '/contact' ? 'isActive' : 'inactive'}>
              {engLanguageActive ? 'hire me' : 'contratame'}
            </Link>
          </li>
        </ul>
      </nav>

      <ThemeButtons />

      <LanguageButtons />
    </header>
  );
};

export default NavBar;
