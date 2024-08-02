import { useStore } from '@/context/store';
import { motion } from 'framer-motion';
import experience from '@/utils/experience.json';
// import Link from 'next/link';

const Experience = () => {
  const { engLanguageActive } = useStore();

  return (
    <section className='flex flex-col items-center gap-20 py-20'>
      <h1 className='text-4xl dark:text-zinc-200 text-[#334155] font-bold'>
        {engLanguageActive ? 'Experience.' : 'Experiencia.'}
      </h1>
      <div className='flex flex-col relative w-[40em] justify-between rounded-md bg-white dark:bg-dark-main py-16 items-center gap-16 work-experience-container [box-shadow:0px_0px_30px_0px_#0000001a]'>
        <div className='dark:bg-dark-main dark:text-dark-sky absolute left-[0.5em] flex gap-4 justify-center pt-6 w-36 h-36 bg-transparent text-6xl font-black z-50 text-light-500 bottom-[32%]'>
          <span className='animate-[loading_1s_linear_infinite]'>.</span>
          <span className='animate-[loading_1s_linear_infinite] [animation-delay:200ms]'>
            .
          </span>
          <span className='animate-[loading_1s_linear_infinite] [animation-delay:400ms]'>
            .
          </span>
        </div>
        {experience.map((item, key) => (
          <motion.div
            transition={{ delay: 0.2, staggerChildren: 0.3, duration: 0.7 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            key={key}
            className='flex flex-col gap-5 w-[60%] relative before:absolute before:w-8 before:h-8 before:rounded-full before:bg-light-800 before:left-[-6em] before:top-3 dark:before:bg-dark-sky left-10'>
            <div className='flex flex-col'>
              <span className='dark:text-slate-50 font-extrabold text-light-500/85 text-3xl'>
                {item.company}
              </span>

              <span className='dark:text-dark-pink text-xl font-bold text-slate-600'>
                {engLanguageActive ? item.position[0] : item.position[1]}
              </span>
              <span className='dark:text-zinc-300 text-sm text-slate-500'>
                {item.date}
              </span>
            </div>
            <p className='text-slate-500 dark:text-slate-300 font-normal text-sm'>
              {engLanguageActive
                ? item.tasks_description[0]
                : item.tasks_description[1]}
            </p>
          </motion.div>
        ))}
      </div>

      {/* <div className='flex flex-col items-center gap-3 mt-14 translate-y-8'>
        <p className=''>
          {engLanguageActive
            ? 'If you want to know more about my work experience, you can click here.'
            : 'Si querés saber más acerca de mi experiencia laboral, podés hacer clic aquí.'}
        </p>
        <Link
          className='hover:duration-200 bg-light-500 p-3 w-max text-slate-50 rounded-md text-xs font-bold hover:bg-light-400 duration-200 active:scale-95 dark:bg-dark-sky'
          href={'/about'}
          aria-label='contact-link'>
          {engLanguageActive ? 'About me' : 'Sobre mi'}
        </Link>
      </div> */}
    </section>
  );
};

export default Experience;
