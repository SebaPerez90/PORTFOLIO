import projects from '@/utils/projects.json';
import { useStore } from '@/context/store';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import { IProject } from '@/interface/project.interface';

const Proyects = () => {
  const { engLanguageActive } = useStore();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<IProject>();
  const modal = useRef<HTMLDivElement | null>(null);

  const openModal = (project: IProject) => {
    setCurrentProject(project);
    document
      .getElementById('projects-section')
      ?.classList.add('[filter:blur(5px)]');
    if (currentProject) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (currentProject) {
      modal.current?.classList.replace('hidden', 'flex');
      document.documentElement.classList.add('overflow-y-hidden');
      setIsOpen(true);
    }
  }, [currentProject]);

  return (
    <>
      <section
        id='projects-section'
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
              <div className='w-[25.5em] sm:w-[33em] h-auto rounded-md [background:radial-gradient(circle,#fff,#4d4dff81)]
              dark:[background:radial-gradient(circle,#1e293b,#974770)]'>
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
        <Modal
          changeVisibility={setIsOpen}
          currentProject={currentProject}
        />
      )}
    </>
  );
};

export default Proyects;
