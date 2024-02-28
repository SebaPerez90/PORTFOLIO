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
  const { darkThemeActive, engLanguageActive } = useStore();

  return (
    <section
      id='projects-section'
      className='mt-32  flex flex-col justify-center items-center'>
      <h1
        className='text-3xl [letter-spacing:15px] text-[#313131]'
        style={roboto.style}>
        {engLanguageActive ? 'PROJECTS' : 'PROYECTOS'}💻
      </h1>

      {projects.map((item, index) => (
        <div
          className='overflow-hidden flex mt-20 w-4/5 rounded-md shadow-[14px_30px_20px_-10px_#0000004f]'
          key={index}>
          <article className='rounded-[0.5em_0_0_0.5em] gap-12 pt-10 pb-4 shadow-fade-boxxx after:[-webkit-mask-image:linear-gradient(to_right_bottom,#ff0000,#ff000017_50%)] after:absolute after:-z-10 after:left-0 after:top-0 after:bg-[#dedede] after:w-[95%] after:h-[95%] after:m-[0.8em] relative z-10  flex flex-col justify-around items-center bg-white'>
            <h2
              className='text-4xl text-[#7286D3] text-center'
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

              <div className='px-8'>
                {engLanguageActive ? (
                  <p className='text-[#909090] ml-4 text-[0.9em]'>
                    {item.descriptionES}
                  </p>
                ) : (
                  <p className='text-[#909090] ml-4 text-[0.9em]'>
                    {item.descriptionES}
                  </p>
                )}
              </div>
            </div>
            <ul className='flex gap-8 translate-y-[-2em]'>
              <Link className='btn-primary' href={item.code}>
                <FiGithub className='text-xl' />
                code
              </Link>
              <Link className='btn-primary' href={item.preview}>
                <FaLink className='text-xl' />
                preview
              </Link>
            </ul>
          </article>
          <article className='relative flex items-center p-[0_2em_0_0] rounded-[0_0.5em_0.5em_0] z-10 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:-z-10 before:bg-gradient-to-l to-white from-light-200 lig'>
            <div className='custom-scrollbar flex w-[25em] [scroll-snap-type:x_mandatory] overflow-x-auto web'>
              {item.screen_shoots.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  width={300}
                  height={300}
                  loading='lazy'
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
