'use client';

import Hero from '@/components/main/Hero';
import About from '@/components/main/About';
import Proyects from '@/components/main/Proyects';
import Skills from '@/components/main/Skills';
import ContactForm from '@/components/main/ContactForm';

export default function Home() {
  return (
    <main className='gap-28 flex flex-col justify-around items-center bg-[#dedede]'>
      <Hero />

      <About />

      <Skills />

      <Proyects />

      <ContactForm />
    </main>
  );
}
