'use client';

import { useStore } from '@/context/store';

import Link from 'next/link';
import Image from 'next/image';
import location_image from '@/assets/images/location.webp';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
  const { engLanguageActive } = useStore();

  return (
    <footer className='scroll-smooth dark:border-t-2 dark:border-slate-500/30 dark:bg-theme_dark-main-bg flex-wrap relative gap-20 flex justify-center items-end  bg-white w-full pt-12 pb-8'>
      <div className='max-[520px]:scale-90 relative w-[30em] h-[20em] overflow-hidden rounded-xl before:animate-[location-animation2_1s_ease-out_alternate-reverse_infinite] before:w-8 before:h-2 before:rounded-[50%] before:absolute before:bottom-[5.3em] before:right-[6em] before:z-30 max-[460px]:before:right-[5em] max-[390px]:before:right-[4em] max-[460px]:before:bottom-[6em]'>
        <span>
          <FaLocationDot className='max-[390px]:right-[4rem] max-[460px]:bottom-[6.5rem] max-[460px]:right-[5rem] animate-[location-animation_1s_ease-out_alternate-reverse_infinite] absolute bottom-[2.7em] right-[5.9rem] z-30 text-red-400 text-4xl [filter:saturate(3)]' />
        </span>
        <Image
          src={location_image}
          alt='location_image'
          priority
          className='w-full h-full object-cover z-10 relative'
        />
        <div className='absolute bg-[#00000027] w-full h-full z-20 top-0 flex  items-center justify-center'>
          <address className='max-[420px]:text-sm gap-1 flex items-center justify-center text-base w-max font-medium text-white border p-4 bg-[#00000080] relative bottom-20'>
            <FaLocationDot className='text-red-400 [filter:saturate(3)]' />
            calle 1 nº 626, Berazategui, Buenos Aires
          </address>
        </div>
      </div>

      <div>
        <div className='flex flex-col items-center relative bottom-12'>
          <h1 className='dark:text-zinc-50 font-extrabold text-4xl text-light-500'>
            Seba Perez
          </h1>
          <div className='flex items-center gap-1 dark:text-zinc-400 text-[#4f4f4f] text-base font-bold relative bottom-2 [letter-spacing:-1px]'>
            <span className='font-black text-3xl dark:text-theme_dark-sup-pink text-light-500'>
              {'<'}
            </span>
            {engLanguageActive
              ? 'Frontend Developer'
              : 'Desarrollador Frontend'}
            <span className='font-black text-3xl dark:text-theme_dark-sup-pink text-light-500'>
              {'>'}
            </span>
          </div>
          <p className='max-[500px]:px-3 max-[500px]:w-auto dark:text-zinc-300 w-[30em] text-sm font-semibold text-[#4d4d4d] mt-2'>
            {engLanguageActive
              ? 'I really appreciate that you have reached this section of the portfolio. Any kind of feedback is useful to continue learning and improving.'
              : 'Agradezco mucho que hayas llegado hasta esta sección del portfolio. Cualquier tipo de feedback es útil para continuar aprendiendo y mejorando.'}
          </p>
        </div>
        <ul className='max-[420px]:gap-2 dark:text-theme_dark-sup-sky flex justify-center gap-8 font-black text-light-400'>
          <li className='dark:border-theme_dark-sup-sky dark:hover:text-zinc-400 hover:duration-100 hover:text-light-200 '>
            <Link
              aria-label='network-link'
              href={'https://www.linkedin.com/in/sebaperez90/'}
              target='_blank'>
              Linkedin
            </Link>
          </li>
          <li className='dark:border-theme_dark-sup-sky dark:hover:text-zinc-400 hover:duration-100 hover:text-light-200 border-l-2 border-light-400 pl-4'>
            <Link
              aria-label='network-link'
              href={'https://github.com/SebaPerez90'}
              target='_blank'>
              Github
            </Link>
          </li>
          <li className='dark:border-theme_dark-sup-sky dark:hover:text-zinc-400 hover:duration-100 hover:text-light-200 border-l-2 border-light-400 pl-4'>
            <Link aria-label='network-link' href={''} target='_blank'>
              Facebook
            </Link>
          </li>
          <li className='dark:border-theme_dark-sup-sky dark:hover:text-zinc-400 hover:duration-100 hover:text-light-200 border-l-2 border-light-400 pl-4'>
            <Link aria-label='network-link' href={'#home'}>
              {engLanguageActive ? 'Home' : 'Inicio'}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
