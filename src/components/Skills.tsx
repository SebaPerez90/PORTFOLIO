import { useStore } from '@/context/store';
import { Roboto } from 'next/font/google';
import { skills } from '@/utils/skills';
import { motion } from 'framer-motion';
import { ISkills } from '@/interface/skills.interface';

const roboto = Roboto({
  weight: ['900'],
  subsets: ['latin'],
});

const Skills = () => {
  const { engLanguageActive } = useStore();

  return (
    <section
      id='skills-section'
      className='flex flex-col items-center gap-16 py-32'>
      <h1
        className='dark:text-slate-50 text-4xl font-bold text-[#334155]'
        style={roboto.style}>
        {engLanguageActive ? 'Skills.' : 'Habilidades.'}
      </h1>
      <div className='max-[550px]:[grid-template-columns:repeat(1,fit-content(80%))] justify-center [grid-template-columns:repeat(2,fit-content(350px))] grid gap-10 px-11'>
        {skills.map((element: ISkills, index) => (
          <motion.div
            transition={{
              bounce: 0.45,
              damping: 30,
              duration: 0.6,
              staggerChildren: 0.6,
              type: 'spring',
            }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            key={index}
            className='dark:bg-dark-secondary bg-[#f6f6f7] max-[550px]:w-full w-[20rem] sm:w-[23em] flex flex-col items-center flex-wrap gap-6 px-6 py-9 rounded-lg [box-shadow:0px_3px_15px_0px_#0000004d]'>
            <h2 className='dark:text-dark-sky font-extrabold text-slate-700 text-strong text-3xl'>
              {element.field}
            </h2>
            <ul className='flex justify-center flex-wrap gap-4'>
              {engLanguageActive
                ? element.skillsEng.map((element, index) => (
                    <motion.li
                      transition={{ delay: 0.2, staggerChildren: 0.6 }}
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      key={index}
                      className='border font-bold text-base md:text-xs rounded-md p-1 border-slate-600 text-[#404040ce] dark:text-slate-400 relative before:absolute before:w-[0.5em] before:h-[0.5em] before:-left-3 md:before:-left-2 before:bottom-2 before:bg-light-800 before:rounded-full bg-slate-100 dark:bg-dark-secondary before:animate-[disc-shining_800ms_ease-out_alternate-reverse_infinite]'>
                      {element}
                    </motion.li>
                  ))
                : element.skillsEsp.map((element, index) => (
                    <motion.li
                      transition={{ delay: 0.2, staggerChildren: 0.6 }}
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      key={index}
                      className='border font-bold text-base md:text-xs rounded-md p-1 border-slate-600 text-[#404040ce] dark:text-slate-400 relative before:absolute before:w-[0.5em] before:h-[0.5em] before:-left-3 md:before:-left-2 before:bottom-2 before:bg-light-800 before:rounded-full bg-slate-100 dark:bg-dark-secondary before:animate-[disc-shining_800ms_ease-out_alternate-reverse_infinite]'>
                      {element}
                    </motion.li>
                  ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
