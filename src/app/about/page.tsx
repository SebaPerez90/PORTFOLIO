import React from 'react';
import { Roboto } from 'next/font/google';
import type { Metadata } from 'next';

import Image from 'next/image';
import profile_avatar from '@/assets/images/avatar.png';

const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'About Section',
};

const About = () => {
  return (
    <section
      style={roboto.style}
      className='bg-[#dedede] flex flex-col gap-8 items-center'>
      <article className='aaaa shadow-[2px_18px_20px_#aaaaaa] z-10 relative rounded-lg gap-4 flex justify-evenly bg-white items-center w-[85%] h-[30rem] mt-10'>
        <div className='z-30 rounded-[50%] overflow-hidden border-2 border-[#ff00003d] h-[25rem]'>
          <Image
            src={profile_avatar}
            alt='profile_avatar'
            priority
            className='opacity-[0.03] object-cover w-full h-full'
          />
        </div>
        <div className='w-2/4 h-full flex flex-col justify-center items-center gap-4'>
          <header className='font-bold w-full text-black text-center'>
            <h1 className='text-3xl'>Hey 👋</h1>
            <h2>spoiler alert ! van a tener que leer mucho 😆</h2>
          </header>
          <div className='text-[#6c6c6cdc] font-light text-[0.9em]'>
            <p>
              ¡Hola! Soy Sebastián Pérez, y vivo en el sur de Buenos Aires, en
              Berazategui. Como mencioné antes, soy un estudiante autodidacta
              con un enfoque en el desarrollo front-end, aunque también tengo
              conocimientos en el área de back-end.
            </p>
            <p>
              Soy consciente de que mi nivel de conocimiento actual no es
              suficiente, pero tengo algo muy importante: determinación y
              convicción. Esto me impulsa a estar en continuio aprendizaje.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-black'>Expectativas</h3>
            <div className='text-[#6c6c6cdc] font-light text-[0.9em]'>
              <p>
                Mi objetivo principal es conseguir empleo en una empresa, donde
                estoy seguro de poder aportar mucho valor. Creo firmemente en mi
                capacidad para alcanzar cualquier meta con pasión y
                determinación.
              </p>
              <p>
                Además, reconozco la importancia de la educación formal y
                académica. Una vez dentro del sector, tengo la intención de
                seguir formándome en informática.
              </p>
            </div>
          </div>
        </div>
      </article>
      <article className='flex w-[75%] gap-8 bg-[#9bb8cd] p-8'>
        <div className='border-2 shadow-[2px_18px_20px_#00000098] self-end rounded-lg bg-white text-[#6c6c6cdc] font-light text-[0.9em] flex flex-col gap-3 px-8 py-8 h-max'>
          {/* <h1 className=''>Formación</h1> */}
          <p>
            Decidí retomar el bootcamp de `Soy Henry` para complementar mi
            aprendizaje autodidacta. Creo que ahora, con el conocimiento
            adquirido en el último año, podré completarlo con éxito.
          </p>
          <p>
            Reconozco que la formación autodidacta puede ser solitaria, por eso
            considero la universidad en el futuro cuando mejore mi situación
            económica, valorando la posibilidad de establecer contactos en ese
            entorno.
          </p>
        </div>
        <aside className='border-2 shadow-[2px_18px_20px_#00000098] rounded-lg bg-white text-[#6c6c6cdc] font-light text-[0.9em] px-8 py-8'>
          <p>
            Tomé la decisión de formarme por mi cuenta basándome en mi
            experiencia:
          </p>
          <ul className='list-disc flex flex-col gap-4 mt-4 ml-4'>
            <li>
              `Soy Henry` : la intensidad y exigencia del programa dificultó mi
              asimilación del contenido, llevándome a abandonarlo temporalmente.
            </li>
            <li>
              `UTN - Técnico Superior en Programación` : Principalmente por
              limitaciones económicas, no pude costear la carrera. Además,
              experimenté un progreso lento, ya que consideré que el contenido
              era accesible por cuenta propia.
            </li>
            <li>
              Autodidacta: opté por la formación autodidacta al notar que los
              conocimientos universitarios no siempre están actualizados, y que
              en línea puedo acceder a documentación oficial sobre las
              tecnologías demandadas por el mercado.
            </li>
          </ul>
        </aside>
      </article>
      <article>
        <h1>Experiencia Laboral</h1>
        <div>
          <p>
            Aunque no está relacionado con el área de TI, pasé 11 años
            trabajando en gastronomía. De esta experiencia, destaco dos
            aspectos:
          </p>
          <p>
            En primer lugar, comprendí que no es el futuro que deseo, ya que no
            me veo trabajando como mozo dentro de 5 años. Esto me motiva a
            dedicar todas mis energías a mis estudios actuales.
          </p>
          <p>
            En segundo lugar, adquirí herramientas necesarias para el sector de
            TI. La capacidad para tolerar la presión es esencial, ya que el
            trabajo de mozo implica exigencia y presión constantes, así como
            jornadas laborales extensas. También desarrollé habilidades
            interpersonales que me permiten adaptarme a cualquier entorno
            laboral y equipo de trabajo sin dificultades.
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
