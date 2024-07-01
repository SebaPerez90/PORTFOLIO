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
    <div className='relative'>
      <div
        className='cursor-pointer relative after:absolute after:-left-3 after:-bottom-3 after:w-10 after:h-10 dark:hover:after:bg-[#ffffff2a] hover:after:bg-[#0000001a] after:duration-150 after:rounded-full active:scale-90 after:z-10
          social-network'
        onClick={expandSettings}>
        <span className='absolute -left-3 top-7 text-[#333333be] dark:text-slate-200 opacity-0 font-semibold text-xs'>
          {engLanguageActive ? 'settings' : 'ajustes'}
        </span>
        <IoMdSettings />
      </div>
      <div
        ref={menuRef}
        className='flex flex-col justify-center items-center gap-4 opacity-0 duration-200 border h-36 w-36 absolute -right-14 top-8 z-50 rounded-lg bg-slate-100'>
        <ThemeButtons />
        <LanguageButtons />
      </div>
    </div>
  );
};

export default Preferences;
