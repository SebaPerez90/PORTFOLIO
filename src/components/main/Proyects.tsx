import Link from 'next/link';
import Image from 'next/image';

import { FiGithub } from 'react-icons/fi';
import { FaLink } from 'react-icons/fa6';

import projects from '@/data/projets.json';
import addSvgIcon from '@/data/addSvgIcon';

import { Roboto } from 'next/font/google';
import { useStore } from '@/store';

const roboto = Roboto({
  weight: ['900'],
  subsets: ['latin'],
});

const Proyects = () => {
  const { engLanguageActive } = useStore();

  return (
    <section
      id='projects-section'
      className='mt-20 lg:w-[80%] md:w-[90%] w-full flex flex-col justify-center items-center'>
      <h1
        className='dark:text-slate-50 text-4xl min-[500px]:[letter-spacing:10px] text-[#313131]'
        style={roboto.style}>
        {engLanguageActive ? 'PROJECTS' : 'PROYECTOS'}💻
      </h1>

      {projects.map((item, index) => (
        <div
          className='flex-col sm:flex-row flex mt-28 rounded-none md:rounded-md shadow-[14px_30px_20px_-10px_#0000004f]'
          key={index}>
          <article className='dark:bg-theme_dark-main-bg relative rounded-none md:rounded-[0.5em_0_0_0.5em] gap-12 flex flex-col justify-around items-center bg-white w-full py-8'>
            <h2
              className='dark:text-theme_dark-sup-sky px-2 text-4xl text-center font-extrabold text-[#454545d3]'
              style={roboto.style}>
              {item.title}
            </h2>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-center gap-1'>
                {item.skills.map((skill, index) => (
                  <p
                    className='p-[0.2em_0.8em] text-xs cursor-default gap-1 w-max rounded-full flex items-center bg-gradient-to-b from-[#676767b0] to-black text-white'
                    key={index}>
                    {/* Insert dynamically the icon corresponding to the value of item.skill */}
                    {addSvgIcon(skill)}
                    <span>{skill}</span>
                  </p>
                ))}
              </div>

              <div className='w-[70%] m-[0_auto]'>
                {engLanguageActive ? (
                  <p className='bg-[#ececec] border dark:bg-theme_dark-box-second text-sm rounded dark:border-slate-500/30 p-4 dark:text-zinc-300 font-medium text-[#696969] ml-4'>
                    {item.descriptionES}
                  </p>
                ) : (
                  <p className='bg-[#ececec] border dark:bg-theme_dark-box-second text-sm rounded dark:border-slate-500/30 p-4 dark:text-zinc-300 font-medium text-[#696969] ml-4'>
                    {item.descriptionES}
                  </p>
                )}
              </div>
            </div>
            <ul className='absolute bottom-[-4.5em] sm:bottom-4 sm:relative flex sm:flex-col-reverse md:flex-row gap-4 lg:gap-10 items-center'>
              <li>
                <Link
                  className='btn-light dark:btn-dark dark:bg-gradient-to-t dark:from-theme_dark-main-bg dark:to-theme_dark-main-bg dark:hover:border-theme_dark-sup-pink dark:border-2'
                  href={item.code}>
                  <FiGithub className='text-xl' />
                  code
                </Link>
              </li>
              <li>
                <Link
                  className='btn-light dark:btn-dark dark:bg-gradient-to-t dark:from-theme_dark-main-bg dark:to-theme_dark-main-bg dark:hover:border-theme_dark-sup-pink dark:border-2'
                  href={item.preview}>
                  <FaLink className='text-xl' />
                  preview
                </Link>
              </li>
            </ul>
          </article>
          <article className='dark:bg-theme_dark-main-bg pb-8 pt-24 sm:pt-0 sm:pb-0 w-full flex justify-center bg-[#ececec] items-center rounded-none md:rounded-[0_0.5em_0.5em_0]'>
            <div className='custom-scrollbar-light dark:custom-scrollbar-dark flex w-[90%] [scroll-snap-type:x_mandatory] overflow-x-auto my-4'>
              {item.screen_shoots.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  width={450}
                  height={450}
                  priority
                  alt='screen-shoot'
                  className='sticky left-0 h-full w-full object-cover snap-center'
                />
              ))}
            </div>
          </article>
        </div>
      ))}
    </section>
  );
};

export default Proyects;
