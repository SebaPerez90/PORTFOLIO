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
    <button
      className=''
      aria-label='switch-language-btn'
      onClick={toggleEfect}>
      <Image
        src={engLanguageActive ? english_icon : spanish_icon}
        alt='language-icon'
        priority
        width={25}
        height={25}
        ref={buttonRef}
      />
    </button>
  );
};

export default LanguageButtons;
