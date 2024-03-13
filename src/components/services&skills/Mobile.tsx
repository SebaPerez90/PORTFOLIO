import { useEffect, useRef, useState } from 'react';
import { useStore } from '@/store';
import CopyEmailBtn from '@/components/services&skills/CopyEmailBtn';

import Image from 'next/image';
import UI_dark from '@/assets/images/UI-dark.webp';
import UI_light from '@/assets/images/UI-light.webp';

import { IoMdHome } from 'react-icons/io';
import { IoChevronBackOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6';
import { HiWifi } from 'react-icons/hi';
import { MdBattery50 } from 'react-icons/md';
import { FaSignal } from 'react-icons/fa';

const Mobile = () => {
  const { engLanguageActive } = useStore();

  const [theme, setTheme]: any = useState();
  const [weatherData, setWeatherData] = useState({
    temperature: '',
    country: '',
    city: '',
  });

  const dateRef = useRef<HTMLTimeElement>(null);

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
    <div className='max-[1216px]:flex-col-reverse items-center gap-8 w-full flex justify-around flex-wrap row-span-1 col-span-full'>
      <div className='max-[1216px]:left-0 relative left-20 w-[12em] h-[25rem] flex flex-col justify-between border-[10px] border-[#252525] bg-white rounded-[25px] before:absolute before:w-full before:h-5 before:rounded-[50%] before:left-0 before:bottom-[-3em] dark:before:bg-[#75757558] before:bg-[#3737378f] before:z-50'>
        <div className='py-1 rounded-[13px_13px_0_0] w-full bg-[#4a4a4a] px-2 text-white flex justify-between items-center'>
          <FaWhatsapp className='text-green-400 scale-110' />
          <span className='rounded-full h-[9px] w-[9px] border-black border-4 bg-[#b6b4b4]'></span>
          <div className='flex'>
            <HiWifi />
            <FaSignal />
            <MdBattery50 />
          </div>
        </div>

        <div className='before:absolute before:left-0 before: top-0 before:w-full before:h-full before:bg-[#0000004b] before:z-20 relative flex overflow-hidden flex-col items-center justify-center bg-white h-full'>
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
        </div>
        <div className='rounded-[0_0_13px_13px] text-xl w-full bg-[#4a4a4a] py-2 font-black text-white flex justify-around'>
          <IoChevronBackOutline />
          <IoMdHome />
          <FaBars />
        </div>
      </div>

      <article className='max-[1216px]:w-[80%] w-1/2 flex flex-col items-center justify-center gap-6'>
        <h1 className='dark:text-zinc-50 text-3xl font-black text-[#333333] text-center'>
          {engLanguageActive
            ? `Mobile application design`
            : 'Diseño de aplicaciones moviles'}
        </h1>
        <div className='flex flex-col dark:bg-transparent dark:border-none dark:text-theme_dark-sup-sky text-sm font-medium text-[#334155] border-l-[12px] border-light-800 bg-[#ececec51] pl-4 pr-2 py-6 '>
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
  );
};

export default Mobile;
