import { Roboto } from 'next/font/google';
import { useStore } from '@/context/store';

import Image from 'next/image';
import avatar_profile from '@/assets/images/avatar.webp';
import developer_cartoon from '@/assets/images/developer-cartoon.webp';

import Link from 'next/link';

import { motion } from 'framer-motion';

const roboto = Roboto({
  weight: ['900'],
  subsets: ['latin'],
});

const About = () => {
  const { engLanguageActive } = useStore();

  return (
    <section
      id='about-section'
      className=' mt-20 xl:w-[80%] lg:w-[90%] flex flex-col justify-around items-center'>
      <h1
        className='dark:text-white text-center text-5xl min-[500px]:[letter-spacing:15px] text-[#334155]'
        style={roboto.style}>
        {engLanguageActive ? 'ABOUT ME' : 'SOBRE MI'} 🤠
      </h1>

      <article className='dark:shadow-none dark:bg-theme_dark-main-bg px-0 sm:pl-10 lg:pl-0 flex justify-center items-center bg-light-200 w-full py-16 mt-8 md:rounded-[0.375em_0.375em_0_0]'>
        <motion.div
          transition={{ duration: 0.5 }}
          initial={{ translateX: '-15em', opacity: 0 }}
          whileInView={{ translateX: '0em', opacity: 1 }}
          className='dark:border dark:border-slate-500/30 dark:bg-theme_dark-box-prim max-[420px]:scale-90 sm:w-full z-20 bg-white sm:bg-[#ffffffc6] [backdrop-filter:blur(10px)] gap-8  rounded-md px-6 py-10 flex flex-col ustify-evenly items-center h-96 md:w-max md:bg-white'>
          <h2 className='dark:text-slate-50 text-xl text-center text-[#333333] [letter-spacing:2px] font-black'>
            {engLanguageActive
              ? 'PERSONAL INFORMATION'
              : 'INFORMACION PERSONAL'}
          </h2>
          <ul className='dark:text-zinc-300 flex flex-col gap-2 self-start text-sm cursor-default font-semibold text-[#333333]'>
            <li className='flex items-center gap-2'>
              {engLanguageActive ? 'Full Name' : 'Nombre Completo'}:
              <span className='font-medium'>Sebastian Perez</span>
            </li>
            <li className='flex items-center gap-2'>
              {engLanguageActive ? 'Birthdate' : 'Fecha Nacimiento'}:
              <span className='font-medium'>05/10/1990</span>
            </li>
            <li className='flex items-center gap-2'>
              {engLanguageActive ? 'Adrress' : 'Dirección'}:
              <span className='font-medium'>Buenos Aires, Berazategui</span>
            </li>
            <li className='flex items-center gap-2'>
              {engLanguageActive ? 'Availability' : 'Disponibilidad'}:
              <span className='font-medium'>
                {engLanguageActive
                  ? 'immediate/full-time'
                  : 'inmediata/full-time'}
              </span>
            </li>
            <li className='flex items-center gap-2'>
              {engLanguageActive ? 'Time Zone' : 'Zona Horaria'}:
              <span className='font-normal'>UTC-3</span>
            </li>
            <li className='flex items-center gap-2'>
              {engLanguageActive ? 'Nationality' : 'Nacionalidad'}:
              <span className='font-normal'>Argentino</span>
            </li>
            <li className='flex items-center gap-2'>
              Linkedin:{' '}
              <Link
                className='[letter-spacing:-1px] text-light-500 underline hover:text-light-100 hover:duration-200 duration-200'
                href={'https://www.linkedin.com/in/sebaperez90/'}
                target='_blank'>
                https://www.linkedin.com/in/sebaperez90
              </Link>
            </li>
            <li className='flex items-center gap-2'>
              Github:{' '}
              <Link
                className='[letter-spacing:-1px] text-light-500 underline hover:text-light-100 hover:duration-200 duration-200'
                href={'https://github.com/SebaPerez90'}
                target='_blank'>
                https://github.com/SebaPerez90
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className='order-1 min-[800px]:relative [display:none] max-[800px]:w-full bg-none z-10 sm:flex flex-col items-center justify-center'>
          <Image
            src={developer_cartoon}
            alt='eveloper_cartoon_img'
            loading='lazy'
            width={384}
            height={384}
            className='max-[800px]:absolute max-[800px]:right-[-4em] max-[800px]:h-auto max-[800px]:w-auto [filter:drop-shadow(0_0_1px_#000)] h-96 w-full order-1'
          />
          <span className='max-[800px]:[display:none] w-[65%] h-5 rounded-[50%] dark:bg-alternative-100 bg-[#00000065] absolute bottom-5 order-2'></span>
        </motion.div>
      </article>

      <article className='dark:bg-theme_dark-main-bg gap-16 pt-12 pb-16 flex flex-col justify-center shadow-[14px_30px_20px_-10px_#0000004f] md:rounded-[0_0_0.375em_0.375em] bg-white'>
        <div className='flex justify-between'>
          <div className='max-[500px]:[display:none] rounded-[50%] h-[11em] w-[11em]  md:h-[14em] md:w-[14em] xl:h-[17em] xl:w-[17em] overflow-hidden ml-8 translate-x-1 md:translate-x-14'>
            <Image
              src={avatar_profile}
              alt='avatar_profile'
              className='rounded-[50%] w-full h-full object-cover bg-black dark:bg-zinc-200'
              priority
            />
          </div>
          <div className='max-[477px]:text-center max-[477px]:w-full gap-4 md:gap-0 flex flex-col items-center justify-evenly w-3/4 max-[500px]:w-full'>
            <h1 className=' dark:text-slate-50 text-4xl text-[#333333] font-extrabold max-[500px]:translate-x-2'>
              {engLanguageActive
                ? 'Hello There! Soy Sebastian 👋'
                : '¡Hola! Soy Sebastian 👋'}
            </h1>
            <p className=' dark:text-zinc-300 w-[70%] text-sm font-semibold text-[#333333]'>
              {engLanguageActive
                ? `I'm a self-taught student currently enrolled in the "Soy Henry" bootcamp. While I primarily focus on front-end development, I also possess knowledge and skills that allow me to work in backend areas.`
                : 'Soy un estudiante autodidacta actualmente cursando el bootcamp de "Soy Henry". Tengo un mayor enfoque en el desarrollo front-end, pero también tengo conocimientos y herramientas que me pueden permitir trabajar en el área back-end.'}
            </p>
          </div>
        </div>
        <hr className='border-[1px] border-light-300 mx-20' />
        <motion.div
          transition={{ duration: 0.6 }}
          initial={{ translateY: '5em', opacity: 0 }}
          whileInView={{ translateY: '0em', opacity: 1 }}
          className='flex flex-col gap-2 items-center pl-4 md:pl-12 md:pr-6 text-sm font-semibold text-[#333333]'>
          <h2 className='dark:text-slate-50 text-5xl text-[#333333] font-extrabold translate-y-[-0.5em]'>
            {engLanguageActive ? 'Expectations' : 'Expectativas'} 🚀
          </h2>
          <p className='dark:text-zinc-300 w-[80%] lg:w-[50em]'>
            {engLanguageActive
              ? `My main goal is to enter the professional job market, leveraging fundamental qualities such as determination and perseverance to adapt to any development team. I don't have specific salary expectations because I believe that appropriate compensation should be accompanied by exemplary performance. Therefore, my objective is to continue building knowledge to enhance my professional development.`
              : 'Mi objetivo principal es la inserción al mundo laboral profesional. Aprovechando cualidades fundamentales que poseo como la determinación y la perseverancia para adaptarme a cualquier equipo de desarrollo. No tengo expectativas salariales específicas ya que creo que la remuneración acorde, debe estar acompañada de un desempeño ejemplar. Por lo tanto, mi objetivo es continuar construyendo conocimientos para mejorar mi desarrollo profesional.'}
          </p>
          <p className='dark:text-zinc-300 w-[80%] lg:w-[50em]'>
            {engLanguageActive
              ? "I also recognize the importance of formal education, so once I'm employed, I intend to continue my academic training."
              : 'También reconozco la importancia de la educación formal, por lo que una vez que esté trabajando, planeo continuar con mi formación académica.'}
          </p>
        </motion.div>
      </article>
    </section>
  );
};

export default About;
