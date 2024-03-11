import { useStore } from '@/store';
import { Roboto } from 'next/font/google';

import Link from 'next/link';
import Image from 'next/image';
import profile_image from '@/assets/images/avatar.webp';

import { FaGithub } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

import DownloadBtn from '@/components/main/DownloadBtn';

const roboto = Roboto({
  weight: ['700'],
  subsets: ['latin'],
});

const Hero = () => {
  const { engLanguageActive } = useStore();

  return (
    <section className='xl:h-auto dark:before:bg-theme_dark-main-bg before:absolute before:left-0 before:top-0 before:w-full before:h-full max-[520px]:bg-gradient-to-t max-[520px]:from-white max-[520px]:to-light-700 max-[520px]:pl-8 relative bg-white flex items-center justify-between pl-16 w-full h-[34em] '>
      <span className='dark:opacity-40 z-10 absolute h-12 w-12 rounded-full bg-[#dcbfff] blur-md [box-shadow:0_0_40px_#dcbfff] duration-300 left-[20%] lg:left-0 top-0 animate-[bouncing2_16s_linear_alternate-reverse_infinite]'></span>

      <span className='dark:opacity-40 z-10 absolute h-8 w-8 rounded-full bg-[#c8ffd4] blur-md [box-shadow:0_0_40px_#c8ffd4] duration-300 right-[10em] lg:right-[50%] top-0 animate-[bouncing_16s_linear_alternate-reverse_infinite]'></span>

      <span className='dark:opacity-40 z-10 absolute h-24 w-24 rounded-full duration-300 left-[50%] lg:left-[25%] bottom-0 bg-light-200 blur-xl animate-[bouncing3_18s_linear_alternate-reverse_infinite]'></span>

      <article className='2xl:w-[45em] mt-8 xl:translate-x-20 pr-3 max-[700px]:z-30 max-[700px]:w-full z-20 w-[30em] flex flex-col items-start gap-6'>
        <h1
          style={roboto.style}
          className='xl:text-8xl dark:text-slate-50 max-[520px]:text-[#3d3d3d] max-[520px]:gap-10 text-[#333333e3] font-extrabold text-7xl [letter-spacing:-1px]'>
          {engLanguageActive ? "Hello, my name's " : 'Hola mi nombre es '}
          <strong className='dark:text-theme_dark-sup-sky text-light-500'>
            Seba
          </strong>
          <b className='text-7xl'>.</b>
        </h1>
        <p className='2xl:text-lg 2xl:w-full xl:text-base dark:text-zinc-300 max-[520px]:text-[#3c3c3ccb] max-[520px]:w-[90%] text-sm font-semibold text-[#3b3b3b] w-[23em]'>
          {engLanguageActive
            ? `I am a front-end developer living in Buenos Aires, Argentina. With two years of experience in web development, I am currently attending the bootcamp "Soy Henry" to expand my horizons and enhance my current skill set.`
            : 'Soy Desarrollor front-end y vivo en Argentina, Buenos Aires. Tengo dos años de experiencia en el desarrollo web. Actualmente estoy cursando el bootcamp "Soy Henry" para poder ampliar mis horizontes y sumar conocimiento a mi stack actual'}
        </p>

        <DownloadBtn />
      </article>

      <div className='xl:w-[45em] dark:[background:linear-gradient(to_right,#00000000,#00000000)] max-[700px]:z-40 max-[700px]:absolute max-[700px]:right-36 flex items-end justify-end self-end lg:bg-gradient-to-l from-light-500 to-[#DCBFFF] h-[40em] w-[38em]'>
        <div className='xl:h-[27em] max-[600px]:[display:none] max-[700px]:w-[17em] max-[700px]:h-[17em] max-[700px]:before:[display:none] w-auto h-[23em] relative max-[820px]:absolute max-[820px]:left-[23em] left-24 lg:left-0 before:absolute before:w-[25em] before:h-[25em] before:rounded-full before:-z-10 z-10 before:bg-light-700 lg:before:bg-white before:left-[-5em] before:bottom-0'>
          <Image
            src={profile_image}
            alt='profile-image'
            priority
            className='max-[700px]:translate-x-16 w-full h-full object-cover drop-shadow-[-10px_0px_20px_#000000b3]'
          />
        </div>
        <div className='max-[700px]:justify-end z-10 gap-20 translate-x-4 flex flex-col items-center justify-center h-[20em]'>
          <span className='max-[700px]:[display:none] [rotate:90deg] w-max flex gap-2 items-center text-base font-extrabold text-light-900 lg:text-white [#33333391]'>
            {engLanguageActive ? 'follow me' : 'seguime'}
            <HiOutlineArrowLongRight className='text-3xl' />
          </span>
          <div className='max-[700px]:mb-6 max-[700px]:translate-x-24 flex flex-col items-center justify-center gap-2'>
            <Link
              target='_blank'
              href={'https://github.com/SebaPerez90'}
              aria-label='social-network-btn'
              className='relative before:absolute before:left-0 before:bottom-0 before:w-full before:h-full hover:before:bg-[#00000023] before:duration-200 before:rounded-full before:scale-[1.9] before:-z-10 text-white bg-black text-3xl  rounded-full hover:outline hover:outline-1 hover:outline-white'>
              <FaGithub />
            </Link>
            <Link
              target='_blank'
              href={'https://www.linkedin.com/in/sebaperez90/'}
              aria-label='social-network-btn'
              className='relative before:absolute before:left-0 before:bottom-0 before:w-full before:h-full hover:before:bg-[#00000023] before:duration-200 before:rounded-full before:scale-[1.7] before:-z-10 mt-4 text-white bg-light-400 hover:border-light-400 p-2 text-xl rounded-full hover:outline hover:outline-1 hover:outline-white'>
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
