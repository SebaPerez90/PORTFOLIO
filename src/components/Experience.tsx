import { useStore } from '@/context/store';
import { motion } from 'framer-motion';
import experience from '@/utils/experience.json';

const Experience = () => {
  const { engLanguageActive } = useStore();

  return (
    <section 
    id='experience-section'
    className='flex flex-col items-center gap-14 py-20'>
      <h1 className='text-4xl dark:text-zinc-200 text-[#334155] font-extrabold'>
        {engLanguageActive ? 'Experience.' : 'Experiencia.'}
      </h1>
      <div className='flex flex-col relative w-[40em] justify-between dark:bg-dark-main py-16 pl-32 md:pl-0 items-center md:items-end gap-16 work-experience-container'>
        <div className='dark:bg-dark-main dark:text-dark-sky absolute left-[4em] flex gap-4 justify-center pt-6 w-36 h-36 bg-transparent text-6xl font-black z-40 text-light-500/85 bottom-[32%]'>
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
            className='flex flex-col gap-5 w-[60%] relative before:absolute before:w-8 before:h-8 before:rounded-full before:bg-light-800/70 before:left-[-8em] before:top-3 dark:before:bg-dark-sky after:absolute after:left-[-6em] after:top-7 after:w-16 after:h-[2px] after:bg-light-800/70 dark:after:bg-dark-sky after:z-10 before:z-20'>
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
            <p className='text-slate-500 dark:text-slate-300 font-normal text-lg sm:text-sm'>
              {engLanguageActive
                ? item.tasks_description[0]
                : item.tasks_description[1]}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
