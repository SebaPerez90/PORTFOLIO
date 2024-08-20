import { useStore } from '@/context/store';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction, useRef } from 'react';
import { GrClose } from 'react-icons/gr';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { IProject } from '@/interface/project.interface';

interface ModalProps {
  changeVisibility: Dispatch<SetStateAction<boolean>>;
  currentProject: IProject | undefined;
}

const Modal: React.FC<ModalProps> = ({ changeVisibility, currentProject }) => {
  const { engLanguageActive } = useStore();
  const modal = useRef<HTMLDivElement | null>(null);

  const closeModal = () => {
    modal.current?.classList.add('[transition:all_400ms]');
    modal.current?.classList.add('[opacity:0!important]');
    modal.current?.classList.replace('sm:w-[40em]', 'w-0');
    modal.current?.classList.replace('w-[100%]', 'w-0');
    setTimeout(() => {
      modal.current?.classList.replace('flex', 'hidden');
      document
        .getElementById('projects-section')
        ?.classList.remove('[filter:blur(5px)]');
      document.documentElement.classList.remove('overflow-y-hidden');
      changeVisibility(false);
    }, 400);
  };

  return (
    <motion.div
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ x: 0, opacity: 1 }}
      ref={modal}
      className='z-[60] fixed  w-[100%] sm:w-[40em] overflow-y-scroll scrollbar-modal dark:scrollbar-modal-dark h-full right-0 top-0 items-center justify-between dark:bg-dark-secondary bg-white flex flex-col [box-shadow:-7px_0px_14px_-4px_rgba(0,0,0,0.11)] pt-12 pb-4 gap-10'>
      <div className='flex flex-col gap-4'>
        <h1 className='font-bold text-center text-3xl text-light-500/85 dark:text-dark-sky flex flex-col items-center gap-1'>
          {currentProject!.title}
          {currentProject?.development_stage && (
            <span className='text-base text-slate-500 font-normal'>
              ({engLanguageActive ? 'Development Stage' : 'Etapa de Desarrollo'}
              )
            </span>
          )}
        </h1>
        <span className='flex justify-center gap-5 flex-wrap px-8'>
          {currentProject!.skills.map((element, index) => (
            <span
              key={index}
              className='border  font-bold text-sm rounded-md p-1 border-slate-600 text-[#404040ce] dark:text-slate-400 relative before:absolute before:w-[0.5em] before:h-[0.5em] before:left-[-0.75em] before:bottom-2 before:bg-light-800 before:rounded-full bg-slate-100 dark:bg-dark-secondary before:animate-[disc-shining_800ms_ease-out_alternate-reverse_infinite]'>
              {element}
            </span>
          ))}
        </span>
        <p className='font-medium text-slate-500 text-base sm:text-sm dark:text-slate-50 pl-10 pr-8 mt-4'>
          {engLanguageActive
            ? currentProject?.detailedDescriptionEN
            : currentProject?.detailedDescriptionES}
        </p>
        <div className='self-start pl-10 mt-12'>
          <span className='font-bold text-slate-700 text-lg dark:text-slate-50'>
            {engLanguageActive ? 'Features:' : 'Caracteristicas:'}
          </span>
          {engLanguageActive ? (
            <ul className='flex flex-col gap-2 mt-2 list-disc pl-4 marker:text-light-500/85 dark:marker:text-dark-pink'>
              {currentProject?.featuresEN.map((feature, index) => (
                <li
                  key={index}
                  className='font-medium text-slate-500 text-base sm:text-sm dark:text-slate-300'>
                  {feature}
                </li>
              ))}
            </ul>
          ) : (
            <ul className='flex flex-col gap-2 mt-2 list-disc pl-4 marker:text-light-500/85 dark:marker:text-dark-pink'>
              {currentProject?.featuresES.map((feature, index) => (
                <li
                  key={index}
                  className='font-medium text-slate-500 text-base sm:text-sm dark:text-slate-300'>
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className='flex justify-center gap-12'>
        <Link
          target='_blank'
          className='bg-light-500 px-8 py-3 text-slate-50 rounded-md hover:bg-light-500/75 duration-200 hover:duration-200 active:scale-90 dark:bg-dark-sky flex items-center gap-3 dark:hover:bg-dark-sky/70'
          href={currentProject!.repository}
          aria-label='code-link'>
          {engLanguageActive ? 'Repository' : 'Repositorio'} <FaCode />
        </Link>
        <Link
          target='_blank'
          className='bg-light-500 px-8 py-3 text-slate-50 rounded-md hover:bg-light-500/75 duration-200 hover:duration-200 active:scale-90 dark:bg-dark-sky flex items-center gap-3 dark:hover:bg-dark-sky/70'
          href={currentProject!.deploy}
          aria-label='deploy-link'>
          Deploy
          <FaExternalLinkAlt />
        </Link>
      </div>
      <button
        onClick={closeModal}
        className='px-8 py-3 flex rounded-md dark:bg-dark-sky dark:hover:bg-dark-sky/70 text-slate-50 items-center bg-light-500 hover:bg-light-500/75 active:scale-90 absolute right-2 top-2 gap-3'>
        {engLanguageActive ? 'Close' : 'Cerrar'}
        <GrClose />
      </button>
    </motion.div>
  );
};

export default Modal;
