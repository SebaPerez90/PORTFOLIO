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
      className='mt-20 w-[80%] flex flex-col justify-around items-center'>
      <h1
        className='text-center text-3xl [letter-spacing:15px] text-[#313131] '
        style={roboto.style}>
        {engLanguageActive ? 'ABOUT ME' : 'SOBRE MI'}
      </h1>

      <div className='flex justify-center items-center bg-light-200 w-full py-16 mt-8 rounded-[0.375em_0.375em_0_0]'>
        <div className='gap-8 shadow-[14px_30px_20px_-10px_#0000004f] rounded-md px-6 py-10 flex flex-col justify-evenly  items-center h-96 w-max bg-white'>
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
        <div className='relative flex flex-col items-center justify-center'>
          <Image
            src={developer_cartoon}
            alt='eveloper_cartoon_img'
            priority
            className='[filter:drop-shadow(0_0_1px_#000)] h-96 w-max order-1'
          />
          <span className='w-1/2 h-4 rounded-[50%] bg-[#00000049] absolute bottom-6 order-2'></span>
        </div>
      </div>

      <article className=' pt-4 pb-12 gap-4 flex flex-col justify-center shadow-[14px_30px_20px_-10px_#0000004f] rounded-[0_0_0.375em_0.375em] bg-white'>
        <div className='flex justify-between'>
          <div className='rounded-[50%] h-[13em] w-[13em] overflow-hidden ml-8'>
            <Image
              src={avatar_profile}
              alt='avatar_profile'
              className='rounded-[50%] w-full h-full object-cover bg-black'
              priority
            />
          </div>
          <div className='flex flex-col justify-evenly w-3/4 text-sm font-semibold text-[#33333391]'>
            <h1 className='text-center text-2xl text-[#333333bc] font-extrabold'>
              {engLanguageActive
                ? 'Hello There! Soy sebastian 👋'
                : '¡Hola! Soy Sebastian 👋'}
            </h1>
            <p className='px-10'>
              {engLanguageActive
                ? "I'm a self-taught systems student. I prefer front-end development, but I also have knowledge in back-end. I acknowledge that I'm behind on projects reflecting back-end experience, but they'll come 😅"
                : 'Soy un estudiante autodidacta de sistemas.Tengo preferencia por el desarrollo front-end, lo cual no quita que también tenga conocimientos del área back-end. Sé que estoy en deuda con los proyectos que reflejen la experiencia en el back, pero ya van a llegar 😅'}
            </p>
          </div>
        </div>
        <hr className='border-[1px] border-light-200 mx-12' />
        <div className='flex flex-col gap-4  pl-12 pr-6 text-sm font-semibold text-[#33333391]'>
          <h2 className='text-center text-2xl text-[#333333bc] font-extrabold'>
            {engLanguageActive ? 'Expectations' : 'Expectativas'}
          </h2>
          <p>
            {engLanguageActive
              ? 'My main goal is to enter the professional world, leveraging fundamental qualities like determination and perseverance to adapt to any team. I have no specific salary expectations as I believe adequate compensation should follow exemplary performance. Thus, my aim is to continuously build knowledge to enhance my professional development.'
              : 'Mi objetivo principal es ingresar al mundo profesional, aprovechando cualidades fundamentales como la determinación y la perseverancia para adaptarme a cualquier equipo. No tengo expectativas salariales específicas ya que creo que la remuneración adecuada debe seguir un desempeño ejemplar. Por lo tanto, mi objetivo es continuar construyendo conocimientos para mejorar mi desarrollo profesional.'}
          </p>
          <p>
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
