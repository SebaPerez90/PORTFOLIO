import { useStore } from '@/context/store';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const Details = () => {
  const { engLanguageActive } = useStore();

  const [visibility, setVisibility] = useState(true);
  const boxRef = useRef<HTMLDivElement>(null);

  const changeVisibility = () => {
    boxRef.current?.classList.toggle('content-available');
    setVisibility(!visibility);
  };

  return (
    <article className='flex flex-col items-center self-center mt-32 w-[80%] m-[0_auto]'>
      <h1 className='dark:text-slate-50 text-[#333333] text-5xl font-extrabold text-center'>
        {engLanguageActive
          ? `Details of my experience`
          : 'Detalles de mi experiencia'}
      </h1>
      <div className='dark:text-zinc-300 pl-3 mt-6 text-[#333333] font-semibold font-sans'>
        <p>
          {engLanguageActive
            ? `It's not a loading error 😆 Not yet, but that coveted web developer position is on its way. Well, even though it's not related to the IT field, I spent 11 years working in the gastronomy area. Which, on a personal level, gave me many tools and skills that are necessary in any work environment and for everyday life.`
            : 'No es un error de carga 😆 Aún no, pero ya va a llegar ese tan ansiado puesto de desarrollador web. Bueno, aunque no está relacionado con el área de IT, pasé 11 años trabajando en el área de gastronomía. Lo cual, a nivel personal, me dio muchas herramientas y habilidades que son necesarias en cualquier entorno laboral y para la vida cotidiana.'}
        </p>
        <p className='mt-1'>
          {engLanguageActive
            ? `As you can see, there is a temporary gap that I decided not to delve into because it was more of the same and did not contribute any relevant information. Currently, I am 100% focused and committed to my training as a developer.`
            : 'Como verán, hay un bache temporal el cual decidí no profundizar porque era más de lo mismo y no aportaba ningún dato relevante. Actualmente estoy 100% enfocado y comprometido en mi formación como desarrollador.'}
        </p>
      </div>
      <button
        aria-label='expand/collapse-btn'
        className='dark:text-theme_dark-sup-pink dark:border-theme_dark-sup-pink dark:after:bg-theme_dark-sup-pink mt-10 font-bold text-light-500 border-2 border-light-500 p-[0.8em_2em] flex w-max  relative hover:text-white hover:z-10  after:absolute after:left-[50%] after:rounded-[2em] after:bottom-0 after:w-0 after:h-full after:bg-light-500 after:-z-10 rounded-[2em] hover:after:left-[0%] hover:after:w-[100%] active:outline active:outline-2 active:outline-light-200 hover:after:duration-[400ms] hover:translate-y-[-0.3em] hover:shadow-[0px_8px_7px_#00000049] duration-300 outline-none'
        onClick={changeVisibility}>
        {visibility
          ? engLanguageActive
            ? 'Read more 😁'
            : 'Leer mas 😁'
          : engLanguageActive
          ? 'Hide'
          : 'Ocultar'}
      </button>

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        ref={boxRef}
        className='[display:none]'>
        <h1 className='dark:text-slate-50 text-5xl font-extrabold text-center text-[#333333]'>
          Conclusión
        </h1>
        <p className='dark:text-zinc-300 px-3 text-lg font-semibold font-sans text-[#333333]'>
          {engLanguageActive
            ? `Firstly, I understood that being a waiter is not the future I want for my life. This motivated me to dedicate all my effort, passion, and energy to my training in technology. I am a very determined and ambitious person when I set a goal for myself, so I know that I can bring a lot of value to any company.`
            : 'En primer lugar, comprendí que ser mozo no es el futuro que quiero para mi vida. Esto me motivó a dedicar todo mi esfuerzo, pasión y energía a mi formación en tecnología. Soy una persona muy determinada y ambiciosa cuando me propongo una meta, por eso sé que puedo aportar mucho valor a cualquier empresa.'}
        </p>
        <div className='dark:border dark:border-slate-500/30 dark:bg-theme_dark-box-prim dark:text-zinc-300 bg-[#f7f7f7] border-[1px] border-light-600 p-8 mt-4 rounded-md font-semibold text-[#334155]'>
          <p>
            {engLanguageActive
              ? `From this experience, I can highlight some benefits:`
              : 'De esta experiencia, puedo descatar algunos beneficios :'}
          </p>
          <ul className='flex flex-col items-start gap-4'>
            <motion.li
              transition={{ delay: 0.1 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='flex gap-2 ml-4 pr-8 mt-8'>
              <span>⚡</span>
              {engLanguageActive
                ? `The ability to tolerate work under pressure is essential, as the job of a waiter involves constant demands and pressure, which is also applicable to the IT sector.`
                : 'capacidad para tolerar el trabajo bajo presión es esencial, ya que el trabajo de mozo implica exigencia y presión constantes, lo cual también es aplicable a sector IT.'}
            </motion.li>
            <motion.li
              transition={{ delay: 0.2 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='flex gap-2 ml-4 pr-8 '>
              <span>⚡</span>
              {engLanguageActive
                ? `Interpersonal skills that allow me to adapt to any work environment and team without difficulty.`
                : 'habilidades interpersonales que me permiten adaptarme a cualquier entorno laboral y equipo de trabajo sin dificultades.'}
            </motion.li>
            <motion.li
              transition={{ delay: 0.3 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='flex gap-2 ml-4 pr-8 '>
              <span>⚡</span>
              {engLanguageActive
                ? `Problem-solving skills while maintaining composure. Although both sectors involve teamwork, sometimes one must know how to handle oneself in adverse situations.`
                : 'capacidad resolutiva de problemas manteniendo la templanza. A pesar que en ambos sectores se trabaja en equipo, a veces uno mismo debe saber como manejarse en situaciones adversas.'}
            </motion.li>
            <motion.li
              transition={{ delay: 0.4 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='flex gap-2 ml-4 pr-8 '>
              <span>⚡</span>
              {engLanguageActive
                ? `And the most important one... discovering my passion and love for technology. I can spend hours and hours immersing myself more and more and always wanting to learn more.`
                : 'y las mas importante ... descubrir mi pasión y amor por la tecnologia. Puedo pasar horas y horas sumergiendome más y más y siempre querer aprender más.'}
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </article>
  );
};

export default Details;
