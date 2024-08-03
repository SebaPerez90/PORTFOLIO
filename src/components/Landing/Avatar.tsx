import Image from 'next/image';
import profile_image from '@/assets/images/avatar.webp';
import Social from './Social';

const Avatar = () => {
  return (
    <div
      className='z-30 flex flex-col items-end sm:items-center gap-8 avatar-container'>
      <div className='rounded-[50%] sm:h-[18em] sm:w-[18em] h-[10em] w-[10em]'>
        <Image
          src={profile_image}
          alt='avatar_profile'
          className='rounded-[50%] w-full h-full object-cover bg-light-500/70 dark:bg-dark-pink/70  p-1'
          priority
        />
      </div>
      <Social />
    </div>
  );
};

export default Avatar;
