import 'swiper/css';
import 'swiper/css/pagination';
import projects from '@/utils/projects.json';
import { useStore } from '@/context/store';
import { Roboto } from 'next/font/google';
import { FaLink } from 'react-icons/fa6';
import { PiGithubLogoFill } from 'react-icons/pi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCircleExclamation } from 'react-icons/fa6';

const roboto = Roboto({
  weight: ['900'],
  subsets: ['latin'],
});

const Proyects = () => {
  const { engLanguageActive } = useStore();
  return (
    <section
      id='projects-section'
      className='flex flex-col items-center gap-24 '>
      <h1
        className=' dark:text-slate-50 text-4xl font-black text-[#334155] text-left'
        style={roboto.style}>
        {engLanguageActive ? 'Projects.' : 'Proyectos.'}
      </h1>
      <div className='flex-wrap flex flex-row justify-center w-[80%] gap-24'>
        {projects.map((element, index) => (
          <motion.div
            transition={{
              duration: 0.3,
              delay: 0.2,
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            key={index}
            className='flex p-10 bg-light-500/20 rounded-md flex-wrap-reverse items-center justify-center'>
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              className='swiper-container z-40 flex w-[22em] h-[18em] relative'
              slidesPerView={1}
              pagination={{
                type: 'bullets',
                clickable: true,
              }}
              autoplay={{ delay: 3000, pauseOnMouseEnter: true }}>
              {element.development_stage && (
                <span className='z-50  w-max text-center absolute bottom-0 left-[25%] font-semibold flex items-center justify-center gap-1 bg-yellow-300 rounded-md p-2 text-[#333333cd]'>
                  <FaCircleExclamation className='text-xl'/>
                  {engLanguageActive
                    ? 'Development Stage'
                    : 'Etapa de Desarrollo'}
                </span>
              )}
              {element.screen_shoots.map((element, index) => (
                <SwiperSlide
                  key={index}
                  className='px-5 carrousel-images'>
                  <Image
                    src={element}
                    width={500}
                    height={500}
                    alt='screen-shoot'
                    className='h-auto w-auto object-cover m-[3em_auto] cursor-grab active:cursor-grabbing'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div>
              <div className='flex flex-col gap-5 w-[25em] [min-height:20em] h-auto justify-evenly p-[1em_2em] rounded-md bg-white border border-slate-200 [box-shadow:7px_9px_9px_-3px_rgba(0,0,0,0.16)] dark:bg-theme_dark-main-bg dark:border-slate-700'>
                <div>
                  <h1 className='font-bold text-center text-xl dark:text-theme_dark-sup-sky'>
                    {element.title}
                  </h1>
                  <span className='flex justify-center gap-3 mt-4 flex-wrap'>
                    {element.skills.map((element, index) => (
                      <span
                        key={index}
                        className='border  font-bold text-xs rounded-md p-1 border-slate-600 text-[#404040ce] dark:text-slate-400 relative before:absolute before:w-[0.5em] before:h-[0.5em] before:-left-2 before:bottom-2 before:bg-light-800 before:rounded-full bg-slate-100 dark:bg-theme_dark-box-second before:animate-[disc-shining_800ms_ease-out_alternate-reverse_infinite]'>
                        {element}
                      </span>
                    ))}
                  </span>
                </div>
                <p className='font-medium text-[#2f2f2fe3] text-sm dark:text-slate-50'>
                  {engLanguageActive
                    ? element.descriptionEN
                    : element.descriptionES}
                </p>
                <div className='flex justify-center gap-12'>
                  <Link
                    className='bg-light-500 p-3 text-slate-50 rounded-md text-xs font-bold hover:bg-light-400 duration-200 hover:duration-200 active:scale-95 dark:bg-theme_dark-sup-sky flex items-center'
                    href={element.repository}
                    aria-label='code-link'>
                    <PiGithubLogoFill className='mr-1' />
                    {engLanguageActive ? 'Code' : 'Código'}
                  </Link>
                  <Link
                    className='bg-light-500 p-3 text-slate-50 rounded-md text-xs font-bold hover:bg-light-400 duration-200 hover:duration-200 active:scale-95 dark:bg-theme_dark-sup-sky flex items-center'
                    href={element.deploy}
                    aria-label='deploy-link'>
                    <FaLink className='mr-1' />
                    {engLanguageActive ? 'Deploy' : 'Demo'}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Proyects;
