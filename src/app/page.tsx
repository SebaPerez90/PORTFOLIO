'use client';

import Hero from '@/components/Hero/Hero';
import About from '@/components/Hero/About';
import Proyects from '@/components/MyProjects/Proyects';
import ContactForm from '@/components/Contact/ContactForm';
import Experience from '@/components/Experience-Education/Experience';
import Education from '@/components/Experience-Education/Education';
import Services from '@/components/Services-Skills/Services';
import Footer from '@/components/Footer/Footer';
import MenuBtn from '@/components/NavBar/MenuBtn';

export default function Home() {
  return (
    <>
      <MenuBtn />
      <main className='gap-32 flex flex-col justify-around items-center bg-[#dedede] dark:bg-[#313643]'>
        <Hero />

        <Experience />

        <About />

        <Education />

        <Proyects />

        <Services />

        <ContactForm />

        <Footer />
      </main>
    </>
  );
}
