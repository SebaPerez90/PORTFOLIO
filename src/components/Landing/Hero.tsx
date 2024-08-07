import { useStore } from '@/context/store';
import { motion } from 'framer-motion';
import HeroButtons from '@/components/Landing/HeroButtons';
import Avatar from './Avatar';

const Hero = () => {
  const { engLanguageActive } = useStore();

  return (
    <section
      id='hero-section'
      className='relative h-[45em] bg-white pt-12 flex items-center justify-evenly w-full dark:bg-dark-main sm:h-[38em]'>
      <span className='dark:opacity-50 z-10 absolute h-12 w-12 rounded-full bg-[#d4b0ff]  [box-shadow:0_0_40px_#dcbfff] duration-300 left-0 top-0 blur-md animate-[bouncing2_14s_linear_alternate-reverse_infinite]'></span>

      <span className='dark:opacity-40 z-10 absolute h-8 w-8 rounded-full bg-[#beffcc]  [box-shadow:0_0_40px_#c8ffd4] duration-300 right-[50%] top-0 blur-md animate-[bouncing_17s_linear_alternate-reverse_infinite]'></span>

      <span className='dark:opacity-50 opacity-50 z-10 absolute h-24 w-24 rounded-full duration-300 right-0 top-0 blur-lg dark:bg-dark-sky/50 bg-light-500/50 animate-[bouncing3_19s_linear_alternate-reverse_infinite]'></span>

      <motion.div
        transition={{
          duration: 1,
          type: 'spring',
          bounce: 0.4,
        }}
        initial={{ translateX: '-20em', opacity: 0 }}
        whileInView={{ translateX: '0em', opacity: 1 }}
        viewport={{ once: true }}
        className='w-[50%] md:w-[32em] flex flex-col items-start gap-4 z-40'>
        <span className='dark:text-slate-200 text-[#333333be] text-lg font-semibold translate-y-2'>
          {engLanguageActive ? 'Hey! I´m Seba👋' : 'Hola! mi nombre es Seba👋'}
        </span>
        <h1 className='text-7xl xl:text-8xl dark:text-slate-50 text-[#333333e3] font-black'>
          <strong className='dark:text-dark-sky text-light-500/85'>
            Fullstack
          </strong>
          <br></br>
          Developer
        </h1>
        <p className='dark:text-slate-200 text-[#333333be] w-[40ch] text-xl max-[500px]:w-[30ch]'>
          {engLanguageActive ? 'I live in Buenos Aires and have more than ' : 'Vivo en Buenos Aires y cuento con más '}
          <strong className='font-extrabold dark:text-white text-slate-600'>
            {engLanguageActive
              ? '2 years of experience '
              : '2 años de experiencia '}
          </strong>
          {engLanguageActive
            ? 'in software development, specializing in frontend. Together, we can bring your idea to life.'
            : 'en desarrollo de software, especializado en frontend. Juntos, podemos transformar tu idea en realidad'}
        </p>

        <HeroButtons />
      </motion.div>
      <Avatar />
    </section>
  );
};

export default Hero;
