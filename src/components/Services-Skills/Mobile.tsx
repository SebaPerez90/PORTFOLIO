import { useEffect, useRef, useState } from 'react';
import { useStore } from '@/context/store';
import CopyEmailBtn from '@/components/Services-Skills/CopyEmailBtn';

import Image from 'next/image';
import UI_dark from '@/assets/images/UI-dark.webp';
import UI_light from '@/assets/images/UI-light.webp';
import avatar from '@/assets/images/avatar.webp';

import { IoMdHome } from 'react-icons/io';
import { IoChevronBackOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6';
import { HiWifi } from 'react-icons/hi';
import { MdBattery50 } from 'react-icons/md';
import { FaSignal } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Mobile = () => {
  const { engLanguageActive } = useStore();

  const [theme, setTheme]: any = useState();

  const [notification, setNotification] = useState(true);

  const [dateMessage, setDateMessage]: any = useState(null);

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

    setDateMessage(`${hours}:${minutes}`);

    if (dateRef.current) {
      dateRef.current.innerHTML = `${hours}:${minutes}`;
    }
  }, 1000);

  //EXPAND THE NOTIFICATION PANEL IN UI MOBILE, GO CHECK OUT 🙂!
  const checkNotification = () => {
    const notification_panel = document.getElementById(
      'notification-panel-mobile'
    );
    if (notification) {
      if (notification_panel)
        notification_panel.classList.add('show-notifications');
      setNotification(!notification);
    } else {
      if (notification_panel)
        notification_panel.classList.remove('show-notifications');
      setNotification(!notification);
    }
  };

  return (
    <div className='max-[1216px]:flex-col-reverse items-center gap-8 w-full flex justify-around flex-wrap row-span-1 col-span-full'>
      <motion.div
        transition={{
          duration: 0.7,
          delay: 0.1,
        }}
        initial={{ translateX: '-20em', opacity: 0 }}
        whileInView={{ translateX: '0em', opacity: 1 }}
        className='scale-125 max-[1216px]:mt-8 max-[1216px]:left-0 relative left-20 w-[12em] h-[25rem] flex flex-col justify-between border-[10px] border-[#252525] bg-white rounded-[25px] before:absolute before:w-full before:h-5 before:rounded-[50%] before:left-0 before:bottom-[-3em] dark:before:bg-[#75757558] before:bg-[#3737378f] before:z-50'>
        <div className='relative py-1 rounded-[13px_13px_0_0] w-full bg-[#4a4a4a] px-2 text-white flex justify-between items-center'>
          <div
            className='absolute left-0 top-0 w-full duration-700 h-0 rounded-[0.3em_0.3em_0_0] bg-[#4a4a4a33] [backdrop-filter:blur(5px)] z-40'
            id='notification-panel-mobile'>
            {/* contains the notification panel 👇*/}
            <div className='relative hidden items-end px-[0.15rem] flex-col justify-center h-full'>
              <motion.div
                whileTap={{ scale: 1.7, y: -10 }}
                className='cursor-zoom-in rounded-[0.3rem] bg-[#3d3d3d] flex flex-col items-start gap-2 justify-end text-xs z-40 px-1 h-auto'>
                <h1 className='text-base'>
                  WhatsApp{' | '}
                  <span className='text-xs'>
                    1 chat <time>{dateMessage}</time>
                  </span>
                </h1>
                <div className='flex items-center'>
                  <Image
                    src={avatar}
                    width={25}
                    height={25}
                    alt='avatar'
                    className='rounded-full w-auto h-auto'
                  />
                  - Seba
                </div>
                <p className='pl-[0.15rem] text-base border-t border-slate-500/45 pt-1'>
                  {engLanguageActive
                    ? 'Were you looking for a programmer ?'
                    : '¿Estabas en busca de un programador ?'}
                  🙂
                </p>
                <button
                  aria-label='whatsapp-link'
                  className='self-center font-black mt-3 mb-1 p-3 hover:bg-[#ffffff23] duration-150 rounded-full'>
                  <a
                    id='whatsapp'
                    href='https://wa.me/1532830604?text=Hola!%20¿Como%20Estas?%20Soy%20Sebastian%20Perez,%20este%20es%20mi%20contacto%20para%20trabajo'
                    target='_blank'>
                    {engLanguageActive ? 'Reply' : 'Responder'}
                  </a>
                </button>
              </motion.div>

              <button
                aria-label='collapse-button'
                className='absolute bottom-0 left-[35%] font-black py-1'
                onClick={checkNotification}>
                close
              </button>
            </div>
            {/* contains the notification panel ☝️*/}

            <button
              onClick={checkNotification}
              aria-label='expand/collapse-button'>
              <FaWhatsapp className='text-green-400 relative left-3 top-1 scale-125 z-10 [filter:contrast(2)] hover:scale-[1.75] duration-100 hover:animate-none animate-[whatsapp-notification_800ms_alternate-reverse_ease-out_infinite]' />
            </button>
          </div>
          <span className='rounded-full h-[9px] w-[9px] relative left-[45%] border-black border-4 bg-[#b6b4b4]'></span>
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
            loading='lazy'
            className='w-auto h-auto object-cover absolute z-10 [aspect-ratio:1/2]'
          />
          <span className='z-30 text-slate-50 text-5xl font-extrabold relative bottom-4'>
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
        <div className='z-40 rounded-[0_0_13px_13px] text-xl w-full bg-[#4a4a4a] py-2 font-black text-white flex justify-around'>
          <IoChevronBackOutline />
          <IoMdHome />
          <FaBars />
        </div>
      </motion.div>

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
