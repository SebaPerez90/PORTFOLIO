import { useState } from 'react';
import { useStore } from '@/store';
import CopyEmailBtn from '@/components/services&skills/CopyEmailBtn';

import Image from 'next/image';
import lg_icon from '@/assets/images/lg-icon.webp';
import devs_team from '@/assets/images/devs-team.png';
import github from '@/assets/images/github.webp';
import linkedin from '@/assets/images/linkedin.webp';

import { FaPowerOff } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';

const Desktop = () => {
  const { engLanguageActive } = useStore();

  const [currentLayout, setCurrentLayout] = useState('github-layout');

  //CATCH THE CURRENT "LAYOUT" ID
  const changeLayout = (e: any) => {
    setCurrentLayout(e.target.id);
  };

  return (
    <div className='max-[1216px]:mt-44 mt-28 w-full grid grid-cols-3 grid-rows-[repeat(2,min-max(100px,auto))] gap-y-[9em] relative lg:w-[80%] m-[0_auto]'>
      <div className='max-[1216px]:flex-col-reverse items-center gap-8 w-full flex justify-around flex-wrap row-span-2 col-span-full flex-row-reverse'>
        <div className='relative duration-300 flex flex-col justify-center items-center'>
          <div className='max-[500px]:border-[1em] max-[500px]:h-[12em] max-[500px]:w-[22em] h-[19em] w-[28em] rounded-[0.5em_0.5em_0_0] bg-white border-[1.5em] dark:border-[#292529] border-[#2d2d2d] border-b-0'>
            <div className='w-full bg-slate-500 flex items-center '>
              <button
                id='linkedin-layout'
                onClick={changeLayout}
                aria-label='linkedin-layout'
                className='mt-[0.15rem] ml-[0.15rem] flex items-center py-[0.15rem] px-1 rounded-[0.5em_0.5em_0_0] bg-slate-800 gap-1 text-white text-[0.6rem]'>
                <FaGithub />
                LinkedIn
              </button>
              <button
                id='github-layout'
                onClick={changeLayout}
                aria-label='github-layout'
                className='mt-[0.15rem] ml-[0.15rem] flex items-center py-[0.15rem] px-1 rounded-[0.5em_0.5em_0_0] bg-slate-800 gap-1 text-white text-[0.6rem]'>
                <FaLinkedin />
                Github
              </button>
            </div>
            <div className='w-full h-full '>
              <Image
                src={currentLayout === 'github-layout' ? linkedin : github}
                alt='social-network-image'
                className='object-cover w-auto h-[93%] max-[500px]:w-full max-[500px]:h-full'
                priority
              />
            </div>
          </div>
          <div className='max-[500px]:w-[22em] flex items-center relative h-8 w-[28em] rounded-[0_0_0.5em_0.5em] dark:bg-[#292529] bg-[#2d2d2d]'>
            <div className='absolute left-[45%] text-sm text-white font-black flex items-center gap-1'>
              <Image src={lg_icon} alt='lg_icon' width={16} height={16} />
              <span>LG</span>
            </div>
            <FaPowerOff className='absolute right-8 text-white text-lg' />
          </div>
          <div className='h-8 w-8 dark:bg-[#292529] bg-[#2d2d2d]'></div>
          <div className='max-[500px]:w-[10em] h-4 w-[15em] dark:bg-[#292529] bg-[#2d2d2d] rounded-[0.5em_0.5em_0_0]'></div>
        </div>

        <article className='max-[1216px]:w-[80%] w-1/2 flex flex-col items-center justify-center gap-6'>
          <h1 className='dark:text-zinc-50 text-3xl font-black text-[#333333] text-center'>
            {engLanguageActive
              ? `Applications and landing pages`
              : 'Aplicaciones y Landing pages'}
          </h1>
          <div className='flex flex-col dark:bg-transparent dark:border-none dark:text-theme_dark-sup-sky text-sm font-medium text-[#334155] border-l-[12px] border-light-800 bg-[#ececec51] pl-4 pr-2 py-6'>
            <p>
              {engLanguageActive
                ? `Hello! Looking to take your business to the next level online? You're in the right place! I'm a frontend web developer specialized in creating landing pages, websites, and desktop applications that propel your business forward. I turn your ideas into tangible, visually stunning results that captivate your users.`
                : '¡Hola! ¿Quieres llevar tu negocio al siguiente nivel en línea? ¡Estás en el lugar indicado! Soy un desarrollador web frontend especializado en crear landing pages, páginas web y aplicaciones de escritorio que impulsan tu negocio. Convertí tus ideas en resultados tangibles y visualmente impactantes que cautiven a tus usuarios.'}
            </p>
            <p className='mt-3'>
              {engLanguageActive
                ? `Ready to take the digital leap? Let's talk and bring your ideas to life together!`
                : '¿Listo para dar el salto digital? ¡Hablemos y hagamos realidad tus ideas juntos! '}
              🚀
            </p>
            <CopyEmailBtn />
          </div>
        </article>
      </div>

      <div className='flex flex-col max-[500px]:w-[90%] max-[825px]:w-[80%] w-[60%] m-[0_auto] rounded-md row-span-3 col-span-full pb-8 dark:bg-theme_dark-box-second bg-[#ececec4f] [backdrop-filter:blur(30px)]'>
        <Image
          src={devs_team}
          alt='devs_team_image'
          priority
          className='w-auto h-auto '
        />
        <article className='px-6 flex flex-col'>
          <h1 className='dark:text-theme_dark-sup-pink text-xl sm:text-3xl text-center font-extrabold text-[#333333]'>
            {engLanguageActive
              ? 'FRONTEND DEVELOPER'
              : `DESARROLLADOR FRONTEND`}{' '}
            🤩
          </h1>
          <p className='dark:text-zinc-50 px-2 text-[0.85em] mt-4 font-medium text-[#334155]'>
            {engLanguageActive
              ? `I'm a versatile web developer, experienced in both frontend and backend. My goal is to enhance your project with my skills and expertise. Let's talk and see how I can contribute to your team's success.`
              : 'Soy un desarrollador web versátil, con experiencia tanto en el frontend como en el backend. Mi objetivo es potenciar tu proyecto con mis habilidades y experiencia. Hablemos y veamos cómo puedo contribuir al éxito de tu equipo.'}
          </p>
          <CopyEmailBtn />
        </article>
      </div>
    </div>
  );
};

export default Desktop;
