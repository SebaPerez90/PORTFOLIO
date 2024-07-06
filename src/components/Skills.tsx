import { useStore } from '@/context/store';
import { Roboto } from 'next/font/google';
import { skills } from '@/utils/skills';
import { motion } from 'framer-motion';

const roboto = Roboto({
  weight: ['900'],
  subsets: ['latin'],
});

const Skills = () => {
  const { engLanguageActive } = useStore();
  return (
    <section
      id='#skills-section'
      className='flex flex-col items-center gap-16'>
      <h1
        className='dark:text-slate-50 text-4xl font-black text-[#334155]'
        style={roboto.style}>
        {engLanguageActive ? 'Skills.' : 'Habilidades.'}
      </h1>
      <div className='w-full flex gap-14 flex-wrap justify-center'>
        {skills.map((element, index) => (
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
            className='dark:border-slate-700 dark:bg-theme_dark-main-bg bg-white border border-slate-200 [box-shadow:7px_9px_9px_-3px_rgba(0,0,0,0.16)] w-[20rem] sm:w-[25em] flex flex-col items-center flex-wrap gap-6 px-6 py-9 rounded-md'>
            <h2 className='dark:text-theme_dark-sup-sky font-extrabold text-light-500 text-2xl'>
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
                      className='border font-bold text-xs rounded-md p-1 border-slate-600 text-[#404040ce] dark:text-slate-400 relative before:absolute before:w-[0.5em] before:h-[0.5em] before:-left-2 before:bottom-2 before:bg-light-800 before:rounded-full bg-slate-100 dark:bg-theme_dark-box-second before:animate-[disc-shining_800ms_ease-out_alternate-reverse_infinite]'>
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
                      className='border font-bold text-xs rounded-md p-1 border-slate-600 text-[#404040ce] dark:text-slate-400 relative before:absolute before:w-[0.5em] before:h-[0.5em] before:-left-2 before:bottom-2 before:bg-light-800 before:rounded-full bg-slate-100 dark:bg-theme_dark-box-second before:animate-[disc-shining_800ms_ease-out_alternate-reverse_infinite]'>
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
