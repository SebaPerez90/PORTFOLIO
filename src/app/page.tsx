'use client';

import { useStore } from '@/store';
import { Roboto } from 'next/font/google';

import Hero from '@/components/main/Hero';
import Proyects from '@/components/main/Proyects';
import About from '@/components/main/About';
import Skills from '@/components/main/Skills';
import ContactForm from '@/components/main/ContactForm';
import ContactInfo from '@/components/main/ContactInfo';

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
          : 'gap-28 flex flex-col justify-around items-center bg-[#dedede]'
      }>
      <Hero />

      <About />

      <Skills />

      <section id='contact-section' className='mt-20 text-center'>
        <h1
          className='text-3xl [letter-spacing:15px] text-[#313131]'
          style={roboto.style}>
          {engLanguageActive ? 'CONTACT ME' : 'CONTÁCTAME'}🤝
        </h1>
        <div className='mt-10 flex justify-center items-center shadow-[2px_18px_20px_#aaaaaa] rounded-md'>
          <ContactForm />
          <ContactInfo />
        </div>
      </section>

      <Proyects />
    </main>
  );
}
