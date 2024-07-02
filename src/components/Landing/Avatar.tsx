import Image from 'next/image';
import profile_image from '@/assets/images/avatar.webp';
import Social from './Social';

const Avatar = () => {
  return (
    <div className='z-40 flex flex-col items-center gap-8'>
      <div className='rounded-[50%] h-[11em] w-[11em] xl:h-[15em] xl:w-[15em] border-4 border-light-500/50 dark:border-theme_dark-sup-pink'>
        <Image
          src={profile_image}
          alt='avatar_profile'
          className='rounded-[50%] w-full h-full object-cover bg-black dark:bg-zinc-200'
          priority
        />
      </div>
      <Social />
    </div>
  );
};

export default Avatar;
