import { useRef, useState } from 'react';
import { IoMdSettings } from 'react-icons/io';
import { useStore } from '@/context/store';
import ThemeButtons from './ThemeButtons';
import LanguageButtons from './LanguageButtons';
import HamburguerMenu from './HamburguerMenu';

const Preferences = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { engLanguageActive } = useStore();

  const expandSettings = () => {
    setVisibility(!visibility);

    if (visibility) {
      menuRef.current?.classList.remove('opacity-1');
      menuRef.current?.classList.remove('scale-1');
      menuRef.current?.classList.add('opacity-0');
      menuRef.current?.classList.add('scale-0');
    } else {
      menuRef.current?.classList.remove('opacity-0');
      menuRef.current?.classList.remove('scale-0');
      menuRef.current?.classList.add('opacity-1');
      menuRef.current?.classList.add('scale-1');
    }
  };

  return (
    <div className='xl:scale-125 relative flex items-center gap-2'>
      <div
        className='cursor-pointer relative after:absolute after:-left-2 after:-bottom-2 after:w-10 after:h-10 dark:hover:after:bg-[#ffffff2a] hover:after:bg-[#0000000f] after:duration-150 after:rounded-full active:scale-90 after:z-10
          social-network'
        onClick={expandSettings}>
        <span className='absolute -left-2 top-9 text-[#333333be] dark:text-slate-200 opacity-0 font-semibold text-xs'>
          {engLanguageActive ? 'settings' : 'ajustes'}
        </span>
        <IoMdSettings className='text-light-500 text-2xl dark:text-dark-pink' />
      </div>
      <div
        ref={menuRef}
        className='flex flex-col justify-center items-center gap-2 opacity-0 scale-0 h-36 w-36 absolute -right-14 top-8 xl:top-9 z-30 rounded-md bg-white dark:bg-dark-tertiary border border-light-500/20 dark:border-dark-pink/10 [box-shadow:7px_9px_9px_-3px_rgba(0,0,0,0.16)] duration-150 text-[#334155]'>
        <ThemeButtons />
        <LanguageButtons />
      </div>
      <HamburguerMenu />
    </div>
  );
};

export default Preferences;
