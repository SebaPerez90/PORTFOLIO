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
    <article className='w-[800px]'>
      <button
        aria-label='expand/collapse-btn'
        className='dark:text-theme_dark-sup-pink dark:border-theme_dark-sup-pink dark:after:bg-theme_dark-sup-pink mt-10 font-bold text-light-500 border-2 border-light-500 p-[0.8em_2em] flex w-max  relative hover:text-white hover:z-10  after:absolute after:left-[50%] after:rounded-[2em] after:bottom-0 after:w-0 after:h-full after:bg-light-500 after:-z-10 rounded-[2em] hover:after:left-[0%] hover:after:w-[100%] active:outline active:outline-2 active:outline-light-200 hover:after:duration-[400ms] hover:translate-y-[-0.3em] hover:shadow-[0px_8px_7px_#00000049] duration-300 outline-none m-[0_auto]'
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
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        ref={boxRef}
        className='hidden flex-col items-start'>
        <h1 className='dark:text-slate-50 text-[#333333] text-5xl font-extrabold'>
          {engLanguageActive
            ? `Details of my experience`
            : 'Detalles de mi experiencia'}
        </h1>
        <p className='dark:text-zinc-300 pl-3 text-[#333333] font-semibold font-sans'>
          {engLanguageActive
            ? `I have more than 12 years of experience in the gastronomic sector. I decided not to delve further into the experience related to it, as my current profile is focused on the technology sector. In favor of my past experience, I acquired a set of soft skills that allow me to communicate effectively, tolerate working under pressure, handle clients efficiently, adapt to any work environment, and solve problems.`
            : 'Tengo mas de 12 años en el sector gastronómico. Decidí no ahondar más en la experiencia relacionada al mismo, debido a que mi perfil actualmente está enfocado al sector tecnológico. A favor de mi experiencia pasada, adquiri un set de habilidades blandas que me pueden permitir una comunicación efectiva, tolerar el trabajo bajo presión, trato efectivo con clientes, adaptabilidad a cualquier entorno laboral y resolución de problemas.'}
        </p>
      </motion.div>
    </article>
  );
};

export default Details;
