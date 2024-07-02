'use client';

import Hero from '@/components/Landing/Hero';
import Proyects from '@/components/Proyects';
import Experience from '@/components/Experience/Experience';
import NavLinks from '@/components/NavBar/NavLinks';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <NavLinks />
      <main className='gap-48 flex flex-col justify-around items-center bg-[#e8e8e8] dark:bg-[#313643] overflow-x-hidden'>
        <Hero />
        <Experience />
        <Services />
        {/* <Footer /> */}
      </main>
    </>
  );
}
