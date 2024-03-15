import { useRef } from 'react';
import { useStore } from '@/store';

import { FaRegCopy } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const CopyEmailBtn = () => {
  const { engLanguageActive } = useStore();

  const emailAddressRef: any = useRef<HTMLDivElement>(null);
  const infoMessajeRef = useRef<HTMLSpanElement>(null);

  const handleCopyToClipboard = () => {
    if (emailAddressRef.current !== null && infoMessajeRef.current !== null) {
      const textToCopy = emailAddressRef.current.innerText;
      infoMessajeRef.current.style.opacity = '1';

      navigator.clipboard.writeText(textToCopy);

      setTimeout(() => {
        infoMessajeRef.current
          ? (infoMessajeRef.current.style.opacity = '0')
          : null;
      }, 3000);
    }
  };

  return (
    <div className='max-[400px]:scale-90 relative self-center flex gap-5 border dark:border-slate-600/50 rounded-md px-4 dark:bg-theme_dark-box-second w-max py-1 mt-6 bg-white'>
      <span
        ref={emailAddressRef}
        className='dark:text-zinc-50  flex items-center gap-1 text-xs'>
        <MdOutlineEmail className='text-red-500 text-lg' />
        sebastian.perez.jobs@gmail.com
      </span>
      <button
        aria-label='copy-text-btn'
        onClick={handleCopyToClipboard}
        className='active:scale-125 rounded-full p-3 border dark:border-theme_dark-box-second dark:hover:bg-theme_dark-box-thir  dark:hover:border-zinc-600 duration-150 border-white hover:bg-slate-400/35'>
        <FaRegCopy className='dark:text-theme_dark-sup-sky text-lg text-light-800' />
      </button>
      <span className='sr-only'>
        This display the message to confirm the copy process
      </span>
      <span
        ref={infoMessajeRef}
        className='cursor-default absolute right-[-0.6em] w-max top-14 text-green-400 font-black opacity-0 border bg-white dark:border-slate-600/50 dark:bg-theme_dark-box-second p-[0.7em_1em] rounded-md'>
        {engLanguageActive ? 'coppied!' : 'copiado!'}
      </span>
    </div>
  );
};

export default CopyEmailBtn;
