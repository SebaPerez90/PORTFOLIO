'use client';

import Hero from '@/components/Landing/Hero';
import Proyects from '@/components/Proyects';
import Experience from '@/components/Experience';
import NavLinks from '@/components/NavBar/NavLinks';
import Skills from '@/components/Skills';
import Footerr from '@/components/Footerr';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <NavLinks />
      <main className='gap-40 flex flex-col justify-around items-center bg-[#e8e8e8] dark:bg-[#313643] overflow-x-hidden'>
        <Hero />
        <Experience />
        <Proyects />
        <Skills />
        <Services />
        <Footerr />
      </main>
    </>
  );
}
