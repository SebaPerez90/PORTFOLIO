import { useStore } from '@/context/store';
import { Roboto } from 'next/font/google';
import { motion } from 'framer-motion';
// import DownloadBtn from '@/components/LandingPage/DownloadBtn';
import Avatar from './Avatar';

const roboto = Roboto({
  weight: ['900'],
  subsets: ['latin'],
});

const Hero = () => {
  const { engLanguageActive } = useStore();

  return (
    <section
      id='hero-section
    '
      className='max-[520px]:h-auto max-[520px]:pt-12 max-[520px]:flex-col xl:h-auto dark:before:bg-theme_dark-main-bg before:absolute before:left-0 before:top-0 before:w-full before:h-full max-[520px]:bg-gradient-to-t max-[520px]:from-white max-[520px]:to-light-700 max-[520px]:pl-8 relative bg-white flex items-center justify-evenly w-full h-[34em]'>
      <span className='dark:opacity-40 z-10 absolute h-12 w-12 rounded-full bg-[#d4b0ff] blur-md [box-shadow:0_0_40px_#dcbfff] duration-300 left-[20%] lg:left-0 top-0 animate-[bouncing2_16s_linear_alternate-reverse_infinite]'></span>

      <span className='dark:opacity-40 z-10 absolute h-8 w-8 rounded-full bg-[#beffcc] blur-md [box-shadow:0_0_40px_#c8ffd4] duration-300 right-[10em] lg:right-[50%] top-0 animate-[bouncing_16s_linear_alternate-reverse_infinite]'></span>

      <span className='dark:opacity-40 z-10 absolute h-24 w-24 rounded-full duration-300 left-[50%] lg:left-[25%] bottom-0 bg-light-500/50 blur-xl animate-[bouncing3_18s_linear_alternate-reverse_infinite]'></span>

      <motion.article
        transition={{
          duration: 1,
          type: 'spring',
          bounce: 0.4,
        }}
        initial={{ translateX: '-20em', opacity: 0 }}
        whileInView={{ translateX: '0em', opacity: 1 }}
        viewport={{ once: true }}
        className='z-30 w-[20em] flex flex-col items-start gap-4'>
        <span className='dark:text-slate-200 text-[#333333be] font-bold translate-y-2'>
          {engLanguageActive ? 'Hey, I´m Seba👋' : 'Hola!, mi nombre es Seba👋'}
        </span>
        <h1
          style={roboto.style}
          className='xl:text-8xl text-6xl dark:text-slate-50 text-[#333333e3]'>
          <strong className='dark:text-theme_dark-sup-sky text-light-500'>
            Front
          </strong>
          {engLanguageActive ? 'end' : 'end'}
          <br></br>
          Developer
        </h1>
        <p className='dark:text-slate-200 text-[#333333be] font-bold'>
          {engLanguageActive
            ? 'I am a Fullstack developer with a primary focus on the Frontend area, living in Buenos Aires. I can bring your brand to life with my help.'
            : 'Soy un desarrollador Fullstack con mayor enfoque en el area Frontend, vivo en Buenos Aires. Puedo darle vida a tu marca con mi ayuda.'}
        </p>

        {/* <DownloadBtn /> */}
      </motion.article>
      <Avatar />
    </section>
  );
};

export default Hero;
