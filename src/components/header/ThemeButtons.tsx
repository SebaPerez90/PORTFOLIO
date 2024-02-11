'use client';

import React, { useRef } from 'react';

import Image from 'next/image';
import moon_icon from '@/assets/svg/moon-icon.svg';
import sun_icon from '@/assets/svg/sun-icon.svg';

import { useStore } from '@/store';

const ThemeButtons = () => {
  const { darkThemeActive, toggleTheme } = useStore();

  const iconRef: any = useRef(null);
  const buttonRef: any = useRef(null);

  const toggleEfect = () => {
    if (darkThemeActive) {
      buttonRef.current.style.animation =
        'activating-dark-mode 300ms linear 1 forwards';
      iconRef.current.style.animation =
        'moon-effect-icon 290ms linear infinite';
      setTimeout(() => {
        toggleTheme();
      }, 320);
    } else {
      buttonRef.current.style.animation =
        'desactivating-dark-mode 300ms linear 1 forwards';
      iconRef.current.style.animation = 'sun-effect-icon 800ms linear infinite';
      setTimeout(() => {
        toggleTheme();
      }, 320);
    }
  };

  return (
    <div className='flex gap-6 border-l-[3px] border-l-[#aac4ff] px-6 justify-center items-center'>
      {darkThemeActive ? (
        <div className='border-[1px] border-[#b1adcc] bg-[#3a3a3a] flex justify-between items-center w-20 h-8 rounded-full overflow-hidden'>
          <Image
            className='scale-75 z-10'
            ref={iconRef}
            src={moon_icon}
            alt='dark-theme-icon'
          />
          <button
            onClick={toggleEfect}
            ref={buttonRef}
            className='bg-[#534c7d] m-[1px] rounded-full border-2 h-7 w-7 z-20'></button>
        </div>
      ) : (
        <div className='border-[1px] bg-[#ffa600] flex justify-between items-center w-20  h-8 rounded-full overflow-hidden shadow-[2px_2px_6px_#aaaaaa]'>
          <button
            onClick={toggleEfect}
            ref={buttonRef}
            className='bg-[#ffd16d] m-[1px] rounded-full border-2 h-7 w-7 z-20'></button>
          <Image
            className='scale-75 z-10'
            ref={iconRef}
            src={sun_icon}
            alt='light-theme-icon'
          />
        </div>
      )}
    </div>
  );
};

export default ThemeButtons;
