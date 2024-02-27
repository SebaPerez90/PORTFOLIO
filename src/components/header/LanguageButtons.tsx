import { useRef } from 'react';
import { useStore } from '@/store';

import Image from 'next/image';
import english_icon from '@/assets/images/english-icon.png';
import spanish_icon from '@/assets/images/spanish-icon.png';

const LanguageButtons = () => {
  const { toggleLanguage, engLanguageActive } = useStore();

  const buttonRef: React.MutableRefObject<any> = useRef(null);

  const toggleEfect = () => {
    buttonRef.current.style.animation = 'toggleLanguageEffect 900ms';
    toggleLanguage();
    setTimeout(() => {
      buttonRef.current.style.removeProperty('animation');
    }, 600);
  };

  return (
    <button onClick={toggleEfect}>
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
  );
};

export default LanguageButtons;
