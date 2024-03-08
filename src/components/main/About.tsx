import { Roboto } from 'next/font/google';
import Image from 'next/image';
import avatar_profile from '@/assets/images/avatar.webp';
import developer_cartoon from '@/assets/images/developer-cartoon.webp';

import { useStore } from '@/store';
import Link from 'next/link';

const roboto = Roboto({
  weight: ['900'],
  subsets: ['latin'],
});

const About = () => {
  const { engLanguageActive } = useStore();
  return (
    <section
      id='about-section'
      className='mt-20 xl:w-[80%] lg:w-[90%] flex flex-col justify-around items-center'>
      <h1
        className='text-center text-3xl min-[500px]:[letter-spacing:15px] text-[#313131be]'
        style={roboto.style}>
        {engLanguageActive ? 'ABOUT ME' : 'SOBRE MI'} 🤠
      </h1>

      <div className='px-0 sm:pl-10 lg:pl-0 flex justify-center items-center bg-light-200 w-full py-16 mt-8 md:rounded-[0.375em_0.375em_0_0]'>
        <div className='max-[420px]:scale-90 sm:w-full z-20 sm:bg-[#ffffffc6] [backdrop-filter:blur(10px)] gap-8 shadow-[14px_30px_20px_-10px_#0000004f] rounded-md px-6 py-10 flex flex-col ustify-evenly items-center h-96 md:w-max bg-white'>
          <h2 className='text-[0.8em] text-[#333333bc] [letter-spacing:5px] font-extrabold'>
            {engLanguageActive
              ? 'PERSONAL INFORMATION'
              : 'INFORMACION PERSONAL'}
          </h2>
          <ul className='flex flex-col gap-2 self-start text-sm cursor-default font-semibold text-[#33333391]'>
            <li className='flex items-center gap-2'>
              {engLanguageActive ? 'Full Name' : 'Nombre Completo'}:
              <span className='font-normal'>Sebastian Perez</span>
            </li>
            <li className='flex items-center gap-2'>
              {engLanguageActive ? 'Birthdate' : 'Fecha Nacimiento'}:
              <span className='font-normal'>05/10/1990</span>
            </li>
            <li className='flex items-center gap-2'>
              {engLanguageActive ? 'Adrress' : 'Dirección'}:
              <span className='font-normal'>Buenos Aires, Berazategui</span>
            </li>
            <li className='flex items-center gap-2'>
              {engLanguageActive ? 'Availability' : 'Disponibilidad'}:
              <span className='font-normal'>
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
                className='[letter-spacing:-1px] text-light-200 hover:text-light-100 hover:duration-200 duration-200'
                href={'https://www.linkedin.com/in/sebaperez90/'}
                target='_blank'>
                https://www.linkedin.com/in/sebaperez90
              </Link>
            </li>
            <li className='flex items-center gap-2'>
              Github:{' '}
              <Link
                className='[letter-spacing:-1px] text-light-200 hover:text-light-100 hover:duration-200 duration-200'
                href={'https://github.com/SebaPerez90'}
                target='_blank'>
                https://github.com/SebaPerez90
              </Link>
            </li>
          </ul>
        </div>

        <div className='[display:none] max-[800px]:w-full bg-none z-10 sm:flex flex-col items-center justify-center'>
          <Image
            src={developer_cartoon}
            alt='eveloper_cartoon_img'
            priority
            className='max-[800px]:absolute max-[800px]:right-[-4em] max-[800px]:h-auto max-[800px]:w-auto [filter:drop-shadow(0_0_1px_#000)] h-96 w-full order-1'
          />
          <span className='w-1/2 h-4 rounded-[50%] bg-[#00000049] absolute bottom-6 order-2'></span>
        </div>
      </div>

      <article className='gap-16 pt-12 pb-16 flex flex-col justify-center shadow-[14px_30px_20px_-10px_#0000004f] md:rounded-[0_0_0.375em_0.375em] bg-white'>
        <div className='flex justify-between'>
          <div className='max-[500px]:[display:none] rounded-[50%] h-[11em] w-[11em]  md:h-[14em] md:w-[14em] xl:h-[17em] xl:w-[17em] overflow-hidden ml-8 translate-x-1 md:translate-x-14'>
            <Image
              src={avatar_profile}
              alt='avatar_profile'
              className='rounded-[50%] w-full h-full object-cover bg-black'
              priority
            />
          </div>
          <div className='gap-4 md:gap-0 flex flex-col items-center justify-evenly w-3/4 max-[500px]:w-full'>
            <h1 className='text-2xl text-[#333333bc] font-extrabold max-[500px]:translate-x-2'>
              {engLanguageActive
                ? 'Hello There! Soy sebastian 👋'
                : '¡Hola! Soy Sebastian 👋'}
            </h1>
            <p className='w-[70%] text-sm font-semibold text-[#33333391]'>
              {engLanguageActive
                ? `I'm a self-taught student currently enrolled in the "Soy Henry" bootcamp. While I primarily focus on front-end development, I also possess knowledge and skills that allow me to work in backend areas. I know I owe some projects showcasing backend experience, but they're on their way 😅.`
                : 'Soy un estudiante autodidacta actualmente cursando el bootcamp de "Soy Henry". Tengo un mayor enfoque en el desarrollo front-end, pero también tengo conocimientos y herramientas que me pueden permitir trabajar en el área back-end. Sé que estoy en deuda con los proyectos que reflejen la experiencia en el back, pero ya van a llegar 😅'}
            </p>
          </div>
        </div>
        <hr className='border-[1px] border-light-300 mx-20' />
        <div className='flex flex-col gap-4 items-center pl-4 md:pl-12 md:pr-6 text-sm font-semibold text-[#33333391]'>
          <h2 className='text-2xl text-[#333333bc] font-extrabold translate-y-[-1em]'>
            {engLanguageActive ? 'Expectations' : 'Expectativas'} 🚀
          </h2>
          <p className='w-[80%] lg:w-[50em]'>
            {engLanguageActive
              ? `My main goal is to enter the professional job market, leveraging fundamental qualities such as determination and perseverance to adapt to any development team. I don't have specific salary expectations because I believe that appropriate compensation should be accompanied by exemplary performance. Therefore, my objective is to continue building knowledge to enhance my professional development.`
              : 'Mi objetivo principal es la inserción al mundo laboral profesional. Aprovechando cualidades fundamentales que poseo como la determinación y la perseverancia para adaptarme a cualquier equipo de desarrollo. No tengo expectativas salariales específicas ya que creo que la remuneración acorde, debe estar acompañada de un desempeño ejemplar. Por lo tanto, mi objetivo es continuar construyendo conocimientos para mejorar mi desarrollo profesional.'}
          </p>
          <p className='w-[80%] lg:w-[50em]'>
            {engLanguageActive
              ? "I also recognize the importance of formal education, so once I'm employed, I intend to continue my academic training."
              : 'También reconozco la importancia de la educación formal, por lo que una vez que esté trabajando, planeo continuar con mi formación académica.'}
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
