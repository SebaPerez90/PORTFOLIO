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
          ? 'flex justify-center items-center text-white bg-[#2D3250]'
          : 'flex justify-center items-center bg-[#dedede]'
      }>
      <div
        className={
          darkThemeActive
            ? 'flex justify-center items-center w-max bg-black p-2 rounded-md mt-4 shadow-[4px_8px_10px_#00000058] z-10'
            : 'flex justify-center items-center w-max bg-white p-2 rounded-md mt-4 shadow-[4px_8px_10px_#c1c1c1] z-10'
        }>
        <nav className='flex justify-between '>
          <ul className='flex w-full justify-end items-center p-4 font-medium text-sm'>
            <li>
              <Link
                href={'/'}
                className={
                  currentRoute == '/'
                    ? 'text-white p-[0.5em_1.5em] duration-500 rounded-[2em] bg-[#9BB8CD] '
                    : 'rounded-[2em] duration-300 p-[0.5em_1em]'
                }>
                {engLanguageActive ? 'home' : 'inicio'}
              </Link>
            </li>
            <li>
              <Link
                href={'/about'}
                className={
                  currentRoute == '/about'
                    ? 'text-white p-[0.5em_1em] duration-500 rounded-[2em] bg-[#9BB8CD] '
                    : 'rounded-[2em] duration-300 p-[0.5em_1em]'
                }>
                {engLanguageActive ? 'about me' : 'acerca de mi'}
              </Link>
            </li>
            <li>
              <Link
                href={'/proyects'}
                className={
                  currentRoute == '/proyects'
                    ? 'text-white p-[0.5em_1em] duration-500 rounded-[2em] bg-[#9BB8CD] '
                    : 'rounded-[2em] duration-300 p-[0.5em_1em]'
                }>
                {engLanguageActive ? 'proyects' : 'proyectos'}
              </Link>
            </li>
            <li>
              <Link
                href={'/experience'}
                className={
                  currentRoute == '/experience'
                    ? 'text-white p-[0.5em_1em] duration-500 rounded-[2em] bg-[#9BB8CD] '
                    : 'rounded-[2em] duration-300 p-[0.5em_1em]'
                }>
                {engLanguageActive ? 'experience' : 'experiencia'}
              </Link>
            </li>
            <li>
              <Link
                href={'/contact'}
                className={
                  currentRoute == '/contact'
                    ? 'text-white p-[0.5em_1em] duration-500 rounded-[2em] bg-[#9BB8CD] '
                    : 'rounded-[2em] duration-300 p-[0.5em_1em]'
                }>
                {engLanguageActive ? 'hire me' : 'contratame'}
              </Link>
            </li>
          </ul>
        </nav>

        <ThemeButtons />

        <LanguageButtons />
      </div>
    </header>
  );
};

export default NavBar;
