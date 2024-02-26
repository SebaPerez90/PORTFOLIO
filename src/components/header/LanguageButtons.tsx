'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

import english_icon from '@/assets/images/english-icon.png';
import spanish_icon from '@/assets/images/spanish-icon.png';

import { useStore } from '@/store';

const LanguageButtons = () => {
  const { toggleLanguage, engLanguageActive } = useStore();

  const buttonRef: any = useRef(null);

  const toggleEfect = () => {
    buttonRef.current.style.animation = 'toggleLanguageEffect 900ms';
    toggleLanguage();
    setTimeout(() => {
      buttonRef.current.style.removeProperty('animation');
    }, 600);
  };

  return (
    <section className='flex mt-2'>
      {engLanguageActive ? (
        <button onClick={toggleEfect}>
          <Image
            src={spanish_icon}
            alt='english-icon-reference'
            priority
            width={35}
            height={35}
            className='right-2 relative'
            ref={buttonRef}
          />
        </button>
      ) : (
        <button onClick={toggleEfect}>
          <Image
            src={english_icon}
            alt='spanish-icon-reference'
            priority
            width={35}
            height={35}
            className='right-2 relative'
            ref={buttonRef}
          />
        </button>
      )}
    </section>
  );
};

export default LanguageButtons;
