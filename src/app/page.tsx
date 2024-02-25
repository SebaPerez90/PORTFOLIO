'use client';

import { useStore } from '@/store';
import { Roboto } from 'next/font/google';

import ContactForm from '@/components/main/ContactForm';
import ContactInfo from '@/components/main/ContactInfo';

import Image from 'next/image';
import profile_avatar from '@/assets/images/avatar.webp';
import Proyects from '@/components/main/Proyects';

import { FaRegFileAlt } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

import Link from 'next/link';
import Skills from '@/components/main/Skills';
import About from '@/components/main/About';

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
          ? 'pt-32 gap-28 relative text-white flex flex-col justify-around items-center before:absolute before:left-0 before:top-0 before:w-full before:h-full before:z-[2] before:bg-gradient-to-r from-[#0f0c29] bg-indigo-800 to-[#2c2c47]'
          : 'pt-32 gap-28 flex flex-col justify-around items-center bg-[#dedede] relative'
      }>
      <About />

      <section
        className={
          darkThemeActive
            ? 'overflow-hidden pt-24 rounded-md bg-gradient-to-tl from-[#030303] to-[#3e3f40] shadow-[4px_8px_20px_#00000098] z-10 w-[90%] relative before:absolute before:bg-[#fff] before:w-[25.7rem] before:h-[25.7rem] before:-z-10 before:left-[5%] before:clip-path-circle '
            : 'opacity-5 w-[80%] flex  rounded-md bg-white shadow-[14px_30px_20px_-10px_#0000004f] relative'
        }>
        <section className='absolute z-20 flex flex-col h-full justify-evenly items-end w-full'>
          <header
            className={
              darkThemeActive
                ? 'text-center text-white'
                : 'text-center self-center font-semibold'
            }>
            <h1
              className={
                darkThemeActive
                  ? 'text-6xl text-[#9147ff]'
                  : 'text-6xl text-custom-pink-600'
              }
              style={roboto.style}>
              Sebastian Perez
            </h1>
            <h2 className='text-2xl flex justify-center items-center text-custom-pink-300'>
              <span>{'</ '}</span>
              {engLanguageActive
                ? `Frontend Developer`
                : 'Desarrollador Frontend'}
              <span>{'  >'}</span>
            </h2>
            <div className='[text-shadow:none] mt-4'>
              <ul className='gap-4 flex m-[0_auto] justify-evenly items-center w-1/2 '>
                <li>
                  <Link
                    className='btn-primary p-[0.5em_0.85em ] flex bg-[#2c3136] '
                    href={'https://github.com/SebaPerez90'}
                    target='_blank'>
                    <FiGithub />
                    <span className='text-[0.8em] translate-y-[0.15em]'>
                      GITHUB
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className='btn-primary  p-[0.5em_0.85em ] flex bg-[#0077B5]'
                    href={'https://www.linkedin.com/in/sebaperez90/'}
                    target='_blank'>
                    <FaLinkedinIn />
                    <span className='text-[0.8em] translate-y-[0.15em]'>
                      LINKEDIN
                    </span>
                  </Link>
                </li>
                <li className='btn-primary  p-[0.5em_0.85em ] flex bg-white text-[#8EA7E9] outline outline-1 outline-[#8EA7E9]'>
                  <FaRegFileAlt className='' />
                  <span className='text-[0.8em] translate-y-[0.15em]'>
                    RESUME
                  </span>
                </li>
              </ul>
            </div>
          </header>
          <article
            className={
              darkThemeActive
                ? 'flex flex-col w-full mr-8 text-white'
                : 'mr-10 w-[25em] text-[#3333339e] font-semibold text-xs'
            }>
            <p>
              {engLanguageActive
                ? 'I am a self-taught student and freelancer. Currently, I live in Buenos Aires, Argentina.'
                : 'Hola! me llamo Sebastian Perez, vivo en Buenos Aires, Berazategui. Soy un estudiante autodidacta con un enfoque en el desarrollo front-end, aunque también tengo conocimientos en el área de back-end.'}
            </p>
            <p className='mt-2'>
              {engLanguageActive
                ? 'I am looking for formal employment within a company, as I have a lot to offer.'
                : 'Tengo dos años de experiencia en el desarrollo web y aunque tengo por delante un largo trayecto de formación. Estoy seguro que puedo aportar mucho valor a cualquier equipo de trabajo 😁'}
            </p>
            <button
              className={
                darkThemeActive
                  ? 'mt-4 mr-32 self-end w-24 p-[1em_1.5em] bg-[#9147ff] font-bold text-[.6em] rounded-sm duration-300 hover:translate-y-[0.3em] hover:shadow-[none] hover:duration-300 hover:bg-[#9147ff] hover:hover:translate-y-[-0.3em] hover:hover:translate-x-[-0.2em] hover:shadow-[0px_8px_7px_#0000002c]'
                  : 'btn-primary m-[0_auto] mt-4'
              }>
              {engLanguageActive ? 'VIEW MORE' : 'VER MAS'}
            </button>
          </article>
        </section>
        <div className='h-[32em] relative before:absolute before:w-[25em] before:h-[25em] before:left-0 before:bottom-0 before:[clip-path:circle(50%_at_50%_50%)] before:bg-custom-pink-200  flex items-end'>
          <Image
            src={profile_avatar}
            alt='profile-avatar-image'
            className='opacity-5 w-[20em] h-[20em] drop-shadow-[10px_0px_20px_#000000b3] z-10 object-contain relative left-14'
            priority
          />
        </div>
      </section>

      <section id='contact-section' className='opacity-5 mt-20 text-center'>
        <h1
          className='text-3xl [letter-spacing:15px] text-[#313131]'
          style={roboto.style}>
          {engLanguageActive ? 'CONTACT ME' : 'CONTÁCTAME'}🤝
        </h1>
        <div className='opacity-5 mt-10 flex justify-center items-center shadow-[2px_18px_20px_#aaaaaa] rounded-md'>
          <ContactForm />
          <ContactInfo />
        </div>
      </section>

      <Proyects />

      <Skills />
    </main>
  );
}
