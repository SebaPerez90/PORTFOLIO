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
        className='text-center text-3xl [letter-spacing:15px] text-[#313131be]'
        style={roboto.style}>
        {engLanguageActive ? 'ABOUT ME' : 'SOBRE MI'}
      </h1>

      <div className='pl-0 md:pl-10 lg:pl-0 flex justify-center items-center bg-[#333333ee] md:bg-light-200 w-full py-16 mt-8 md:rounded-[0.375em_0.375em_0_0]'>
        <div className='z-30 gap-10 md:gap-8 shadow-none md:shadow-[14px_30px_20px_-10px_#0000004f] rounded-md px-6 py-10 flex flex-col justify-around md:justify-evenly items-center h-96 w-max bg-none md:bg-white'>
          <h2 className='max-[430px]:[letter-spacing:1px] text-balance max-[430px]:text-lg text-xl md:text-[0.8em] text-white md:text-[#333333bc] [letter-spacing:5px] font-extrabold'>
            {engLanguageActive
              ? 'PERSONAL INFORMATION'
              : 'INFORMACION PERSONAL'}
          </h2>
          <ul className='max-[430px]:text-xs flex flex-col gap-3 md:gap-2 self-start text-sm cursor-default font-light md:font-semibold text-white md:text-[#33333391]'>
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
                className='md:[letter-spacing:-1px] text-light-200 hover:text-light-100 hover:duration-200 duration-200'
                href={'https://www.linkedin.com/in/sebaperez90/'}
                target='_blank'>
                https://www.linkedin.com/in/sebaperez90
              </Link>
            </li>
            <li className='flex items-center gap-2'>
              Github:{' '}
              <Link
                className='md:[letter-spacing:-1px] text-light-200 hover:text-light-100 hover:duration-200 duration-200'
                href={'https://github.com/SebaPerez90'}
                target='_blank'>
                https://github.com/SebaPerez90
              </Link>
            </li>
          </ul>
        </div>

        <div className='bg-none z-10 md:bg-transparent min-w-[375px] absolute md:relative flex flex-col items-center justify-center'>
          <Image
            src={developer_cartoon}
            alt='eveloper_cartoon_img'
            priority
            className='opacity-[.15] md:opacity-100 [filter:drop-shadow(0_0_1px_#000)] h-96 w-max order-1'
          />
          <span className='w-0 md:w-1/2 h-4 rounded-[50%] bg-[#00000049] absolute bottom-6 order-2'></span>
        </div>
      </div>

      <article className='max-[500px]:gap-16 pt-12 pb-16 gap-4 flex flex-col justify-center shadow-[14px_30px_20px_-10px_#0000004f] md:rounded-[0_0_0.375em_0.375em] bg-white'>
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
            <h1 className='text-2xl text-[#333333bc] font-extrabold'>
              {engLanguageActive
                ? 'Hello There! Soy sebastian 👋'
                : '¡Hola! Soy Sebastian 👋'}
            </h1>
            <p className='w-[70%] text-sm font-semibold text-[#33333391]'>
              {engLanguageActive
                ? "I'm a self-taught systems student. I prefer front-end development, but I also have knowledge in back-end. I acknowledge that I'm behind on projects reflecting back-end experience, but they'll come 😅"
                : 'Soy un estudiante autodidacta de sistemas.Tengo preferencia por el desarrollo front-end, lo cual no quita que también tenga conocimientos del área back-end. Sé que estoy en deuda con los proyectos que reflejen la experiencia en el back, pero ya van a llegar 😅'}
            </p>
          </div>
        </div>
        <hr className='border-[1px] border-light-300 mx-20' />
        <div className='flex flex-col gap-4 items-center pl-4 md:pl-12 md:pr-6 text-sm font-semibold text-[#33333391]'>
          <h2 className='text-2xl text-[#333333bc] font-extrabold'>
            {engLanguageActive ? 'Expectations' : 'Expectativas'}
          </h2>
          <p className='w-[80%] lg:w-[50em]'>
            {engLanguageActive
              ? 'My main goal is to enter the professional world, leveraging fundamental qualities like determination and perseverance to adapt to any team. I have no specific salary expectations as I believe adequate compensation should follow exemplary performance. Thus, my aim is to continuously build knowledge to enhance my professional development.'
              : 'Mi objetivo principal es ingresar al mundo profesional, aprovechando cualidades fundamentales como la determinación y la perseverancia para adaptarme a cualquier equipo. No tengo expectativas salariales específicas ya que creo que la remuneración adecuada debe seguir un desempeño ejemplar. Por lo tanto, mi objetivo es continuar construyendo conocimientos para mejorar mi desarrollo profesional.'}
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
