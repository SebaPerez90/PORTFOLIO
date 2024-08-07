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
      <main id="main-section" className='[transition:filter_500ms] flex flex-col justify-around items-center bg-[#ffff] dark:bg-dark-main overflow-x-hidden'>
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
