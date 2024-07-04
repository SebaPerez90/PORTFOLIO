'use client';

import { useStore } from '@/context/store';
import Image from 'next/image';
import avatar from '@/assets/images/avatar.webp';
import utn_icon from '@/assets/images/utn-logo.webp';
import henry_icon from '@/assets/images/soyHenry-logo.webp';
import ef_icon from '@/assets/images/ef-icon.webp';
import Link from 'next/link';
import Footer from '@/components/Footer';

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
    entity: 'Henry',
    date: 'feb.2024 - jun.2024',
    title: 'Fullstack Developer',
  },
];

const About = () => {
  const { engLanguageActive } = useStore();
  return (
    <>
      <main className='flex flex-col gap-24 items-center pt-28'>
        <section className='flex justify-evenly'>
          <div className='rounded-full h-[14em] w-[14em] overflow-hidden'>
            <Image
              src={avatar}
              alt='avatar'
              className='w-full h-full object-cover bg-black dark:bg-zinc-200'
              priority
            />
          </div>
          <div className='flex flex-col gap-8 items-center w-1/2'>
            <h1 className=' dark:text-slate-50 text-4xl text-[#333333] font-extrabold'>
              {engLanguageActive
                ? 'Hello There! Soy Sebastian 👋'
                : '¡Hola! Soy Sebastian 👋'}
            </h1>
            <p className=' dark:text-zinc-300 text-sm font-semibold text-[#333333]'>
              Desarrollador Fullstack. Con más de 2 años de experiencia
              formandome para poder brindar lo mejor de mí siempre.
              <br></br>
              Soy una persona muy dedicada y apasionada, trato de demostrarlo en
              cada proyecto que realizo y sé que puedo aportar mucho a cualquier
              equipo de desarrallo ya que cuando me propongo algo, para mi no
              existen obstaculos.
            </p>
            <Link
              className='bg-light-500 p-3 w-max text-slate-50 rounded-md text-xs font-bold hover:bg-light-400 duration-200 hover:duration-200 active:scale-95 dark:bg-theme_dark-sup-sky'
              href={'#contact-section'}
              aria-label='contact-link'>
              {engLanguageActive ? 'Get in Touch' : 'Contáctame'}
            </Link>
          </div>
        </section>
        <section className='w-[85%]'>
          <h1 className=' dark:text-slate-50 text-4xl text-[#333333] font-extrabold text-center'>
            Un poco más Sobre mi
          </h1>
          <div className='flex justify-around w-full mt-24'>
            <div className='w-1/2'>
              <h2 className='text-center text-2xl font-bold'>Educacion 👨‍🎓</h2>
              <ul className='flex flex-col gap-10 mt-10 relative before:absolute before:left-5 before:-z-10 before:bottom-0 before:w-[2px] before:h-[15em] before:bg-light-500/40'>
                {educations.map((education, index) => (
                  <li key={index}>
                    <div className='flex gap-8 items-center z-20'>
                      <Image
                        src={education.src}
                        alt={education.entity}
                        width={40}
                        height={40}
                        priority
                        className='rounded-full border border-light-500/40 object-cover bg-white'
                      />
                      <div className='flex flex-col items-start'>
                        <span className='font-bold text-xl'>
                          {education.entity}
                        </span>
                        <span className='text-xs font-semibold'>
                          {education.date}
                        </span>
                        <span className='font-serif'>{education.title}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-1/2 flex flex-col justify-center relative'>
              <h2 className='text-center text-2xl font-bold absolute top-0  w-full'>
                Experiencia 👨‍💼
              </h2>
              <p className='text-sm font-semibold text-[#333333cd] mt-8'>
                Cuento con más de 12 años de experiencia en el sector
                gastronómico. Aunque he decidido no profundizar en esta área, ya
                que mi perfil ahora está enfocado en el sector tecnológico, mi
                trayectoria pasada me ha permitido adquirir valiosas habilidades
                blandas. Estas habilidades incluyen comunicación efectiva,
                capacidad para trabajar bajo presión, trato eficaz con clientes,
                adaptabilidad a cualquier entorno laboral y resolución de
                problemas. Estas competencias complementan mi nueva orientación
                profesional y me permiten enfrentar los desafíos tecnológicos
                con una perspectiva única y enriquecedora.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
