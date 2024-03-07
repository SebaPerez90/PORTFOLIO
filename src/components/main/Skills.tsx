import { useEffect, useRef, useState } from 'react';

import { useStore } from '@/store';
import { Roboto } from 'next/font/google';

import addSvgIcon from '@/data/addSvgIcon';

import Image from 'next/image';
import lg_icon from '@/assets/images/lg-icon.webp';
import UI_dark from '@/assets/images/UI-dark.webp';
import UI_light from '@/assets/images/UI-light.webp';

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

  const [weatherData, setWeatherData]: any = useState({});

  const [theme, setTheme]: any = useState();

  const dateRef = useRef<HTMLTimeElement>(null);

  //! CHEKEAR ESTO ,  Y PONER UNA CONDICION CORRECTA PARA Q ACTUALIZE BLA BLA BLA
  useEffect(() => {
    setTheme(localStorage.getItem('theme'));
  }, [theme]);

  useEffect(() => {
    const getData = async () => {
      const APIkey = '3d9cbbaa2c744ad8b91912d8c0979261';
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=berazategui&units=metric&appid=${APIkey}`
      );
      const res = await data.json();

      setWeatherData({
        city: res.city.name,
        country: res.city.country,
        temperature: res.list[0].main.temp.toFixed(0),
      });
    };
    getData();
  }, []);

  setInterval(() => {
    const date = new Date();
    const hours =
      date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
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
      id='skills-section'
      className='mt-32 w-[100%] bg-gradient-to-b from-[#dedede] via-light-200 to-[#dedede] flex flex-col justify-center items-center'>
      <h1
        className='text-3xl [letter-spacing:10px] text-[#313131] text-center'
        style={roboto.style}>
        {engLanguageActive ? 'SKILLS & SERVICES' : 'HABILIDADES Y SERVICIOS '}🤓
      </h1>
      <button onClick={() => console.log(theme)}>fetch</button>

      <section className='py-40 w-full h-full'>
        <h1
          className='text-center text-3xl mb-10 text-[#333333d7]'
          style={roboto.style}>
          What can I offer for you?
        </h1>
        <div className='relative flex justify-between items-end w-[70%] m-[0_auto] border-2'>
          <div className='w-[12em] h-[25rem] flex flex-col justify-between border-[10px] border-[#252525] bg-white rounded-[25px]'>
            <div className='py-1 rounded-[13px_13px_0_0] w-full bg-[#4a4a4a] px-2 text-white flex justify-between items-center'>
              <div className='flex items-center gap-2 pl-2 text-sm'>
                <FaWhatsapp className='text-green-400 scale-110' />
              </div>
              <span className='rounded-full h-[9px] w-[9px] border-black border-4 bg-[#b6b4b4]'></span>
              <div className='flex'>
                <HiWifi />
                <FaSignal />
                <MdBattery50 />
              </div>
            </div>

            <article className='before:absolute before:left-0 before: top-0 before:w-full before:h-full before:bg-[#0000004b] before:z-20 relative flex overflow-hidden flex-col items-center justify-center bg-white h-full'>
              <Image
                src={theme === 'dark' ? UI_dark : UI_light}
                alt='background-image'
                priority
                className='w-auto h-auto object-cover absolute z-10 [aspect-ratio:1/2] aaaa'
              />
              <span className='z-30 text-[#ffffffb5] text-5xl font-extrabold relative bottom-4'>
                {weatherData.temperature}°C
              </span>
              <div className='z-30 text-white flex gap-1 items-center bg-[#ffffff33] [backdrop-filter:blur(5px)] rounded-sm p-1'>
                <span className='text-xs'>{weatherData.country}</span>
                <h1 className='text-base'>{weatherData.city}</h1>
              </div>
              <time
                className='z-30 text-white text-lg [letter-spacing:2px] font-bold'
                ref={dateRef}></time>
              <div className='z-30 flex w-[70%] translate-y-[1.5em]'>
                <span className='bg-indigo-700 p-1 w-max text-[0.6em] rounded-[0.5em_0_0_0.5em]'>
                  🔎
                </span>
                <span className='w-full bg-[#ffffff91] [backdrop-filter:blur(1px)] rounded-[0_0.5em_0.5em_0]'></span>
              </div>
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
            <div className='h-[18em] w-[28em] rounded-[0.5em_0.5em_0_0] bg-white aaaa border-[1.5em] border-[#2d2d2d] border-b-0'></div>
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

      <section className='max-[830px]:gap-16 max-[830px]:flex-wrap gap-8 w-[90%] flex justify-evenly'>
        {skills.map((item, index) => (
          <div
            className='bg-white p-[2em_2.5em] gap-12 flex flex-col justify-start w-auto shadow-[14px_30px_20px_-10px_#0000004f] rounded-md'
            key={index}>
            <h1 className='w-max text-[#333333ac] [letter-spacing:5px] text-2xl font-extrabold text-center'>
              {item.title}
            </h1>
            <ul className='h-[10em] flex-wrap flex flex-col justify-between items-start gap-4'>
              {item.skills.map((skill, index) => (
                <li
                  className='text-xs cursor-default font-semibold text-[#3333339e] h-[3em] gap-2 flex items-center'
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
