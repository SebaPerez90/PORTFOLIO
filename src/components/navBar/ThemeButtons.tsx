import { useRef, useEffect, useState, MutableRefObject } from 'react';

import Image from 'next/image';

import LanguageButtons from '@/components/NavBar/LanguageButtons';

const ThemeButtons = () => {
  const iconRef: MutableRefObject<any> = useRef(null);
  const buttonRef: any = useRef(null);

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'ligth' : 'dark');
  };

  const toggleEfect = () => {
    if (theme === 'dark') {
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
    <div className='flex justify-center items-center gap-2'>
      {theme === 'dark' ? (
        <div className='pr-[0.1em] py-[1.1rem] bg-theme_dark-box-second border-2 border-theme_dark-sup-pink flex justify-between items-center w-20 h-8 rounded-full overflow-hidden'>
          <Image
            className='relative left-1 top-[0.15em] z-10'
            ref={iconRef}
            width={30}
            height={30}
            src={'/svg/moon-icon.svg'}
            alt='dark-theme-icon'
          />
          <button
            aria-label='switch-theme-btn'
            onClick={toggleEfect}
            ref={buttonRef}
            className='duration-400 bg-theme_dark-sup-pink hover:bg-pink-900 hover:duration-200 m-[1px] rounded-full  h-7 w-7 z-20'></button>
        </div>
      ) : (
        <div className='border-2 border-[#4d4dffbf] pr-[0.1em] py-[1rem] bg-[#ececec2d] flex justify-between items-center w-20  h-7 rounded-full overflow-hidden'>
          <button
            aria-label='switch-theme-btn'
            onClick={toggleEfect}
            ref={buttonRef}
            className='duration-400 hover:duration-200 bg-[#4d4dffbf] hover:bg-[#4d4dff73] rounded-full h-7 w-7 m-[2px] z-20'></button>
          <Image
            width={30}
            height={30}
            ref={iconRef}
            src={'/svg/sun-icon.svg'}
            alt='light-theme-icon'
          />
        </div>
      )}
      <LanguageButtons />
    </div>
  );
};

export default ThemeButtons;
