import { useStore } from '@/context/store';
import Image from 'next/image';
import profile_image from '@/assets/images/avatar.webp';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import Social from '../New/Social';

const Avatar = () => {
  const { engLanguageActive } = useStore();

  return (
    <div className='max-[520px]:h-[12em] max-[520px]:pb-7 max-[520px]:items-end max-[520px]:justify-start max-[520px]:w-full max-[520px]:right-0 max-[520px]:relative xl:w-[45em] dark:[background:linear-gradient(to_right,#00000000,#00000000)] max-[700px]:absolute max-[700px]:right-36 flex items-end justify-end self-end lg:bg-gradient-to-l from-light-500 to-[#DCBFFF] h-[40em] w-[38em]'>

      <div className='xl:h-[27em] max-[600px]:[display:none] max-[700px]:w-[17em] max-[700px]:h-[17em] max-[700px]:before:[display:none] w-auto h-[23em] relative max-[820px]:absolute max-[820px]:left-[23em] left-24 lg:left-0 before:absolute before:w-[25em] before:h-[25em] before:rounded-full before:-z-10 z-10 dark:before:bg-theme_dark-sup-pink/40 before:bg-light-200/60 lg:dark:before:bg-white lg:before:bg-white before:left-[-5em] before:bottom-0'>
        <Image
          src={profile_image}
          alt='profile-image'
          loading='lazy'
          className='max-[700px]:translate-x-16 w-full h-full object-cover drop-shadow-[-10px_0px_20px_#000000b3]'
        />
      </div>
      <div className='max-[520px]:gap-6 max-[520px]:translate-x-[0] max-[520px]:flex-row max-[520px]:h-auto z-10 flex flex-col items-center justify-evenly max-[700px]:translate-x-[11em] h-[22em]'>
        <span className='max-[520px]:[rotate:0deg] [rotate:90deg] w-max flex gap-2 items-center text-base font-semibold text-[#3b3b3b] dark:text-white lg:text-white [#33333391]'>
          {engLanguageActive ? "Let's connect" : 'Conectemos'}
          <HiOutlineArrowLongRight className='text-3xl' />
        </span>
        <Social />
      </div>
    </div>
  );
};

export default Avatar;
