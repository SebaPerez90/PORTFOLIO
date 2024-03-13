'use client';

import Hero from '@/components/heroSection/Hero';
import About from '@/components/projectsSection/About';
import Proyects from '@/components/projectsSection/Proyects';
import ContactForm from '@/components/formSection/ContactForm';
import Experience from '@/components/experience&education/Experience';
import Education from '@/components/experience&education/Education';
import Services from '@/components/services&skills/Services';

export default function Home() {
  return (
    <main className='gap-32 flex flex-col justify-around items-center bg-[#dedede] dark:bg-[#313643]'>
      <Hero />

      <About />

      <Experience />

      <Education />

      <Proyects />

      <Services />

      <ContactForm />
    </main>
  );
}
