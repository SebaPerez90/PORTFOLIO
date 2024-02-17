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
          ? 'relative flex justify-center items-center text-white before:absolute before:left-0 before:top-0 before:w-full before:h-full before:z-[2] before:bg-gradient-to-r from-[#0f0c29] bg-indigo-800 to-[#2c2c47]'
          : 'flex justify-center items-center bg-[#dedede]'
      }>
      <section
        className={
          darkThemeActive
            ? 'z-10 flex justify-center items-center w-max bg-gradient-to-tl from-[#030303] to-[#3e3f40] p-2 rounded-md shadow-[4px_8px_10px_#00000058]'
            : 'z-10 flex justify-center items-center w-max bg-white p-2 rounded-md shadow-[4px_8px_10px_#c1c1c1]'
        }>
        <nav className='flex justify-between '>
          <ul className='flex w-full justify-end items-center p-4 font-medium text-sm'>
            <li>
              <Link
                href={'/'}
                className={
                  currentRoute == '/'
                    ? darkThemeActive
                      ? 'text-white p-[0.5em_1.5em] duration-500 rounded-[2em] bg-[#9147ff]'
                      : 'text-white rounded-[2em] duration-300 p-[0.5em_1.5em] bg-[#9BB8CD]'
                    : darkThemeActive
                    ? 'text-white rounded-[2em] p-[0.5em_1.5em] duration-500 '
                    : 'rounded-[2em] p-[0.5em_1.5em] duration-300'
                }>
                {engLanguageActive ? 'home' : 'inicio'}
              </Link>
            </li>
            <li>
              <Link
                href={'/about'}
                className={
                  currentRoute == '/about'
                    ? darkThemeActive
                      ? 'text-white p-[0.5em_1.5em] duration-500 rounded-[2em] bg-[#9147ff]'
                      : 'text-white rounded-[2em] duration-300 p-[0.5em_1.5em] bg-[#9BB8CD]'
                    : darkThemeActive
                    ? 'text-white rounded-[2em] p-[0.5em_1.5em] duration-500 '
                    : 'rounded-[2em] p-[0.5em_1.5em] duration-300'
                }>
                {engLanguageActive ? 'about' : 'sobre mi'}
              </Link>
            </li>
            <li>
              <Link
                href={'#proyects-section'}
                className={
                  currentRoute == '/#proyects-section'
                    ? darkThemeActive
                      ? 'text-white p-[0.5em_1.5em] duration-500 rounded-[2em] bg-[#9147ff]'
                      : 'text-white rounded-[2em] duration-300 p-[0.5em_1.5em] bg-[#9BB8CD]'
                    : darkThemeActive
                    ? 'text-white rounded-[2em] p-[0.5em_1.5em] duration-500 '
                    : 'rounded-[2em] p-[0.5em_1.5em] duration-300'
                }>
                {engLanguageActive ? 'proyects' : 'proyectos'}
              </Link>
            </li>
            <li>
              <Link
                href={'#hire-section'}
                className={
                  currentRoute == '/contact'
                    ? darkThemeActive
                      ? 'text-white p-[0.5em_1.5em] duration-500 rounded-[2em] bg-[#9147ff]'
                      : 'text-white rounded-[2em] duration-300 p-[0.5em_1.5em] bg-[#9BB8CD]'
                    : darkThemeActive
                    ? 'text-white rounded-[2em] p-[0.5em_1.5em] duration-500 '
                    : 'rounded-[2em] p-[0.5em_1.5em] duration-300'
                }>
                {engLanguageActive ? 'hire me' : 'contratame'}
              </Link>
            </li>
          </ul>
        </nav>

        <ThemeButtons />

        <LanguageButtons />
      </section>
    </header>
  );
};

export default NavBar;
