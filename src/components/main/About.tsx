import { Roboto } from 'next/font/google';

import { useStore } from '@/store';
import Link from 'next/link';

const roboto = Roboto({
  weight: ['900'],
  subsets: ['latin'],
});

const About = () => {
  const { engLanguageActive } = useStore();
  return (
    <section id='about-section' className='w-[80%]'>
      <h1
        className='text-center text-3xl [letter-spacing:15px] text-[#313131] '
        style={roboto.style}>
        {engLanguageActive ? 'ABOUT ME' : 'SOBRE MI'}
      </h1>
      <div className='gap-8 shadow-[14px_30px_20px_-10px_#0000004f] rounded-md px-6 py-10 flex flex-col justify-evenly  items-center h-96 w-max bg-white'>
        <h2 className='text-[0.8em] text-[#333333bc] [letter-spacing:5px] font-extrabold'>
          {engLanguageActive ? 'PERSONAL INFORMATION' : 'INFORMACION PERSONAL'}
        </h2>
        <ul className='flex flex-col gap-2 self-start text-sm cursor-defaul font-semibold text-[#33333391]'>
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
              className='[letter-spacing:-1px] text-light-200 hover:text-light-400 hover:duration-200 duration-200'
              href={'https://www.linkedin.com/in/sebaperez90/'}
              target='_blank'>
              https://www.linkedin.com/in/sebaperez90
            </Link>
          </li>
          <li className='flex items-center gap-2'>
            Github:{' '}
            <Link
              className='[letter-spacing:-1px] text-light-200 hover:text-light-400 hover:duration-200 duration-200'
              href={'https://github.com/SebaPerez90'}
              target='_blank'>
              https://github.com/SebaPerez90
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
