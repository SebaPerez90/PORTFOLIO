import { useStore } from '@/context/store';
import { Roboto } from 'next/font/google';
import { skills } from '@/utils/skills';

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
          <div
            key={index}
            className='bg-white border border-slate-200 [box-shadow:7px_9px_9px_-3px_rgba(0,0,0,0.16)] w-[25em] flex flex-col items-center flex-wrap gap-6 px-6 py-5 rounded-md'>
            <h2 className='font-extrabold text-light-500 text-2xl'>
              {element.field}
            </h2>
            <ul className='flex justify-center flex-wrap gap-4'>
              {engLanguageActive
                ? element.skillsEng.map((element, index) => (
                    <li
                      key={index}
                      className='border font-bold text-xs rounded-md p-1 border-slate-600 text-[#404040ce]'>
                      {element}
                    </li>
                  ))
                : element.skillsEsp.map((element, index) => (
                    <li
                      key={index}
                      className='border font-bold text-xs rounded-md p-1 border-slate-600 text-[#404040ce]'>
                      {element}
                    </li>
                  ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

// import { motion } from 'framer-motion';
// import { skills } from './Services-Skills/type';
// import { useStore } from '@/context/store';

// const Skills = () => {
//   const { engLanguageActive } = useStore();

//   return (
//     <motion.section
//       transition={{
//         bounce: 0.45,
//         damping: 30,
//         duration: 0.6,
//         staggerChildren: 0.2,
//         type: 'spring',
//       }}
//       initial={{ x: -200, opacity: 0 }}
//       whileInView={{ x: 0, opacity: 1 }}
//       viewport={{ once: true }}
//       className='flex-col items-center md:flex-row flex md:justify-evenly flex-wrap w-[35em] md:w-[50em] p-4 gap-12 min-[2100px]:w-[70em] min-[1200px]:gap-24'>
//       {skills.map((item, index) => (
//         <div
//           key={index}
//           className='min-[1200px]:scale-125 w-[275px] px-4 h-52 md:w-auto dark:bg-theme_dark-box-second border border-slate-500/30  bg-white flex flex-col items-center justify-center relative shadow-[14px_30px_20px_-10px_#0000004f] rounded-md'>
//           <h1 className='dark:text-theme_dark-sup-pink w-full text-light-500 text-2xl font-black text-center absolute top-4'>
//             {engLanguageActive ? item.titleEng : item.titleSpan}
//           </h1>
//           <ul className='flex gap-2 w-[15em] mt-12 items-center flex-wrap justify-center'>
//             {item.skills.map((skill, index) => (
//               <motion.li
//                 transition={{ delay: 0.2, staggerChildren: 0.1 }}
//                 initial={{ translateY: '10em', opacity: 0 }}
//                 whileInView={{ translateY: '0em', opacity: 1 }}
//                 viewport={{ once: true, margin: '50px' }}
//                 key={index}
//                 className='flex p-2 items-center justify-center bg-[#e8e8e8] dark:bg-slate-600/30 rounded dark:text-slate-50 text-base cursor-default font-medium text-[#334155] text-center'>
//                 {skill}
//               </motion.li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </motion.section>
//   );
// };

// export default Skills;
