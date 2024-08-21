import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const ThemeButtons = () => {
  const iconRef = useRef<HTMLImageElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

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
      buttonRef.current!.style.animation =
        'activating-dark-mode 300ms linear 1 forwards';
      iconRef.current!.style.animation =
        'moon-effect-icon 290ms linear infinite';
      setTimeout(() => {
        toggleTheme();
      }, 320);
    } else {
      buttonRef.current!.style.animation =
        'desactivating-dark-mode 300ms linear 1 forwards';
      iconRef.current!.style.animation =
        'sun-effect-icon 800ms linear infinite';
      setTimeout(() => {
        toggleTheme();
      }, 320);
    }
  };

  return (
    <>
      {theme === 'dark' ? (
        <div className='pr-[0.1em] py-[0.8rem] bg-dark-secondary border-2 border-dark-pink flex justify-between items-center w-[4rem] h-3 scale-100 xl:scale-125 rounded-full overflow-hidden'>
          <Image
            className='relative left-1 top-[0.15em] z-10'
            ref={iconRef}
            width={25}
            height={25}
            src={'/svg/moon-icon.svg'}
            alt='dark-theme-icon'
          />
          <button
            aria-label='switch-theme-btn'
            onClick={toggleEfect}
            ref={buttonRef}
            className='duration-400 bg-dark-pink hover:bg-pink-900 hover:duration-200 m-[1px] rounded-full  h-5 w-5 z-20'></button>
        </div>
      ) : (
        <div className='border-2 border-[#4d4dffbf] pr-[0.1em] py-[0.8rem] bg-[#ececec2d] flex justify-between items-center w-[4rem] scale-100 xl:scale-125 h-3 rounded-full overflow-hidden'>
          <button
            aria-label='switch-theme-btn'
            onClick={toggleEfect}
            ref={buttonRef}
            className='duration-400 hover:duration-200 bg-[#4d4dffbf] hover:bg-[#4d4dff73] rounded-full h-5 w-5 m-[2px] z-20'></button>
          <Image
            width={20}
            height={20}
            ref={iconRef}
            src={'/svg/sun-icon.svg'}
            alt='light-theme-icon'
          />
        </div>
      )}
    </>
  );
};

export default ThemeButtons;
