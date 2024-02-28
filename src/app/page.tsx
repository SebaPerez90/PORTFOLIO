'use client';

import { useStore } from '@/store';
import { Roboto } from 'next/font/google';

import Hero from '@/components/main/Hero';
import Proyects from '@/components/main/Proyects';
import About from '@/components/main/About';
import Skills from '@/components/main/Skills';
import ContactForm from '@/components/main/ContactForm';

import { FaLocationDot } from 'react-icons/fa6';

import Link from 'next/link';
import location_image from '@/assets/images/Captura de pantalla (195).png';
import Image from 'next/image';

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
          : 'flex flex-col justify-around items-center bg-[#dedede]'
      }>
      <Hero />

      <About />

      <Skills />

      <Proyects />

      <ContactForm />

      <div className='relative gap-40 flex justify-center  items-center bg-white w-full py-8'>
        <div className='relative w-[20em] h-auto overflow-hidden rounded-md before:animate-[location-animation2_1s_ease-out_alternate-reverse_infinite] before:border-2 before:w-8 before:h-2 before:rounded-[50%] before:absolute before:bottom-[7.5em] before:right-[3.7em] before:z-10 '>
          <Image
            src={location_image}
            alt='location_image'
            priority
            className='w-full h-full object-cover z-10 '
          />
          <span>
            <FaLocationDot className='animate-[location-animation_1s_ease-out_alternate-reverse_infinite] absolute bottom-[3.7em] right-14 z-20 text-red-500 text-4xl ' />
          </span>
          <address className='mt-4 gap-1 flex items-center justify-center text-sm text-[0.8em] font-semibold text-[#333333ab] '>
            <FaLocationDot className='text-red-500' />
            calle 1 nº 626, Berazategui, Buenos Aires
          </address>
        </div>

        <div className=''>
          <div>
            <h1 className='font-extrabold text-4xl text-light-400'>
              Seba Perez
            </h1>
            <span className='text-[#333333ac] text-sm font-bold relative bottom-2 [letter-spacing:-1px]'>
              {'< Frontend Developer >'}
            </span>
            <p className='w-[30em] text-[0.8em] font-semibold text-[#3333339e] mt-2'>
              Agradezco mucho que hayas llegado hasta esta sección del
              portfolio. Cualquier tipo de feedback es útil para continuar
              aprendiendo y mejorando.
            </p>
          </div>
          <ul className='absolute bottom-4 translate-x-6 flex justify-center gap-10 font-semibold text-light-500 opacity-70'>
            <li>
              <Link
                href={'https://www.linkedin.com/in/sebaperez90/'}
                target='_blank'>
                Linkedin
              </Link>
            </li>
            <li>
              <Link href={'https://github.com/SebaPerez90'} target='_blank'>
                Github
              </Link>
            </li>
            <li>
              <Link href={''} target='_blank'>
                Facebook
              </Link>
            </li>
            <li>
              <Link href={'#home'}>Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
