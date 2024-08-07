'use client';

import { useStore } from '@/context/store';
import Image from 'next/image';
import freelance_img from '@/assets/images/developer-cartoon.webp';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { MdArrowBackIosNew } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import Footer from '@/components/Footer';
import NavLinks from '@/components/NavBar/NavLinks';

const About = () => {
  const { engLanguageActive } = useStore();
  const [mainView, setMainView] = useState<boolean>(false);
  const main_container_ref = useRef<HTMLDivElement | null>(null);
  const btn_ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (mainView) {
      main_container_ref.current?.classList.replace(
        'before:bg-[#7a7aff]',
        'before:bg-dark-secondary'
      );
      main_container_ref.current?.classList.replace(
        'before:w-[35%]',
        'before:w-[100%]'
      );
      main_container_ref.current?.classList.add(
        'before:[transform:translateX(-35%)]'
      );
    } else {
      main_container_ref.current?.classList.replace(
        'before:bg-dark-secondary',
        'before:bg-[#7a7aff]'
      );
      main_container_ref.current?.classList.replace(
        'before:w-[100%]',
        'before:w-[35%]'
      );
      main_container_ref.current?.classList.remove(
        'before:[transform:translateX(-35%)]'
      );
    }
  }, [mainView]);

  const toggleView = () => {
    setMainView(!mainView);
    btn_ref.current?.classList.add('animate-[disappearContent_1.1s_ease]');

    if (mainView) {
      btn_ref.current?.classList.replace('bg-dark-secondary', 'bg-[#7a7aff]');
    } else {
      btn_ref.current?.classList.replace('bg-[#7a7aff]', 'bg-dark-secondary');
    }
    setTimeout(() => {
      btn_ref.current?.classList.remove('animate-[disappearContent_1.1s_ease]');
    }, 1100);
  };

  return (
    <>
      <NavLinks />
      <main
      id='about-section'
        ref={main_container_ref}
        className='about_main_container flex justify-between items-center py-40 mt-[4.8rem] h-[42em] bg-white relative before:[transition:all_900ms_ease] [transition:all_900ms] before:absolute before:right-0 before:top-0 before:w-[35%] z-10 before:h-full (before:bg-dark-secondary) before:bg-[#7a7aff] before:z-10
        dark:bg-dark-main'>
        <button
          ref={btn_ref}
          onClick={toggleView}
          className='absolute top-[50%] [z-index:100] right-[33.8%] (bg-dark-secondary) bg-[#7a7aff] text-2xl rounded-md py-2 px-2 text-white hover:text-slate-200 [transition:all_200ms]'>
          {mainView ? (
            <MdArrowForwardIos className='relative left-2' />
          ) : (
            <MdArrowBackIosNew className='relative right-2' />
          )}
        </button>
        {mainView ? (
          <div
            className='z-20 flex px-[5%] lg:px-[10%] flex-col justify-center gap-8 h-full w-[65%] opacity-0 text-slate-300'
            style={
              mainView === true
                ? {
                    animation: 'appearContent 500ms ease-out forwards',
                    animationDelay: '700ms',
                  }
                : undefined
            }>
            <h1 className='xl:text-5xl text-4xl font-black text-slate-50'>
              {engLanguageActive
                ? 'I am Sebastian Perez'
                : 'Soy Sebastian Perez'}
              <br></br>
              <strong className='text-dark-sky dark:text-dark-pink'>
                {engLanguageActive
                  ? 'Freelance Developer'
                  : 'Desarrollador Freelance'}
              </strong>
              .
            </h1>
            <h2 className='text-xl font-bold text-slate-100'>
              {engLanguageActive
                ? 'Do you have a project in mind and need to make it a reality?'
                : '¿Tenés un proyecto en mente y necesitas hacerlo realidad?'}
            </h2>
            <p>
              {engLanguageActive
                ? 'Imagine having a website or app that not only works perfectly but also boosts your revenue and digital presence. I offer software development and creative design services to transform your ideas into impressive digital products.'
                : 'Imaginate tener un sitio web o una aplicación que no solo funcione a la perfección, sino que también aumente tus ingresos y presencia digital. Ofrezco servicios de desarrollo de software y diseño creativo para transformar tus ideas en productos digitales impresionantes.'}
            </p>
            <ul className='font-bold text-slate-100'>
              <li>
                ⚡
                {engLanguageActive
                  ? ' Super affordable and personalized prices.'
                  : ' Precios super accesibles y personalizados.'}
              </li>
              <li>
                ⚡
                {engLanguageActive
                  ? ' Free performance test.'
                  : ' Prueba de rendimiento gratuita.'}
              </li>
              <li>
                ⚡
                {engLanguageActive
                  ? ' You can pay monthly, like a subscription service.'
                  : ' Podes pagar mes a mes como un servicio.'}
              </li>
              <li>
                ⚡
                {engLanguageActive
                  ? ' Pay only if it meets your expectations.'
                  : ' Paga solo si cumple con tus expectativas.'}
              </li>
            </ul>
            <p>
              {engLanguageActive
                ? 'Interested? Let´s talk! If you want to turn your idea into reality, don´t hesitate to contact me. Let´s create something amazing together!'
                : '¿Te interesa? ¡Hablemos! Si querés que tu idea se convierta en realidad, no dudes en contactarme. ¡Vamos a crear algo asombroso juntos!'}
              🚀
            </p>
          </div>
        ) : (
          <div
            className='flex px-[5%] lg:px-[10%] flex-col justify-center gap-8 h-full w-[65%] opacity-0'
            style={
              mainView === false
                ? {
                    animation: 'disappearContent2 500ms ease-out forwards',
                    animationDelay: '490ms',
                  }
                : undefined
            }>
            <h1 className='xl:text-5xl text-4xl font-black text-slate-600 dark:text-slate-50'>
              {engLanguageActive
                ? 'I am Sebastian Perez'
                : 'Soy Sebastian Perez'}
              <br></br>
              <strong className='text-light-500/85 dark:text-dark-pink'>
                {engLanguageActive
                  ? 'Fullstack Developer'
                  : 'Desarrollador Fullstack'}
              </strong>
              .
            </h1>
            <p className='font-medium dark:text-slate-300 text-slate-500'>
              {engLanguageActive ? 'I have over' : 'Cuento con más de'}
              <strong className='font-extrabold text-slate-600 dark:text-white'>
                {engLanguageActive
                  ? ' 2 year of experience '
                  : ' 2 años de experiencia '}
              </strong>
              {engLanguageActive
                ? 'not formally in the tech sector, I live in Berazategui, Buenos Aires.'
                : 'no formal en el sector tecnológico, vivo en Berazategui, Buenos Aires.'}
              <br></br>
              {engLanguageActive ? 'I also have over' : 'También tengo más de'}
              <strong className='font-extrabold text-slate-600 dark:text-white'>
                {engLanguageActive
                  ? ' 12 year of experience '
                  : ' 12 años de experiencia '}
              </strong>
              {engLanguageActive
                ? 'In the food service sector. I am making a 180-degree shift in my professional profile towards the technology sector. My past experience has allowed me to acquire valuable soft skills that are transferable to the technology sector.'
                : 'en el sector gastronómico. Estoy dando un giro de 180 grados a mi perfil profesional hacia el sector tecnológico. Mi trayectoria pasada me ha permitido adquirir valiosas habilidades blandas que son transferibles al sector tecnológico.'}
              <br></br>
              <br></br>
              {engLanguageActive
                ? 'Currently, I am seeking job opportunities that will allow me to continue developing professionally.'
                : 'Actualmente estoy en busqueda oportunidades laborales que me permitan continuar desarrollandome como profesional.'}
            </p>
            <ul className='font-medium text-slate-500 dark:text-slate-50 list-disc ml-4 marker:text-light-500/70 dark:marker:text-dark-pink'>
              <li>
                {engLanguageActive ? 'Ingles: ' : 'English: '}
                <strong>B2 - Uppper Intermediate</strong>
              </li>
              <li>
                {engLanguageActive ? 'Time Zone: ' : 'Zona Horaria: '}
                <strong>GMT-3</strong>
              </li>
              <li>
                {engLanguageActive ? 'Availability: ' : 'Disponibilidad: '}
                <strong>Full-Time</strong>
              </li>
              <li>
                {engLanguageActive
                  ? 'Desired Position: '
                  : 'Posición Deseada: '}
                <strong>Front-end Developer | Back-end Developer</strong>
              </li>
            </ul>
          </div>
        )}
        <div className='flex flex-col items-center justify-center h-full w-[35%] z-20'>
          <div className='h-[22em] w-auto relative before:absolute before:left-12 before:bottom-[1.5em] before:w-[15em] before:h-[8px] before:rounded-[50%] before:bg-black/40 dark:before:bg-black before:[filter:blur(3px)]'>
            <Image
              priority
              src={freelance_img}
              alt='freelance-img'
              className='w-full h-full object-cover [filter:drop-shadow(0_0_0.1em_#0000004e)]'
            />
          </div>
          <div className='flex items-center gap-5'>
            {mainView ? (
              <Link
                className='bg-light-500 py-3 px-8 w-max text-slate-50 rounded-md hover:bg-light-500/75 duration-200 hover:duration-200 active:scale-90 dark:bg-dark-sky hover:dark:bg-dark-sky/75 font-medium opacity-0 animate-[appearContent_400ms_ease-out_forwards] [animation-delay:1s] border border-transparent'
                href={'/contact'}
                aria-label='contact-link'>
                {engLanguageActive ? 'Get in Touch' : 'Contáctame'}
              </Link>
            ) : (
              <span
                className='bg-green-600 border border-slate-500 py-3 px-5 text-slate-50 rounded-md font-medium opacity-0'
                style={
                  mainView
                    ? undefined
                    : {
                        animation: 'appearContent 300ms ease-out forwards',
                        animationDelay: '900ms',
                      }
                }>
                Open to Work
              </span>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
{
}
