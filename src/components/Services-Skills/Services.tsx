import { useStore } from '@/context/store';
import { Roboto } from 'next/font/google';

import Mobile from './Mobile';
import Desktop from './Desktop';
import Skills from './Skills';

const roboto = Roboto({
  weight: ['900'],
  subsets: ['latin'],
});

const Services = () => {
  const { engLanguageActive } = useStore();
  return (
    <section
      id='services-section'
      className='dark:[background:linear-gradient(to_bottom,#313643,#302b63,#313643)] mt-32 w-[100%] bg-gradient-to-b from-[#dedede] via-light-200 to-[#dedede] flex flex-col justify-center items-center'>
      <h1
        className='dark:text-zinc-50 px-4 text-4xl min-[500px]:[letter-spacing:10px] text-[#334155] text-center'
        style={roboto.style}>
        {engLanguageActive ? 'SKILLS & SERVICES' : 'HABILIDADES Y SERVICIOS '}🤓
      </h1>
      <div className='py-28 w-full h-full'>
        <h1 className='dark:text-theme_dark-sup-pink max-[500px]:[font-size:1.8em] [font-size:2.5em] px-4 text-center mb-44 font-bold text-light-400'>
          {engLanguageActive
            ? 'What can I offer for you? ...'
            : '¿Qué puedo ofrecerte? ...'}
          <span className='dark:text-zinc-400 max-[500px]:text-lg italic text-2xl text-[#333333cb] font-light'>
            {' '}
            {engLanguageActive
              ? 'let me show you some of my services.'
              : 'Permíteme mostrarte algunos de mis servicios.'}
          </span>
        </h1>
        <Mobile />
        <Desktop />
      </div>
      <Skills />
    </section>
  );
};

export default Services;
