'use client';

import Hero from '@/components/Landing/Hero';
import Proyects from '@/components/Proyects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import NavLinks from '@/components/NavBar/NavLinks';
import SideMenu from '@/components/SideMenu';

export default function Home() {
  return (
    <>
      <NavLinks />
      <main
        id='main-section'
        className='[transition:filter_500ms] flex flex-col justify-around items-center bg-[#ffff] dark:bg-dark-main overflow-x-hidden relative'>
        <SideMenu />
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
