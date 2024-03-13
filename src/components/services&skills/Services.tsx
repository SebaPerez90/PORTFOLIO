import { useEffect, useRef, useState } from 'react';
import { useStore } from '@/store';
import CopyEmailBtn from '@/components/services&skills/CopyEmailBtn';

import Image from 'next/image';
import lg_icon from '@/assets/images/lg-icon.webp';
import UI_dark from '@/assets/images/UI-dark.webp';
import UI_light from '@/assets/images/UI-light.webp';
import devs_team from '@/assets/images/devs-team.png';
import github from '@/assets/images/github.webp';
import linkedin from '@/assets/images/linkedin.webp';

import { IoMdHome } from 'react-icons/io';
import { IoChevronBackOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6';
import { HiWifi } from 'react-icons/hi';
import { MdBattery50 } from 'react-icons/md';
import { FaSignal } from 'react-icons/fa';
import { FaPowerOff } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';

const Services = () => {
  const { engLanguageActive } = useStore();

  const [theme, setTheme]: any = useState();
  const [currentLayout, setCurrentLayout] = useState('github-layout');
  const [weatherData, setWeatherData] = useState({
    temperature: '',
    country: '',
    city: '',
  });

  const dateRef = useRef<HTMLTimeElement>(null);

  //CATCH THE CURRENT "LAYOUT" ID
  const changeLayout = (e: any) => {
    setCurrentLayout(e.target.id);
  };

  //CAPTURE THE CURRENT THEME TO CHANGE THE BACKGROUND IMAGE IN UI MOBILE
  useEffect(() => {
    setTheme(localStorage.getItem('theme'));
  }, [theme]);

  //MAKE A FETCH DATA FROM API TO DISPLAY UI MOBILE
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

  //GET THE HOUR TO DISPLAY EN UI MOBILE
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

  return (
    <article className='py-40 w-full h-full'>
      <h1 className='dark:text-theme_dark-sup-pink max-[500px]:[font-size:1.8em] [font-size:2.5em] px-4 text-center mb-44 font-bold text-light-400'>
        {engLanguageActive
          ? 'What can I offer for you? ...'
          : '¿Qué puedo ofrecerte? ...'}
        <span className='dark:text-zinc-400 max-[500px]:text-lg italic text-2xl text-[#333333cb] font-light'>
          {' '}
          {engLanguageActive
            ? 'let me show you some of my services.'
            : 'Permíteme mostrarte algunos de mis servicios.'}
        </span>
      </h1>
      <div className='w-[95%] grid grid-cols-3 grid-rows-[repeat(2,min-max(100px,auto))] gap-y-[11em] relative lg:w-[80%] m-[0_auto]'>
        <div className='max-[825px]:flex-col-reverse max-[825px]:items-center gap-8 w-full flex justify-around flex-wrap row-span-1 col-span-full'>
          <div className='relative w-[12em] h-[25rem] flex flex-col justify-between border-[10px] border-[#252525] bg-white rounded-[25px] before:absolute before:w-full before:h-5 before:rounded-[50%] before:left-0 before:bottom-[-3em] dark:before:bg-[#75757558] before:bg-[#3737378f] before:z-50'>
            <div className='py-1 rounded-[13px_13px_0_0] w-full bg-[#4a4a4a] px-2 text-white flex justify-between items-center'>
              <FaWhatsapp className='text-green-400 scale-110' />
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
          <article className='max-[500px]:w-[90%] max-[825px]:w-[80%] w-1/2 flex flex-col items-center justify-center gap-6'>
            <h1 className='dark:text-zinc-50 text-2xl font-black text-[#333333d4] text-center'>
              {engLanguageActive
                ? `Mobile application design`
                : 'Diseño de aplicaciones moviles'}
            </h1>
            <div className='flex flex-col dark:bg-transparent dark:border-none dark:text-theme_dark-sup-sky text-sm font-medium text-[#333333c7] border-l-[12px] border-light-800 bg-[#ececec51] pl-4 pr-2 py-6 '>
              <p>
                {engLanguageActive
                  ? `Hey there! Looking for a mobile app that captivates your users from the get-go? You're in the right place! I'm a frontend developer specialized in bringing your ideas to life in the digital world. Every detail of your app will be meticulously crafted to ensure it's visually appealing and user-friendly.`
                  : '¡Hola! ¿Quieres una app móvil que enamore a tus usuarios desde el primer momento? ¡Estás en el lugar adecuado! Soy un desarrollador frontend especializado en dar vida a tus ideas en el mundo digital. Cada detalle de tu app será cuidadosamente trabajado para asegurar que sea visualmente atractiva y fácil de usar.'}
              </p>
              <p className='mt-3'>
                {engLanguageActive
                  ? `Ready to stand out in the mobile world? Let's talk and turn your idea into a digital reality!`
                  : '¿Listo para destacar en el mundo móvil? ¡Hablemos y convirtamos tu idea en una realidad digital!'}{' '}
                🤯
              </p>
              <CopyEmailBtn />
            </div>
          </article>
        </div>

        <div className='max-[400px]:translate-x-[-3em] max-[430px]:translate-x-[-2em] max-[470px]:translate-x-[-1em] max-[825px]:flex-col-reverse max-[825px]:items-center gap-8 w-full flex justify-around flex-wrap row-span-2 col-span-full flex-row-reverse'>
          {/*//!monitor */}
          <div className='relative max-[380px]:right-3 max-[380px]:scale-[0.7] max-[440px]:scale-75 max-[500px]:scale-90 duration-300 flex flex-col justify-center items-center'>
            <div className='h-[19em] w-[28em] rounded-[0.5em_0.5em_0_0] bg-white border-[1.5em] dark:border-[#292529] border-[#2d2d2d] border-b-0'>
              <div className='w-full bg-slate-500 flex items-center '>
                <button
                  id='linkedin-layout'
                  onClick={changeLayout}
                  aria-label='linkedin-layout'
                  className='mt-[0.15rem] ml-[0.15rem] flex items-center py-[0.15rem] px-1 rounded-[0.5em_0.5em_0_0] bg-slate-800 gap-1 text-white text-[0.6rem]'>
                  <FaGithub />
                  LinkedIn
                </button>
                <button
                  id='github-layout'
                  onClick={changeLayout}
                  aria-label='github-layout'
                  className='mt-[0.15rem] ml-[0.15rem] flex items-center py-[0.15rem] px-1 rounded-[0.5em_0.5em_0_0] bg-slate-800 gap-1 text-white text-[0.6rem]'>
                  <FaLinkedin />
                  Github
                </button>
              </div>
              <div className='w-full h-full '>
                {currentLayout === 'github-layout' ? (
                  <Image
                    src={linkedin}
                    alt='linkedin'
                    className='object-cover w-auto h-[93%] '
                    priority
                  />
                ) : (
                  <Image
                    src={github}
                    alt='github'
                    className='object-cover w-auto h-[93%] '
                    priority
                  />
                )}
              </div>
            </div>
            <div className='flex items-center relative h-8 w-[28em] rounded-[0_0_0.5em_0.5em] dark:bg-[#292529] bg-[#2d2d2d]'>
              <div className='absolute left-[45%] text-sm text-white font-black flex items-center gap-1'>
                <Image src={lg_icon} alt='lg_icon' width={16} height={16} />
                <span>LG</span>
              </div>
              <FaPowerOff className='absolute right-8 text-white text-lg' />
            </div>
            <div className='h-8 w-8 dark:bg-[#292529] bg-[#2d2d2d]'></div>
            <div className='h-4 w-[15em] dark:bg-[#292529] bg-[#2d2d2d] rounded-[0.5em_0.5em_0_0]'></div>
          </div>
          {/*//!monitor */}
          <article className='max-[380px]:translate-x-[-0.5em] max-[500px]:w-[90%] max-[825px]:w-[80%] w-1/2 flex flex-col items-center justify-center gap-6'>
            <h1 className='dark:text-zinc-50 text-2xl font-black text-[#333333d4] text-center'>
              {engLanguageActive
                ? `Applications and landing pages`
                : 'Aplicaciones y Landing pages'}
            </h1>
            <div className='flex flex-col dark:bg-transparent dark:border-none dark:text-theme_dark-sup-sky text-sm font-medium text-[#333333c7] border-l-[12px] border-light-800 bg-[#ececec51] pl-4 pr-2 py-6'>
              <p>
                {engLanguageActive
                  ? `Hello! Looking to take your business to the next level online? You're in the right place! I'm a frontend web developer specialized in creating landing pages, websites, and desktop applications that propel your business forward. I turn your ideas into tangible, visually stunning results that captivate your users.`
                  : '¡Hola! ¿Quieres llevar tu negocio al siguiente nivel en línea? ¡Estás en el lugar indicado! Soy un desarrollador web frontend especializado en crear landing pages, páginas web y aplicaciones de escritorio que impulsan tu negocio. Convertí tus ideas en resultados tangibles y visualmente impactantes que cautiven a tus usuarios.'}
              </p>
              <p className='mt-3'>
                {engLanguageActive
                  ? `Ready to take the digital leap? Let's talk and bring your ideas to life together!`
                  : '¿Listo para dar el salto digital? ¡Hablemos y hagamos realidad tus ideas juntos! '}
                🚀
              </p>
              <CopyEmailBtn />
            </div>
          </article>
        </div>
        <div className='flex flex-col max-[500px]:w-[90%] max-[825px]:w-[80%] w-[60%] m-[0_auto] rounded-md row-span-3 col-span-full p-8 dark:bg-theme_dark-box-second bg-[#ececec4f] [backdrop-filter:blur(30px)]'>
          <Image
            src={devs_team}
            alt='devs_team_image'
            priority
            className='w-auto h-auto '
          />
          <h1 className='dark:text-theme_dark-sup-pink text-sm text-center font-extrabold text-[#333333c0]'>
            {engLanguageActive
              ? 'FRONTEND DEVELOPER'
              : `DESARROLLADOR FRONTEND`}{' '}
            🤩
          </h1>
          <p className='dark:text-zinc-50 px-2 text-[0.85em] mt-4 font-medium text-[#3333339e]'>
            {engLanguageActive
              ? `I'm a versatile web developer, experienced in both frontend and backend. My goal is to enhance your project with my skills and expertise. Let's talk and see how I can contribute to your team's success.`
              : 'Soy un desarrollador web versátil, con experiencia tanto en el frontend como en el backend. Mi objetivo es potenciar tu proyecto con mis habilidades y experiencia. Hablemos y veamos cómo puedo contribuir al éxito de tu equipo.'}
          </p>
          <CopyEmailBtn />
        </div>
      </div>
    </article>
  );
};

export default Services;
