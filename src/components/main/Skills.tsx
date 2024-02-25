import { useEffect, useRef } from 'react';

import { useStore } from '@/store';
import { Roboto } from 'next/font/google';

import addSvgIcon from '@/data/addSvgIcon';

import Image from 'next/image';
import lg_icon from '@/assets/images/lg-icon.webp';
import mobile from '@/assets/images/mobile.webp';
import desktop from '@/assets/images/desktop.webp';
import team from '@/assets/images/team.webp';

import { IoMdHome } from 'react-icons/io';
import { IoChevronBackOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6';
import { HiWifi } from 'react-icons/hi';
import { MdBattery50 } from 'react-icons/md';
import { FaSignal } from 'react-icons/fa';
import { FaPowerOff } from 'react-icons/fa';

const roboto = Roboto({
  weight: ['900'],
  subsets: ['latin'],
});

interface Skills {
  title: string;
  skills: string[];
}

const Skills = () => {
  const { engLanguageActive } = useStore();

  const dateRef = useRef<HTMLTimeElement>(null);

  setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

    if (dateRef.current) {
      dateRef.current.innerHTML = `${hours}:${minutes}`;
    }
  }, 1000);

  const skills: Skills[] = [
    {
      title: 'FRONT-END',
      skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS', 'Javascript', 'Sass'],
    },
    {
      title: 'BACK-END',
      skills: ['Node.js', 'Express.js', 'SQLite'],
    },
    {
      title: 'LEARNING',
      skills: ['TypeScript', 'Next.js', 'MongoDB'],
    },
  ];

  return (
    <section
      id='projects-section'
      className='mt-20 w-[100%] bg-gradient-to-b from-[#dedede] via-light-200 to-[#dedede] flex flex-col justify-center items-center'>
      <h1
        className='text-3xl opacity-5 [letter-spacing:15px] text-[#313131] '
        style={roboto.style}>
        {engLanguageActive ? 'SKILLS & SERVICES' : 'HABILIDADES Y SERVICIOS '}🤓
      </h1>

      <section className='py-64 w-full h-full'>
        <h1
          className='text-center text-3xl mb-10 text-[#333333d7]'
          style={roboto.style}>
          What can I offer for you?
        </h1>
        <div className='relative flex justify-between items-end w-[70%] m-[0_auto] border-2'>
          <div className='w-64 h-[30rem] flex flex-col justify-between border-[10px] border-[#252525] bg-white rounded-[25px]'>
            <div className='py-1 rounded-[13px_13px_0_0] w-full bg-[#4a4a4a] px-2 text-white flex justify-between items-center'>
              <div className='flex items-center gap-2 pl-2'>
                <time ref={dateRef}></time>
                <FaWhatsapp className='text-green-400 scale-110' />
              </div>
              <span className='rounded-full h-[9px] w-[9px] border-black border-4 bg-[#b6b4b4]'></span>
              <div className='flex'>
                <HiWifi />
                <FaSignal />
                <MdBattery50 />
              </div>
            </div>

            <article className='flex flex-col items-center justify-center bg-white h-full'>
              <Image
                src={mobile}
                alt='mobile-screen'
                className='object-cover w-[90%] m-[0_auto] h-auto rounded-sm'
              />
              <h1 className=' text-lg font-semibold text-[#333333b2] text-center'>
                titulo
              </h1>
              <p className='px-3 text-sm text-[#33333380]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                labore, aspernatur odit temporibus, fugiat corporis laudantium
                vitae magni a doloribus totam sit doloremque veniam reiciendis
                cum voluptatem impedit architecto enim!
              </p>
            </article>
            <div className='rounded-[0_0_13px_13px] text-xl w-full bg-[#4a4a4a] py-2 font-black text-white flex justify-around'>
              <IoChevronBackOutline />
              <IoMdHome />
              <FaBars />
            </div>
          </div>
          <div className='bg-black absolute bottom-[-10em] blur-[200px] h-1/2 w-64 [clip-path:ellipse(50%_6%_at_50%_50%)]'></div>

          {/* other section */}
          <div className='flex flex-col justify-center items-center'>
            <div className='h-[18em] w-[28em] rounded-[0.5em_0.5em_0_0] bg-white border-[1.5em] border-[#2d2d2d] border-b-0'></div>
            <div className='flex items-center relative h-8 w-[28em] rounded-[0_0_0.5em_0.5em] bg-[#2d2d2d]'>
              <div className='absolute left-[45%] text-sm text-white font-black flex items-center gap-1'>
                <Image src={lg_icon} alt='lg_icon' width={18} height={18} />
                <span>LG</span>
              </div>
              <FaPowerOff className='absolute right-8 text-white text-lg' />
            </div>
            <div className='h-12 w-8 bg-[#2d2d2d]'></div>
            <div className='h-4 w-[20em] bg-[#2d2d2d] rounded-[0.5em_0.5em_0_0]'></div>
          </div>
        </div>
      </section>

      {/* ignorar de aca en adelante */}
      <section className='gap-8 w-[80%]  flex justify-around my-8'>
        {skills.map((item, index) => (
          <div
            className='bg-white gap-4 flex flex-col justify-center w-full shadow-[14px_30px_20px_-10px_#0000004f] rounded-md'
            key={index}>
            <h1 className='text-[#333333ac] [letter-spacing:5px] text-2xl font-extrabold text-center relative bottom-4'>
              {item.title}
            </h1>
            <ul className='px-8  gap-6 flex-wrap flex flex-col justify-around items-start h-[50%] w-full '>
              {item.skills.map((skill, index) => (
                <li
                  className='text-xs cursor-defaul font-semibold text-[#3333339e] gap-2 flex items-center w-max'
                  key={index}>
                  {/* Insert dynamically the icon corresponding to the value of item.skill */}
                  {addSvgIcon(skill)}
                  <p>{skill}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Skills;
