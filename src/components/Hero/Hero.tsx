import { useStore } from '@/context/store';
import { Roboto } from 'next/font/google';

import { motion } from 'framer-motion';

import DownloadBtn from '@/components/Hero/DownloadBtn';
import Avatar from './AvatarHero';

const roboto = Roboto({
  weight: ['700'],
  subsets: ['latin'],
});

const Hero = () => {
  const { engLanguageActive } = useStore();

  return (
    <section
      id='hero-section
    '
      className='max-[520px]:h-auto max-[520px]:pt-12 max-[520px]:flex-col xl:h-auto dark:before:bg-theme_dark-main-bg before:absolute before:left-0 before:top-0 before:w-full before:h-full max-[520px]:bg-gradient-to-t max-[520px]:from-white max-[520px]:to-light-700 max-[520px]:pl-8 relative bg-white flex items-center justify-between pl-16 w-full h-[38em]'>
      <span className='dark:opacity-40 z-10 absolute h-12 w-12 rounded-full bg-[#dcbfff] blur-md [box-shadow:0_0_40px_#dcbfff] duration-300 left-[20%] lg:left-0 top-0 animate-[bouncing2_16s_linear_alternate-reverse_infinite]'></span>

      <span className='dark:opacity-40 z-10 absolute h-8 w-8 rounded-full bg-[#c8ffd4] blur-md [box-shadow:0_0_40px_#c8ffd4] duration-300 right-[10em] lg:right-[50%] top-0 animate-[bouncing_16s_linear_alternate-reverse_infinite]'></span>

      <span className='dark:opacity-40 z-10 absolute h-24 w-24 rounded-full duration-300 left-[50%] lg:left-[25%] bottom-0 bg-light-200 blur-xl animate-[bouncing3_18s_linear_alternate-reverse_infinite]'></span>

      <motion.article
        transition={{
          duration: 1,
          type: 'spring',
          bounce: 0.4,
        }}
        initial={{ translateX: '-20em', opacity: 0 }}
        whileInView={{ translateX: '0em', opacity: 1 }}
        viewport={{ once: true }}
        className=' 2xl:w-[45em] xl:translate-x-20 pr-3 max-[700px]:z-30 max-[700px]:w-full z-20 w-[30em] flex flex-col items-start gap-6'>
        <h1
          style={roboto.style}
          className='xl:text-8xl dark:text-slate-50 max-[520px]:text-[#3d3d3d] max-[520px]:gap-10 text-[#333333e3] font-extrabold text-7xl [letter-spacing:-1px]'>
          {engLanguageActive ? "Hello, my name's " : 'Hola mi nombre es '}
          <strong className='dark:text-theme_dark-sup-sky text-light-500'>
            Seba
          </strong>
          <b className='text-7xl'>.</b>
        </h1>
        <span className='text-[#333333e3] dark:text-slate-50 font-black italic '>
          <b className='text-light-500 font-black text-2xl'>{'</ '}</b>FULLSTACK DEVELOPER
          <b className='text-light-500 font-black text-2xl'>{' >'}</b>
        </span>
        <p className=' 2xl:text-lg 2xl:w-full xl:text-base dark:text-slate-200 max-[520px]:text-[#3c3c3ccb] max-[520px]:w-[90%] text-sm font-semibold font-sans text-[#3b3b3b] w-[23em]'>
          {engLanguageActive
            ? `With 2 years of experience in web development, I have a profile that is more oriented towards the Frontend area. My goal is to continue growing as a developer and contribute to the success of an innovative team.`
            : 'Con 2 años de experiencia en el desarrollo web. Tengo un perfil con mayor orientación en el área Frontend. Mi objetivo es seguir creciendo como desarrollador y contribuir al éxito de un equipo innovador.'}
        </p>

        <DownloadBtn />
      </motion.article>
      <Avatar />
    </section>
  );
};

export default Hero;
