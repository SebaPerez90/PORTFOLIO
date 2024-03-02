import { useStore } from '@/store';
import { Roboto } from 'next/font/google';

import Image from 'next/image';
import profile_image from '@/assets/images/avatar.webp';

import { FaRegFileAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

const roboto = Roboto({
  weight: ['700'],
  subsets: ['latin'],
});

const Hero = () => {
  const { engLanguageActive } = useStore();
  return (
    <section className='relative bg-white flex items-center justify-between pl-16 w-full h-[34em] dark:bg-gradient-to-r from-[#0f0c29] to-[#2c2c47] '>
      <span className='z-10 absolute h-12 w-12 rounded-full bg-[#dcbfff] blur-md [box-shadow:0_0_40px_#dcbfff] duration-300 left-0 top-0 animate-[bouncing2_16s_linear_alternate-reverse_infinite]'></span>
      <span className='z-10 absolute h-8 w-8 rounded-full bg-[#c8ffd4] blur-md [box-shadow:0_0_40px_#c8ffd4] duration-300 right-[50%] top-0 animate-[bouncing_16s_linear_alternate-reverse_infinite]'></span>
      <span className='z-10 absolute h-24 w-24 rounded-full duration-300 left-[25%] bottom-0 bg-light-200 blur-xl animate-[bouncing3_18s_linear_alternate-reverse_infinite]'></span>

      <article className='z-20 w-[30em] flex flex-col items-start gap-6'>
        <h1
          style={roboto.style}
          className=' text-[#333333e3] font-extrabold text-7xl [letter-spacing:-1px]'>
          {"Hello, my name's "}
          <strong className='text-light-500'>Seba</strong>
          <b className='text-7xl'>.</b>
        </h1>
        <p className='text-sm font-semibold text-[#33333391] w-[23em]'>
          Soy desarrollor front-end y vivo en Argentina, Buenos Aires. Tengo dos
          años de experiencia en el desarrollo web. Actualmente estoy en
          busqueda laboral activa 😁
        </p>
        <div className='flex gap-4'>
          <button className='duration-200 hover:duration-200 font-bold py-[0.3em] pl-2 pr-6 flex justify-around items-center gap-4 border rounded-full bg-gradient-to-r to-light-200 from-light-500 text-white [text-shadow:0_0_3px_#000]'>
            <span className='border-4  border-white rounded-full p-4 bg-gradient-to-b from-[#b0b0b0] via-white to-white text-[#33333391] flex justify-center items-center'>
              <FaRegFileAlt />
            </span>
            resume
          </button>
        </div>
      </article>

      <div className='flex items-end justify-end self-end bg-gradient-to-l from-light-500 to-[#DCBFFF]  h-[34em] w-[35em] '>
        <div className=' w-auto h-[23em] relative before:absolute before:w-[25em] before:h-[25em] before:rounded-full before:-z-10 z-10 before:bg-white  before:left-[-5em] before:bottom-0'>
          <Image
            src={profile_image}
            alt='profile-image'
            priority
            className='w-full h-full object-cover drop-shadow-[-10px_0px_20px_#000000b3]'
          />
        </div>
        <div className='z-10 gap-20 flex flex-col items-center justify-center h-[20em]'>
          <span className='[rotate:90deg] w-max flex gap-2 items-center text-base font-semibold text-white [#33333391]'>
            follow me
            <HiOutlineArrowLongRight className='text-3xl' />
          </span>
          <div className='flex flex-col items-center justify-center gap-2'>
            <button className='relative before:absolute before:left-0 before:bottom-0 before:w-full before:h-full hover:before:bg-[#00000023] before:duration-200 before:rounded-full before:scale-[1.9] before:-z-10 text-white bg-black text-3xl  rounded-full hover:outline hover:outline-1 hover:outline-black'>
              <FaGithub />
            </button>
            <button className='relative before:absolute before:left-0 before:bottom-0 before:w-full before:h-full hover:before:bg-[#00000023] before:duration-200 before:rounded-full before:scale-[1.7] before:-z-10 mt-4 text-white bg-light-400 hover:border-light-400 p-2 text-xl rounded-full hover:outline hover:outline-1 hover:outline-white'>
              <FaLinkedinIn />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
