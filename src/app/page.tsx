'use client';

import Hero from '@/components/main/Hero';
import About from '@/components/main/About';
import Proyects from '@/components/main/Proyects';
import Skills from '@/components/main/Skills';
import ContactForm from '@/components/main/ContactForm';
import Experience from '@/components/main/Experience';

export default function Home() {
  return (
    <main className='gap-32 flex flex-col justify-around items-center bg-[#dedede] dark:bg-[#313643]'>
      <Hero />

      <About />

      <Experience />

      <Proyects />

      <Skills />

      <ContactForm />
    </main>
  );
}
