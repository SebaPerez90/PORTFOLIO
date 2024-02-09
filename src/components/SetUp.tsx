'use client';

import React from 'react';
import NavBar from '@/components/NavBar';

import { IoMdMoon } from 'react-icons/io';
import { MdSunny } from 'react-icons/md';
import { LiaLanguageSolid } from 'react-icons/lia';
import { useStore } from '@/store';

const SetUp = () => {
  const { darkThemeActive, toggleTheme, toggleLanguage } = useStore();

  return (
    <header className='flex border-b-[2px] border-b-[#d2daff] justify-end items-center'>
      <NavBar />
      <div className='flex gap-6 border-l-[3px] border-l-[#aac4ff] px-6'>
        <button onClick={toggleTheme}>
          {darkThemeActive ? <IoMdMoon /> : <MdSunny />}
        </button>
        <button onClick={toggleLanguage}>
          <LiaLanguageSolid />
        </button>
      </div>
    </header>
  );
};

export default SetUp;
