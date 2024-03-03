import { useStore } from '@/store';
import { Roboto } from 'next/font/google';

import workExperience from '@/data/workExperience.json';
import { useRef, useState } from 'react';

const roboto = Roboto({
  weight: ['900'],
  subsets: ['latin'],
});

const Experience = () => {
  const { engLanguageActive } = useStore();
  const [visibility, setVisibility] = useState(true);
  const boxRef = useRef<HTMLDivElement>(null);

  const changeVisibility = () => {
    boxRef.current?.classList.toggle('content-available');
    setVisibility(!visibility);
  };

  return (
    <section className='w-[50em]'>
      <h1
        className='text-3xl [letter-spacing:15px] text-[#313131be]'
        style={roboto.style}>
        {engLanguageActive
          ? 'WORK EXPERIENCE & STUDIES'
          : 'EXPERIENCIA LABORAL Y ESTUDIOS'}
      </h1>

      <div className='gap-32 mt-40 border-l-4 border-[#6161619b] flex  flex-col justify-between items-center relative work-experience-container z-10'>
        <div className='absolute left-[-1em] flex gap-4 justify-center bottom-[9em] w-52 h-44 bg-[#dedede] text-6xl font-black z-50 text-light-500 pt-10'>
          <span className='animate-[loading_1s_linear_infinite]'>.</span>
          <span className='animate-[loading_1s_linear_infinite] [animation-delay:200ms]'>
            .
          </span>
          <span className='animate-[loading_1s_linear_infinite] [animation-delay:400ms]'>
            .
          </span>
        </div>
        {workExperience.map((item, key) => (
          <article
            key={key}
            className='relative w-full flex justify-around  items-start text-black before:absolute before:w-8 before:h-8 before:rounded-full before:bg-light-500 before:left-[-1em] before:top-0'>
            <div className='flex flex-col items-center'>
              <h1 className='font-bold text-light-500 text-center w-full text-2xl'>
                {item.company}
              </h1>
              <h2 className='text-xl text-[#6565fbcf]'>
                {engLanguageActive ? item.position[0] : item.position[1]}
              </h2>
              <span className='text-sm text-[#373737be] font-medium'>
                {item.date}
              </span>
            </div>
            <p className='w-[20em] text-lg text-[#373737c4] font-semibold'>
              {engLanguageActive
                ? item.tasks_description[0]
                : item.tasks_description[1]}
            </p>
          </article>
        ))}
      </div>
      <article className='gap-6 flex flex-col items-center self-center mt-32 bg-white py-12 px-6 rounded-md'>
        <hr />
        <h1 className='text-[#333333ac] text-3xl font-extrabold text-center'>
          <strong className='text-red-400'>SPOILER ALERT! </strong>- Mucho texto
          😅
        </h1>
        <div className='pl-3  mt-6 font-semibold text-[#33333390]'>
          <p>
            {engLanguageActive
              ? `It's not a loading error jaja! Not yet, but that coveted web developer position is on its way. Well, even though it's not related to the IT field, I spent 11 years working in the gastronomy area. Which, on a personal level, gave me many tools and skills that are necessary in any work environment and for everyday life.`
              : 'No es un error de carga jaja! Aún no, pero ya va a llegar ese tan ansiado puesto de desarrollador web. Bueno, aunque no está relacionado con el área de IT, pasé 11 años trabajando en el área de gastronomía. Lo cual, a nivel personal, me dio muchas herramientas y habilidades que son necesarias en cualquier entorno laboral y para la vida cotidiana'}
          </p>
          <p className='mt-4'>
            {engLanguageActive
              ? `As you can see, there is a temporary gap that I decided not to delve into because it was more of the same and did not contribute any relevant information. Currently, I am 100% focused and committed to my training as a developer.`
              : 'Como verán, hay un bache temporal el cual decidí no profundizar porque era más de lo mismo y no aportaba ningún dato relevante. Actualmente estoy 100% enfocado y comprometido en mi formación como desarrollador.'}
          </p>
        </div>
        <button
          className='font-bold text-light-800 border-2 border-[#4df672] p-[0.8em_2em] flex w-max  relative hover:text-white hover:z-10  after:absolute after:left-[50%] after:rounded-[2em] after:bottom-0 after:w-0 after:h-full after:bg-light-800 after:-z-10 rounded-[2em] hover:after:left-[0%] hover:after:w-[100%] active:outline active:outline-2 active:outline-light-600 hover:after:duration-[400ms] hover:translate-y-[-0.3em] hover:shadow-[0px_8px_7px_#00000049] duration-300 outline-none'
          onClick={changeVisibility}>
          {visibility
            ? engLanguageActive
              ? 'Read more 😁'
              : 'Leer mas 😁'
            : engLanguageActive
            ? 'Hide'
            : 'Ocultar'}
        </button>

        <div ref={boxRef} className='[display:none]'>
          <h1 className='text-light-500 [letter-spacing:8px] text-3xl font-extrabold text-center'>
            Conclusión
          </h1>
          <p className='px-3 text-lg font-semibold text-[#33333390]'>
            {engLanguageActive
              ? `Firstly, I understood that being a waiter is not the future I want for my life. This motivated me to dedicate all my effort, passion, and energy to my training in technology. I am a very determined and ambitious person when I set a goal for myself, so I know that I can bring a lot of value to any company.`
              : 'En primer lugar, comprendí que ser mozo no es el futuro que quiero para mi vida. Esto me motivó a dedicar todo mi esfuerzo, pasión y energía a mi formación en tecnología. Soy una persona muy determinada y ambiciosa cuando me propongo una meta, por eso sé que puedo aportar mucho valor a cualquier empresa.'}
          </p>
          <div className='bg-[#333333]  p-8 mt-4 rounded-md font-semibold text-white'>
            <p>
              {engLanguageActive
                ? `From this experience, I can highlight some benefits:`
                : 'De esta experiencia, puedo descatar algunos beneficios :'}
            </p>
            <ol className='list-decimal flex flex-col items-start gap-4'>
              <li className='ml-4 text-sm pr-8 mt-8'>
                {engLanguageActive
                  ? `The ability to tolerate work under pressure is essential, as the job of a waiter involves constant demands and pressure, which is also applicable to the IT sector.`
                  : 'capacidad para tolerar el trabajo bajo presión es esencial, ya que el trabajo de mozo implica exigencia y presión constantes, lo cual también es aplicable a sector IT.'}
              </li>
              <li className='ml-4 text-sm pr-8 '>
                {engLanguageActive
                  ? `Interpersonal skills that allow me to adapt to any work environment and team without difficulty.`
                  : 'habilidades interpersonales que me permiten adaptarme a cualquier entorno laboral y equipo de trabajo sin dificultades.'}
              </li>
              <li className='ml-4 text-sm pr-8 '>
                {engLanguageActive
                  ? `Problem-solving skills while maintaining composure. Although both sectors involve teamwork, sometimes one must know how to handle oneself in adverse situations.`
                  : 'capidad resolutiva de problemas manteniendo la templanza. A pesar que en ambos sectores se trabaja en equipo, a veces uno mismo debe saber como manejarse en situaciones adversas.'}
              </li>
              <li className='ml-4 text-sm pr-8 '>
                {engLanguageActive
                  ? `And the most important one... discovering my passion and love for technology. I can spend hours and hours immersing myself more and more and always wanting to learn more.`
                  : 'y las mas importante ... descubrir mi pasión y amor por la tecnologia. Puedo pasar horas y horas sumergiendome más y más y siempre querer aprender más.'}
              </li>
            </ol>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Experience;
