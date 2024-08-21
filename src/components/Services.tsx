import { useStore } from '@/context/store';
import services from '@/utils/services.json';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import contact_me from '@/assets/svgs/message-me.svg';

const Services = () => {
  const { engLanguageActive } = useStore();

  return (
    <section
      id='services-section'
      className='flex flex-col items-center gap-20 w-full py-40'>
      <h1 className='dark:text-zinc-50 text-4xl text-[#334155] font-bold'>
        {engLanguageActive ? 'My Services.' : 'Mis Servicios.'}
      </h1>
      <div className='[grid-template-columns:repeat(1,fit-content(350px))] sm:[grid-template-columns:repeat(3,fit-content(350px))] grid gap-10 px-8'>
        {services.map((element, index) => (
          <motion.div
            transition={{
              duration: 0.5,
              delay: 0.25,
              staggerChildren: 2,
            }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            key={index}
            className=' bg-[#f6f6f7] dark:bg-dark-secondary flex flex-col items-start rounded-md py-6 gap-2 pl-6 pr-4'>
            <span className='dark:text-dark-sky text-light-500/85 text-4xl font-extrabold'>
              {element.icon}
            </span>
            <h2 className='dark:text-dark-sky text-light-500/85 text-2xl font-bold'>
              {engLanguageActive ? element.titleEN : element.titleES}
            </h2>
            <p className='dark:text-slate-50 text-[#333333b0] text-left text-lg md:text-base'>
              {engLanguageActive
                ? element.descriptionEN
                : element.descriptionES}
            </p>
          </motion.div>
        ))}
      </div>
      <div className='flex  max-[450px]:items-center max-[450px]:flex-col flex-row justify-center gap-2 sm:gap-20 h-[25rem] sm:h-[22rem] w-[90%]'>
        <div className='w-[22rem] h-[22rem] rounded-md relative before:absolute before:left-14 before:bottom-[-0.3em] before:w-[15em] before:h-[4px] before:rounded-[50%] before:bg-black/40 dark:before:bg-black before:[filter:blur(3px)]'>
          <Image
            src={contact_me}
            alt='contact-me-img'
            className='w-full h-full object-cover (dark:[filter:contrast(0.7)]) dark:[filter:brightness(1.1)] z-20'
          />
        </div>
        <div className='flex flex-col justify-between gap-6 sm:gap-0 w-[30ch] h-full'>
          <div className=' flex flex-col items-center h-full justify-evenly pt-6'>
            <h2 className='dark:text-slate-50 text-slate-700 text-balance font-bold text-3xl'>
              {engLanguageActive
                ? 'How can I help you?'
                : '¿Cómo puedo ayudarte?'}
            </h2>
            <p className='text-slate-500 dark:text-slate-300 text-lg sm:text-base'>
              {engLanguageActive
                ? 'Send me a message describing your needs so I can advise you in the best possible way.'
                : 'Enviame un mensaje contadome tu necesidad para asesorarte de la mejor manera.'}
              <br></br>
              {engLanguageActive
                ? 'Bring your brand to life with my help!'
                : 'Dale vida tu marca con mi ayuda!'}
            </p>
          </div>
          <Link
            className='bg-light-500 p-3 text-center text-slate-50 rounded-md font-bold hover:bg-light-500/80 duration-200 hover:duration-200 active:scale-95 dark:bg-dark-sky dark:hover:bg-dark-sky/70 dark:hover:duration-200'
            href={'/contact'}
            aria-label='contact-link'>
            {engLanguageActive ? 'Get in Touch' : 'Contáctame'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
