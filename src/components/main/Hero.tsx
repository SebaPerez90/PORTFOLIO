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
    <section className='max-[520px]:bg-gradient-to-t max-[520px]:from-white max-[520px]:to-light-700 max-[520px]:pl-8 relative bg-white flex items-center justify-between pl-16 w-full h-[34em] dark:bg-gradient-to-r from-[#0f0c29] to-[#2c2c47] '>
      <span className='z-10 absolute h-12 w-12 rounded-full bg-[#dcbfff] blur-md [box-shadow:0_0_40px_#dcbfff] duration-300 left-0 top-0 animate-[bouncing2_16s_linear_alternate-reverse_infinite]'></span>
      <span className='z-10 absolute h-8 w-8 rounded-full bg-[#c8ffd4] blur-md [box-shadow:0_0_40px_#c8ffd4] duration-300 right-[50%] top-0 animate-[bouncing_16s_linear_alternate-reverse_infinite]'></span>
      <span className='z-10 absolute h-24 w-24 rounded-full duration-300 left-[25%] bottom-0 bg-light-200 blur-xl animate-[bouncing3_18s_linear_alternate-reverse_infinite]'></span>

      <article className='max-[520px]:h-full max-[520px]:justify-evenly max-[700px]:z-30 max-[700px]:w-full z-20 w-[30em] flex flex-col items-start gap-6'>
        <h1
          style={roboto.style}
          className='max-[520px]:text-[#3d3d3d] max-[520px]:gap-10 text-[#333333e3] font-extrabold text-7xl [letter-spacing:-1px]'>
          {"Hello, my name's "}
          <strong className='text-light-500'>Seba</strong>
          <b className='text-7xl'>.</b>
        </h1>
        <p className='max-[520px]:text-[#545454cb] max-[520px]:w-[90%] text-sm font-semibold text-[#33333391] w-[23em]'>
          Soy desarrollor front-end y vivo en Argentina, Buenos Aires. Tengo dos
          años de experiencia en el desarrollo web. Actualmente estoy en
          busqueda laboral activa 😁
        </p>
        <button className='translate-y-[-1em] self-center flex items-center p-[0.8em_2em] gap-2 text-white rounded-full bg-gradient-to-b from-light-900 via-light-900 font-bold to-[#7d27ffae] border-[1px] border-[#4f2194] hover:translate-y-[-0.3em] hover:shadow-[0px_8px_7px_#00000049] duration-200 active:border-[#dedede] hover:bg-[#4f2194] hover:border-light-900 hover:text-[#ffffff93]'>
          <FaRegFileAlt />
          resume
        </button>
      </article>

      <div className='max-[520px]:right-2 max-[700px]:z-10 max-[700px]:absolute max-[700px]:right-8 max-[520px]:items-center flex items-end justify-end self-end lg:bg-gradient-to-l from-light-500 to-[#DCBFFF] h-[40em] w-[38em]'>
        <div className='max-[520px]:bg-white max-[520px]:overflow-hidden max-[520px]:rounded-full max-[520px]:h-[12em] max-[520px]:w-[12em] max-[700px]:w-[17em] max-[700px]:h-[17em] max-[700px]:before:[display:none] w-auto h-[23em] relative max-[820px]:absolute max-[820px]:left-[23em] left-24 lg:left-0 before:absolute before:w-[25em] before:h-[25em] before:rounded-full before:-z-10 z-10 before:bg-light-700 lg:before:bg-white before:left-[-5em] before:bottom-0'>
          <Image
            src={profile_image}
            alt='profile-image'
            priority
            className='w-full h-full object-cover drop-shadow-[-10px_0px_20px_#000000b3]'
          />
        </div>
        <div className=' z-10 gap-20 flex flex-col items-center justify-center h-[20em]'>
          <span className='max-[520px]:[display:none] [rotate:90deg] w-max flex gap-2 items-center text-base font-semibold text-white [#33333391]'>
            follow me
            <HiOutlineArrowLongRight className='text-3xl' />
          </span>
          <div className='flex flex-col items-center justify-center gap-2'>
            <button className='relative before:absolute before:left-0 before:bottom-0 before:w-full before:h-full hover:before:bg-[#00000023] before:duration-200 before:rounded-full before:scale-[1.9] before:-z-10 text-white bg-black text-3xl  rounded-full hover:outline hover:outline-1 hover:outline-white'>
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
