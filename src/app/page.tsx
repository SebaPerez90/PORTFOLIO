'use client';

import { useStore } from '@/store';
import Image from 'next/image';
import profile_avatar from '@/assets/images/avatar.png';

export default function Home() {
  const { darkThemeActive } = useStore();
  return (
    <main
      className={
        darkThemeActive
          ? 'bg-black text-white pt-10 flex justify-center items-center'
          : 'pt-10 flex justify-center items-center'
      }>
      <div className='border-[1px z-10 w-3/4 relative before:content-[""] before:absolute before:bg-[#fff] before:w-[22rem] before:h-[22rem] before:-z-10 before:m-[3em_-1em] before:clip-path-circle'>
        <Image
          src={profile_avatar}
          alt='profile-avatar-image'
          className='h-1/2 w-1/2 drop-shadow-img'
          priority
        />
      </div>
    </main>
  );
}
