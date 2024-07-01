'use client';

import Hero from '@/components/LandingPage/Hero';
// import Proyects from '@/components/MyProjects/Proyects';
// import ContactForm from '@/components/Contact/ContactForm';
// import Experience from '@/components/Experience-Education/Experience';
// import Education from '@/components/Experience-Education/Education';
// import Services from '@/components/Services-Skills/Services';
// import Footer from '@/components/Foot/Footer';
// import MenuBtn from '@/components/Navegation/MenuBtn';
import NavLinks from '@/components/NavBar/NavLinks';

export default function Home() {
  return (
    <>
      <NavLinks />
      <main className='flex flex-col justify-around items-center bg-[#dedede] dark:bg-[#313643] overflow-x-hidden'>
        {/* <MenuBtn /> */}

        <Hero />

        {/* <Experience /> */}

        {/* <About /> */}

        {/* <Education /> */}

        {/* <Proyects /> */}

        {/* <Services /> */}

        {/* <ContactForm /> */}

        {/* <Footer /> */}
      </main>
    </>
  );
}
