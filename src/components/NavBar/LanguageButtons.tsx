import { useRef } from 'react';
import { useStore } from '@/context/store';

import Image from 'next/image';
import english_icon from '@/assets/images/english-icon.png';
import spanish_icon from '@/assets/images/spanish-icon.png';

const LanguageButtons = () => {
  const { toggleLanguage, engLanguageActive } = useStore();

  const buttonRef = useRef<HTMLImageElement | null>(null);

  const toggleEfect = () => {
    buttonRef.current!.style.animation = 'toggleLanguageEffect 900ms';
    toggleLanguage();
    setTimeout(() => {
      buttonRef.current!.style.removeProperty('animation');
    }, 600);
  };

  return (
    <div className='flex items-center'>
      <span className='text-[#333333be] p-1 border border-slate-600 rounded-md dark:text-slate-200 font-bold text-xs'>
        {engLanguageActive ? 'English' : 'Español'}
      </span>
      <button
        aria-label='switch-language-btn'
        onClick={toggleEfect}>
        {engLanguageActive ? (
          <Image
            src={spanish_icon}
            alt='english-icon-reference'
            priority
            width={35}
            height={35}
            ref={buttonRef}
          />
        ) : (
          <Image
            src={english_icon}
            alt='icon-reference'
            priority
            width={35}
            height={35}
            ref={buttonRef}
          />
        )}
      </button>
    </div>
  );
};

export default LanguageButtons;