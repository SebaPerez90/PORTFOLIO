import projects from '@/utils/projects.json';
import { useStore } from '@/context/store';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useEffect, useRef, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import Image from 'next/image';

interface IProject {
  title: string;
  descriptionES: string;
  descriptionEN: string;
  repository: string;
  deploy: string;
  skills: string[];
  detailedDescriptionEN: string[];
  detailedDescriptionES: string[];
  featuresEN: string[];
  featuresES: string[];
  screen_shoots: string[];
  development_stage?: boolean;
}

const Proyects = () => {
  const { engLanguageActive } = useStore();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<IProject>();
  const modal = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);

  const openModal = (project: IProject) => {
    setCurrentProject(project);
    if (currentProject) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (currentProject) {
      modal.current?.classList.replace('hidden', 'flex');
      container.current?.classList.add('[filter:blur(5px)]');
      document.documentElement.classList.add('overflow-y-hidden');
      setIsOpen(true);
    }
  }, [currentProject]);

  const closeModal = () => {
    modal.current?.classList.add('[transition:all_400ms]');
    modal.current?.classList.add('[opacity:0!important]');
    modal.current?.classList.replace('sm:w-[40em]', 'w-0');
    modal.current?.classList.replace('w-[100%]', 'w-0');
    setTimeout(() => {
      modal.current?.classList.replace('flex', 'hidden');
      container.current?.classList.remove('[filter:blur(5px)]');
      document.documentElement.classList.remove('overflow-y-hidden');
      setIsOpen(false);
    }, 400);
  };

  return (
    <>
      <section
        ref={container}
        className='flex flex-col items-center gap-24 [transition:all_400ms] pt-20'>
        <h1 className=' dark:text-slate-50 text-3xl font-bold text-[#334155]'>
          Portfolio.
        </h1>
        <div className='flex flex-col justify-center gap-40'>
          {projects.map((element, index) => (
            <motion.div
              transition={{
                duration: 0.3,
                delay: 0.2,
              }}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              key={index}
              className='flex items-center gap-6 flex-wrap justify-center'>
              <div className='w-[25.5em] sm:w-[33em] h-auto rounded-md [background:linear-gradient(to_right,#373b44,#4286f4,#373b44)]'>
                {element.screen_shoots.map((element, index) => (
                  <div
                    key={index}
                    className='p-8'>
                    <Image
                      src={element}
                      width={700}
                      height={700}
                      alt='screen-shoot'
                      className='w-full h-full object-cover border-2 border-slate-300 rounded-md  scale-100 sm:scale-75 hover:scale-90 [transition:all_300ms]'
                    />
                  </div>
                ))}
              </div>
              <div className='flex flex-col gap-4 py-4 px-6 rounded-md w-[40ch] (h-[13em]) justify-evenly bg-[#f6f6f7] dark:bg-dark-secondary [box-shadow:0px_3px_15px_0px_#0000002a]'>
                <h1 className='font-bold text-center text-3xl text-light-500/85 dark:text-dark-sky'>
                  {element.title}
                </h1>
                <p className='font-medium text-slate-500 text-lg md:text-sm dark:text-slate-50'>
                  {engLanguageActive
                    ? element.descriptionEN
                    : element.descriptionES}
                </p>
                <button
                  onClick={() => openModal(element as IProject)}
                  className='flex items-center w-max gap-2 text-light-500/85 font-bold dark:text-dark-pink duration-300 hover:duration-300 hover:text-light-500/50 dark:hover:text-dark-pink/80'>
                  {engLanguageActive ? 'Read More' : 'Leer Más'}
                  <FaArrowRightLong />
                </button>
              </div>
            </motion.div>
          ))}
          <Link
            className='bg-light-500 py-3 px-8 w-max text-slate-50 rounded-md font-semibold hover:bg-light-500/80 duration-200 hover:duration-200 active:scale-90 dark:bg-dark-sky dark:hover:bg-dark-sky/70 m-[0_auto] relative bottom-24'
            href={'https://github.com/SebaPerez90'}
            target='_blank'
            aria-label='contact-link'>
            {engLanguageActive ? 'Ver Todo' : 'View All'}
          </Link>
        </div>
      </section>
      {isOpen && (
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
                  (
                  {engLanguageActive
                    ? 'Development Stage'
                    : 'Etapa de Desarrollo'}
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
      )}
    </>
  );
};

export default Proyects;
