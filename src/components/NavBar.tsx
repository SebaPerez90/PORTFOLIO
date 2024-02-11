'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { useStore } from '@/store';

const NavBar = () => {
  const currentRoute = usePathname();

  const { engLanguageActive } = useStore();

  return (
    <nav className='flex justify-between'>
      <ul className='nav-bar flex w-full justify-end gap-10 items-center p-4 font-medium'>
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
            className={currentRoute == '/experience' ? 'isActive' : 'inactive'}>
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
  );
};

export default NavBar;
