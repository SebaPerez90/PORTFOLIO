import Image from 'next/image';
import profile_image from '@/assets/images/avatar.webp';
import Social from './Social';

const Avatar = () => {
  return (
    <div className='z-40 flex flex-col items-center gap-8'>
      <div className='rounded-[50%] h-[11em] w-[11em]'>
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
