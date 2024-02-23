import { useEffect, useRef } from 'react';

import { useStore } from '@/store';
import { Roboto } from 'next/font/google';

import addSvgIcon from '@/data/addSvgIcon';

import Image from 'next/image';
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

  const dateRef = useRef<HTMLSpanElement>(null);

  const date = new Date();

  setInterval(() => {
    const date = new Date();

    if (dateRef.current) {
      dateRef.current.innerHTML = date.toLocaleTimeString();
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
      className='mt-20 w-[100%] bg-gradient-to-b from-[#dedede] via-light-100 to-[#dedede] flex flex-col justify-center items-center'>
      <h1
        className='text-3xl opacity-5 [letter-spacing:15px] text-[#313131] '
        style={roboto.style}>
        {engLanguageActive ? 'SKILLS & SERVICES' : 'HABILIDADES Y SERVICIOS '}🤓
      </h1>

      <section className='py-12 w-full h-full'>
        <div className='m-[0_auto] w-72 h-[30rem] flex flex-col justify-between border-[10px] border-[#313131] bg-white rounded-lg'>
          <div className='w-full bg-[#464545] py-2 font-black text-white flex justify-between'>
            <div className='pl-2 flex relative'>
              <span className='z-10  [letter-spacing:1px]' ref={dateRef}></span>
              <span className='absolute left-[44px] bg-[#464545] p-[0.2em_3em_0.2em_0.4em]  z-20'>
                <FaWhatsapp />
              </span>
            </div>
            <div></div>
            <div className='flex'>
              <span>
                <HiWifi />
              </span>
              <span>
                <FaSignal />
              </span>
              <span>
                <MdBattery50 />
              </span>
            </div>
          </div>
          <Image
            src={mobile}
            alt='mobile-screen'
            className='object-cover w-auto h-auto '
          />
          <div className='bg-white border-2 '>
            <h1 className='text-lg font-semibold text-[#333333ac] text-center'>
              titulo
            </h1>
            <p className='text-sm text-[#3333338e]'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              labore, aspernatur odit temporibus, fugiat corporis laudantium
              vitae magni a doloribus totam sit doloremque veniam reiciendis cum
              voluptatem impedit architecto enim!
            </p>
          </div>
          <div className='w-full bg-[#464545] py-2 font-black text-white flex justify-around'>
            <span>
              <IoChevronBackOutline />
            </span>
            <span>
              <IoMdHome />
            </span>
            <span>
              <FaBars />
            </span>
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
