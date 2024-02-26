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
    <section className='flex px-4 justify-center items-center'>
      {darkThemeActive ? (
        <div className='pr-[0.1em] py-[1.1rem] bg-[#9147ff4e] border-[1px] border-[#9147ff] flex justify-between items-center w-20 h-8 rounded-full overflow-hidden'>
          <Image
            className='scale-75 z-10'
            ref={iconRef}
            src={moon_icon}
            alt='dark-theme-icon'
          />
          <button
            onClick={toggleEfect}
            ref={buttonRef}
            className='bg-[#9147ff] m-[1px] rounded-full border-2 h-7 w-7 z-20'></button>
        </div>
      ) : (
        <div className='border-2 pl-[0.1em] mt-2 bg-[#ffa600] flex justify-between items-center w-16  h-7 rounded-full overflow-hidden'>
          <button
            onClick={toggleEfect}
            ref={buttonRef}
            className='bg-[#ffd16d] rounded-full border-2 h-5 w-5 z-20'></button>
          <Image
            className='scale-[0.6] relative left-1 z-10'
            ref={iconRef}
            src={sun_icon}
            alt='light-theme-icon'
          />
        </div>
      )}
    </section>
  );
};

export default ThemeButtons;
