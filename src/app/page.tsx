'use client';

import Hero from '@/components/Landing/Hero';
import Proyects from '@/components/Proyects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <main className='gap-40 flex flex-col justify-around items-center bg-[#e8e8e8] dark:bg-[#313643] overflow-x-hidden'>
        <Hero />
        <Experience />
        <Proyects />
        <Skills />
        <Services />
        <Footer />
      </main>
    </>
  );
}
