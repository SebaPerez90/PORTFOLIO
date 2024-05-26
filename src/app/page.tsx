'use client';

import Hero from '@/components/Hero/Hero';
import About from '@/components/Hero/About';
import Proyects from '@/components/MyProjects/Proyects';
import ContactForm from '@/components/Contact/ContactForm';
import Experience from '@/components/Experience-Education/Experience';
import Education from '@/components/Experience-Education/Education';
import Services from '@/components/Services-Skills/Services';
import Footer from '@/components/Foot/Footer';
import MenuBtn from '@/components/Navegation/MenuBtn';
import HeroNew from '@/components/New/HeroNew';

export default function Home() {
  return (
    <main className='gap-32 flex flex-col justify-around items-center bg-[#dedede] dark:bg-[#313643] overflow-x-hidden'>
      <MenuBtn />

      <Hero />

      <Experience />

      <About />

      <Education />

      <Proyects />

      <Services />

      <ContactForm />

      <Footer />
    </main>
  );
}
