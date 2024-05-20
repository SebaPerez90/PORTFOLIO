import { useStore } from '@/context/store';

import Link from 'next/link';

import Image from 'next/image';
import profile_image from '@/assets/images/avatar.webp';

import { FaGithub } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

const Avatar = () => {
  const { engLanguageActive } = useStore();

  return (
    <div className='xl:w-[45em] dark:[background:linear-gradient(to_right,#00000000,#00000000)] max-[700px]:absolute max-[700px]:right-36 flex items-end justify-end self-end lg:bg-gradient-to-l from-light-500 to-[#DCBFFF] h-[40em] w-[38em]'>
      <div className='xl:h-[27em] max-[600px]:[display:none] max-[700px]:w-[17em] max-[700px]:h-[17em] max-[700px]:before:[display:none] w-auto h-[23em] relative max-[820px]:absolute max-[820px]:left-[23em] left-24 lg:left-0 before:absolute before:w-[25em] before:h-[25em] before:rounded-full before:-z-10 z-10 dark:before:bg-theme_dark-sup-pink/40 before:bg-light-200/60 lg:dark:before:bg-white lg:before:bg-white before:left-[-5em] before:bottom-0'>
        <Image
          src={profile_image}
          alt='profile-image'
          loading='lazy'
          className='max-[700px]:translate-x-16 w-full h-full object-cover drop-shadow-[-10px_0px_20px_#000000b3]'
        />
      </div>
      <div className='max-[440px]:absolute max-[440px]:top-24 max-[440px]:right-[-1em] max-[700px]:justify-end z-30 gap-20 translate-x-4 flex flex-col items-center justify-center h-[20em]'>
        <span className='max-[700px]:[display:none] [rotate:90deg] w-max flex gap-2 items-center text-base font-extrabold text-[#3b3b3b] dark:text-white lg:text-white [#33333391]'>
          {engLanguageActive ? 'follow me' : 'seguime'}
          <HiOutlineArrowLongRight className='text-3xl' />
        </span>
        <div className='max-[700px]:mb-6 max-[700px]:translate-x-24 flex flex-col items-center justify-center'>
          <Link
            target='_blank'
            href={'https://github.com/SebaPerez90'}
            aria-label='social-network-btn'
            className='relative before:absolute before:left-0 before:bottom-0 before:w-full before:h-full dark:hover:before:bg-[#ffffff2a] hover:before:bg-[#00000023] before:duration-150 before:rounded-full before:scale-[1.9] before:-z-10 text-white bg-black text-3xl  rounded-full hover:outline hover:outline-1 hover:outline-white'>
            <FaGithub />
          </Link>
          <Link
            target='_blank'
            href={'https://www.linkedin.com/in/sebaperez90/'}
            aria-label='social-network-btn'
            className='relative before:absolute before:left-0 before:bottom-0 before:w-full before:h-full dark:hover:before:bg-[#ffffff2a] hover:before:bg-[#00000023] before:duration-150 before:rounded-full before:scale-[1.7] before:-z-10 mt-4 text-white bg-light-400 hover:border-light-400 p-2 text-xl rounded-full hover:outline hover:outline-1 hover:outline-white'>
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
