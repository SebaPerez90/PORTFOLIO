import { useRef, useState } from 'react';
import { IoMdSettings } from 'react-icons/io';
import { useStore } from '@/context/store';
import ThemeButtons from './ThemeButtons';
import LanguageButtons from './LanguageButtons';

const Preferences = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { engLanguageActive } = useStore();

  const expandSettings = () => {
    setVisibility(!visibility);

    if (visibility) {
      menuRef.current?.classList.remove('opacity-1');
      menuRef.current?.classList.add('opacity-0');
    } else {
      menuRef.current?.classList.remove('opacity-0');
      menuRef.current?.classList.add('opacity-1');
    }
  };

  return (
    <div className='relative flex items-center gap-2'>
      <p className='text-xs font-bold text-[#2f2f2fe3]'>
        {engLanguageActive ? 'About me' : 'Acerca de mi'}
      </p>
      <div
        className='cursor-pointer relative after:absolute after:-left-3 after:-bottom-3 after:w-10 after:h-10 dark:hover:after:bg-[#ffffff2a] hover:after:bg-[#0000001a] after:duration-150 after:rounded-full active:scale-90 after:z-10
          social-network'
        onClick={expandSettings}>
        <span className='absolute -left-3 top-7 text-[#333333be] dark:text-slate-200 opacity-0 font-semibold text-xs'>
          {engLanguageActive ? 'settings' : 'ajustes'}
        </span>
        <IoMdSettings className='dark:text-slate-50' />
      </div>
      <div
        ref={menuRef}
        className='flex flex-col justify-center items-center gap-2 opacity-0 duration-200 h-36 w-36 absolute -right-14 top-8 z-50 rounded-lg bg-white dark:bg-theme_dark-box-thir'>
        <p className='text-xs font-bold text-[#333333be] dark:text-slate-50'>
          {engLanguageActive ? 'Prerences:' : 'Prefecencias:'}
        </p>
        <ThemeButtons />
        <LanguageButtons />
      </div>
    </div>
  );
};

export default Preferences;
