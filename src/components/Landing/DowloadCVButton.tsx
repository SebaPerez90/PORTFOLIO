import { useEffect, useState } from 'react';
import { useStore } from '@/context/store';
import { FaRegFilePdf } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';

const DowloadCVButton = () => {
  const [isDownloaded, setIsDownloaded] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { engLanguageActive } = useStore();

  const changingVisibility = () => {
    const divElement = document.getElementById('hidden-element');

    if (isOpen) {
      divElement?.classList.replace('scale-1', 'scale-0');
      setIsOpen(false);
    } else {
      divElement?.classList.replace('scale-0', 'scale-1');
      setIsOpen(true);
    }
  };

  const updatingState = () => {
    const download_button = document.getElementById('download-btn');
    const divElement = document.getElementById('hidden-element');

    if (download_button) {
      divElement?.classList.add('hidden');
      download_button.style.borderColor = '#22c55e';
      download_button.style.pointerEvents = 'none';

      {
        engLanguageActive
          ? (download_button.innerHTML =
              '<span class="text-[#22c55e] py-[0.15rem]">Downloaded</span>')
          : (download_button.innerHTML =
              '<span class="text-[#22c55e] py-[0.15rem]">Descargado</span>');
      }
    }
  };

  useEffect(() => {
    if (isDownloaded === true) updatingState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDownloaded]);

  return (
    <div className='relative flex flex-col z-50'>
      <button
        id='download-btn'
        onClick={changingVisibility}
        disabled={isDownloaded}
        aria-label='visibility-switch-btn'
        className='border-slate-500 rounded-md text-slate-500 flex items-center gap-1 justify-center border dark:border-dark-sky dark:text-dark-sky p-3 font-bold overflow-hidden duration-300 hover:duration-300 active:scale-95 bg-white dark:bg-inherit dark:hover:bg-dark-tertiary/70 hover:bg-slate-200 w-max'>
        {engLanguageActive ? 'Download CV' : 'Descargar CV'}
        <MdDownload className='text-xl' />
      </button>
      <span className='sr-only'>
        Choose the language for downloading the CV
      </span>

      <div
        id='hidden-element'
        className='z-50 scale-0 [transition:all_150ms] absolute bottom-[-8em] left-0'>
        <ul className='flex flex-col p-1 gap-2 border-2 rounded-md dark:border-slate-700/50 dark:bg-dark-secondary bg-white'>
          <li onClick={() => setIsDownloaded(!isDownloaded)}>
            <a
              aria-label='cv-link'
              className='dark:hover:bg-dark-tertiary/70 hover:bg-slate-300/50 hover:duration-300 duration-300 text-slate-500 py-3 px-3  dark:text-zinc-300 font-semibold text-base flex justify-center items-center gap-2 w-[11em]'
              href='/sebastian-perez-en.pdf'
              download='sebastian-perez-en.pdf'>
              cv-english.pdf{' '}
              <FaRegFilePdf className='dark:text-dark-pink text-light-500/75' />
            </a>
          </li>
          <li
            onClick={() => setIsDownloaded(!isDownloaded)}
            className='border-t-2 dark:border-slate-700/50 '>
            <a
              aria-label='cv-link'
              className='dark:hover:bg-dark-tertiary/70 hover:bg-slate-300/50 hover:duration-300 duration-300 text-slate-500 py-3 px-3  dark:text-zinc-300 font-semibold text-base flex justify-center items-center gap-2 w-[11em]'
              href='/sebastian-perez-es.pdf'
              download='sebastian-perez-es.pdf'>
              cv-español.pdf{' '}
              <FaRegFilePdf className='dark:text-dark-pink text-light-500/75' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DowloadCVButton;
