'use client';

import { useStore } from '@/store';
import { Roboto } from 'next/font/google';

import Contact from '@/components/main/Contact';

import Image from 'next/image';
import profile_avatar from '@/assets/images/avatar.png';

const roboto = Roboto({
  weight: ['700'],
  subsets: ['latin'],
});

export default function Home() {
  const { darkThemeActive, engLanguageActive } = useStore();

  return (
    <main
      className={
        darkThemeActive
          ? 'relative text-white pt-10 flex flex-col justify-around items-center before:absolute before:left-0 before:top-0 before:w-full before:h-full before:z-[2] before:bg-gradient-to-r from-[#0f0c29] bg-indigo-800 to-[#2c2c47]'
          : 'pt-10 flex flex-col justify-around items-center bg-[#dedede] relative'
      }>
      <section
        className={
          darkThemeActive
            ? 'pt-24 mb-14 rounded-md bg-gradient-to-tl from-[#030303] to-[#3e3f40] shadow-[4px_8px_20px_#00000098] z-10 w-[90%] relative before:content-[""] before:absolute before:bg-[#fff] before:w-[25.7rem] before:h-[25.7rem] before:-z-10 before:left-[5%] before:clip-path-circle '
            : 'mb-14 pt-24 rounded-md bg-white shadow-[4px_8px_20px_#aaaaaa] z-10 w-[90%] relative before:content-[""] before:absolute before:bg-[#9BB8CD] before:w-[25.7rem] before:h-[25.7rem] before:-z-10 before:left-[5%] before:clip-path-circle'
        }>
        <Image
          src={profile_avatar}
          alt='profile-avatar-image'
          className='h-1/2 w-1/2 drop-shadow-img relative left-[10%] max-w-[20em]'
          priority
        />

        <section className='absolute z-50 top-0 flex flex-col items-center justify-around h-full w-full'>
          <div
            className={
              darkThemeActive
                ? 'ml-40 text-shadow text-center text-white'
                : 'ml-40 text-shadow text-center text-[#7b7b7b]'
            }>
            <p className='font-medium'>
              {engLanguageActive
                ? 'Hello There! My name is'
                : 'Hola! Mi nombre es'}
            </p>
            <h1
              className={
                darkThemeActive
                  ? 'text-6xl text-[#9147ff]'
                  : 'text-6xl text-[#DA0C81]'
              }
              style={roboto.style}>
              Sebastian Perez
            </h1>
            <h2 className='text-2xl flex justify-center items-center'>
              <span
                className={
                  darkThemeActive
                    ? 'text-[#9147ff] font-extrabold text-4xl'
                    : 'text-[#DA0C81] font-extrabold text-4xl'
                }>
                {'</ '}
              </span>
              {engLanguageActive
                ? `Frontend Developer`
                : 'Desarrollador Frontend'}
              <span
                className={
                  darkThemeActive
                    ? 'text-[#9147ff] font-extrabold text-4xl'
                    : 'text-[#DA0C81] font-extrabold text-4xl'
                }>
                {'  >'}
              </span>
            </h2>
          </div>
          <article
            className={
              darkThemeActive
                ? 'flex flex-col w-full mr-8 text-white'
                : 'flex flex-col w-full mr-8 text-[#909090]'
            }>
            <p className='self-end w-1/3 font-medium text-sm'>
              {engLanguageActive
                ? 'I am a self-taught student and freelancer. Currently, I live in Buenos Aires, Argentina.'
                : 'Soy estudiante autodidacta y freelancer. Actualmente vivo en Buenos Aires, Argentina.  '}
            </p>
            <p className='self-end w-1/3 font-medium text-sm mt-2'>
              {engLanguageActive
                ? 'I am looking for formal employment within a company, as I have a lot to offer.'
                : 'Estoy buscando una inserción formal a una empresa, ya que soy un persona que tengo mucho que ofrecer.'}
            </p>
            <button
              className={
                darkThemeActive
                  ? 'mt-4 mr-32 self-end w-24 p-[1em_1.5em] bg-[#9147ff] font-bold text-[.6em]'
                  : 'mt-4 mr-32 self-end w-24 p-[1em_1.5em] bg-[#DA0C81] font-bold text-[.6em] text-white'
              }>
              {engLanguageActive ? 'VIEW MORE' : 'VER MAS'}
            </button>
          </article>
        </section>
      </section>

      <Contact />
    </main>
  );
}
