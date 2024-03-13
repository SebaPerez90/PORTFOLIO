'use client';

import Hero from '@/components/heroSection/Hero';
import About from '@/components/main/About';
import Proyects from '@/components/main/Proyects';
import Skills from '@/components/services&skills/Skills';
import ContactForm from '@/components/formSection/ContactForm';
import Experience from '@/components/experience&education/Experience';

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
