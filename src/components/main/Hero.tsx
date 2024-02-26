import { useStore } from '@/store';

import Image from 'next/image';
import profile_image from '@/assets/images/avatar.webp';
import Link from 'next/link';

import { Roboto } from 'next/font/google';

import { FaRegFileAlt } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

const roboto = Roboto({
  weight: ['700'],
  subsets: ['latin'],
});

const Hero = () => {
  const { engLanguageActive } = useStore();
  return (
    <section className='bg-white flex items-center justify-between pl-12 w-full h-[28em]'>
      <article className='w-[30em] flex flex-col items-start gap-4'>
        <h1
          style={roboto.style}
          className='text-[#333333e3] font-extrabold text-7xl [letter-spacing:-1px]'>
          {"Hello, my name's "}
          <strong className='text-light-500'>Seba</strong>
          <b className='text-7xl'>.</b>
        </h1>
        <p className='text-sm font-semibold text-[#33333391] w-[23em]'>
          Soy desarrollor front-end y vivo en Argentina, Buenos Aires. Tengo dos
          años de experiencia en el desarrollo web. Actualmente estoy en
          busqueda laboral activa 😁
        </p>
        <footer className='flex gap-4'>
          <button className='btn-primary'>download</button>
          <button className='btn-primary'>see my work</button>
        </footer>
      </article>

      <div className='flex items-end justify-end self-end bg-[#333333e3] h-[28em] w-[35em] '>
        <div className=' w-auto h-[23em] relative before:absolute before:w-[25em] before:h-[25em] before:rounded-full before:-z-10 z-10 before:bg-gradient-to-tr from-light-500 via-[#DCBFFF] to-white   before:left-[-5em] before:bottom-0'>
          <Image
            src={profile_image}
            alt='profile-image'
            priority
            placeholder='blur'
            className='w-full h-full object-cover drop-shadow-[-10px_0px_20px_#000000b3]'
          />
        </div>
        <div className='z-10 gap-20 flex flex-col items-center justify-center h-[20em]'>
          <p className='[rotate:90deg] w-max flex gap-2 items-center text-sm font-semibold text-white [#33333391]'>
            follow me
            <HiOutlineArrowLongRight className='text-3xl' />
          </p>
          <div className=''>
            <button className='btn-primary'>
              <FiGithub />
            </button>
            <button className='btn-primary mt-4'>
              <FaLinkedinIn />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
