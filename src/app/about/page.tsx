'use client';

import { useStore } from '@/context/store';
import Image from 'next/image';
import avatar from '@/assets/images/avatar.webp';
import utn_icon from '@/assets/images/utn-logo.webp';
import henry_icon from '@/assets/images/soyHenry-logo.webp';
import ef_icon from '@/assets/images/ef-icon.webp';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const educations = [
  {
    src: henry_icon,
    entity: 'Henry',
    date: 'feb.2024 - jun.2024',
    title: 'Fullstack Developer',
  },

  {
    src: ef_icon,
    entity: 'EF SET',
    date: 'jan.2024',
    title: 'B2 Uppper Intermediate',
  },
  {
    src: utn_icon,
    entity: 'Universidad Tecnológica Nacional',
    date: 'ene.2023 - ene.2024',
    title: 'Técnico en Programación',
  },
];

const About = () => {
  const { engLanguageActive } = useStore();
  return (
    <>
      <main className='overflow-hidden flex flex-col items-center gap-24  pt-28 bg-[#e2e2e2] dark:bg-dark-main'>
        <section className='flex  justify-evenly flex-wrap gap-10 sm:gap-0'>
          <div className='flex flex-col items-center'>
            <motion.div
              transition={{
                duration: 0.3,
                delay: 0.2,
              }}
              initial={{ scale: 0.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className='rounded-full h-[14em] w-[14em] overflow-hidden'>
              <Image
                src={avatar}
                alt='avatar'
                className='w-full h-full object-cover bg-black dark:bg-zinc-200'
                priority
              />
            </motion.div>
            <span className='font-bold text-xl mt-2 dark:text-white'>
              Sebastian Perez
            </span>
            <span className='font-bold text-sm text-[#333333be] dark:text-slate-300'>
              {engLanguageActive
                ? 'Desarrollador Fullstack'
                : 'Fullstack Developer'}
            </span>
          </div>
          <motion.div
            transition={{
              delayChildren: 1,
            }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className='flex flex-col gap-8 items-center w-[90%] sm:w-1/2'>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className=' dark:text-slate-50 text-4xl text-[#333333] font-extrabold'>
              {engLanguageActive
                ? 'Hello There! Soy Sebastian 👋'
                : '¡Hola! Soy Sebastian 👋'}
            </motion.h1>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className='border-l-8 border-light-500 dark:border-dark-pink dark:text-slate-50 dark:bg-dark-tertiary bg-[#fbfbfb] px-4 py-4 text-sm font-semibold text-[#333333be]'>
              {engLanguageActive
                ? 'Fullstack Developer. With over 2 years of experience, I am continuously learning to always give my best.'
                : 'Desarrollador Fullstack. Con más de 2 años de experiencia formandome para poder brindar lo mejor de mí siempre.'}
              <br></br>
              {engLanguageActive
                ? 'I am a very dedicated and passionate person, and I strive to demonstrate this in every project I undertake. I know I can contribute significantly to any development team because when I set my mind to something, there are no obstacles for me.'
                : 'Soy una persona muy dedicada y apasionada, trato de demostrarlo en cada proyecto que realizo y sé que puedo aportar mucho a cualquier equipo de desarrallo ya que cuando me propongo algo, para mi no existen obstaculos.'}
            </motion.p>
            <Link
              className='bg-light-500 p-3 w-max text-slate-50 rounded-md text-xs font-bold hover:bg-light-400 duration-200 hover:duration-200 active:scale-95 dark:bg-dark-sky'
              href={'/contact'}
              aria-label='contact-link'>
              {engLanguageActive ? 'Get in Touch' : 'Contáctame'}
            </Link>
          </motion.div>
        </section>
        <section className='rounded-md mb-20'>
          <h1 className=' dark:text-slate-50 text-2xl sm:text-4xl text-[#333333] font-extrabold text-center'>
            {engLanguageActive ? 'More about me' : 'Un poco más Sobre mi'}
          </h1>
          <div className='flex flex-wrap gap-10 justify-around w-full mt-24'>
            <motion.div
              transition={{
                duration: 0.6,
                bounce: 0.3,
                type: 'spring',
              }}
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              className='ml-10 min-[450px]:ml-0 rounded-md shadow-none min-[450px]:[box-shadow:7px_9px_9px_-3px_rgba(0,0,0,0.16)] bg-transparent min-[450px]:bg-[#fbfbfb] p-8 dark:bg-dark-tertiary dark:text-slate-50'>
              <h2 className='text-center text-2xl font-bold'>
                {engLanguageActive ? 'Educacion' : 'Education'} 👨‍🎓
              </h2>
              <ul className='flex flex-col gap-10 mt-10 relative before:absolute before:left-5 before:z-10 before:bottom-4 before:w-[2px] before:h-[15em] before:bg-light-500/30 dark:before:bg-dark-pink'>
                {educations.map((education, index) => (
                  <li
                    key={index}
                    className='z-20'>
                    <div className='flex gap-8 items-center'>
                      <Image
                        src={education.src}
                        alt={education.entity}
                        width={40}
                        height={40}
                        priority
                        className='rounded-full border border-light-500/40 object-cover bg-white'
                      />
                      <div className='flex flex-col items-start'>
                        <span className='font-bold text-lg'>
                          {education.entity}
                        </span>
                        <span className='text-xs font-semibold'>
                          {education.date}
                        </span>
                        <span className=''>{education.title}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              transition={{
                duration: 0.6,
                bounce: 0.3,
                type: 'spring',
              }}
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              className='w-[90%] sm:w-[30em] flex flex-col justify-center relative shadow-none rounded-md min-[450px]:[box-shadow:7px_9px_9px_-3px_rgba(0,0,0,0.16)] bg-transparent min-[450px]:bg-[#fbfbfb] p-8 dark:bg-transparent sm:dark:bg-dark-tertiary'>
              <h2 className='text-center text-2xl font-bold dark:text-slate-50'>
                {engLanguageActive ? 'Experience' : 'Experiencia'} 👨‍💼
              </h2>
              <p className='text-sm font-semibold text-[#333333cd] mt-8 border-l-8 dark:border-dark-pink dark:text-slate-50 dark:bg-dark-tertiary border-light-500 px-4 bg-slate-100 py-2'>
                {engLanguageActive
                  ? 'I have over 12 years of experience in the gastronomic sector. Although I have decided not to delve deeper into this area, as my profile is now focused on the technology sector, my past experience has allowed me to acquire valuable soft skills.'
                  : 'Cuento con más de 12 años de experiencia en el sector gastronómico. Aunque he decidido no profundizar en esta área, ya que mi perfil ahora está enfocado en el sector tecnológico, mi trayectoria pasada me ha permitido adquirir valiosas habilidades blandas.'}
                <br></br>
                <br></br>
                {engLanguageActive
                  ? 'These skills include effective communication, the ability to work under pressure, efficient customer handling, adaptability to any work environment, and problem-solving. These competencies complement my new professional focus and enable me to face technological challenges with a unique and enriching perspective.'
                  : ' Estas habilidades incluyen comunicación efectiva, capacidad para trabajar bajo presión, trato eficaz con clientes, adaptabilidad a cualquier entorno laboral y resolución de problemas. Estas competencias complementan mi nueva orientación profesional y me permiten enfrentar los desafíos tecnológicos con una perspectiva única y enriquecedora.'}
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
