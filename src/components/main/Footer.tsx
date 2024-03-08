'use client';

import { useStore } from '@/store';

import Link from 'next/link';
import Image from 'next/image';
import location_image from '@/assets/images/location.webp';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
  const { engLanguageActive } = useStore();

  return (
    <footer className='flex-wrap relative gap-20 flex justify-center items-end  bg-white w-full pt-12 pb-8'>
      <div className=' relative w-[30em] h-[20em] overflow-hidden rounded-xl before:animate-[location-animation2_1s_ease-out_alternate-reverse_infinite] before:w-8 before:h-2 before:rounded-[50%] before:absolute before:bottom-[5.3em] before:right-[6em] before:z-30 '>
        <span>
          <FaLocationDot className='animate-[location-animation_1s_ease-out_alternate-reverse_infinite] absolute bottom-[2.7em] right-[5.9rem] z-30 text-red-400 text-4xl [filter:saturate(3)]' />
        </span>
        <Image
          src={location_image}
          alt='location_image'
          priority
          className='w-full h-full object-cover z-10 relative'
        />
        <div className=' absolute bg-[#00000027] w-full h-full z-20 top-0 flex  items-center justify-center'>
          <address className='gap-1 flex items-center justify-center text-base w-max font-medium text-white border-2 p-4 bg-[#00000062] relative bottom-20'>
            <FaLocationDot className='text-red-400 [filter:saturate(3)]' />
            calle 1 nº 626, Berazategui, Buenos Aires
          </address>
        </div>
      </div>

      <div>
        <div className='flex flex-col items-center relative bottom-12'>
          <h1 className='font-extrabold text-4xl text-light-500'>Seba Perez</h1>
          <span className='text-[#4f4f4f] text-sm font-bold relative bottom-2 [letter-spacing:-1px]'>
            {'< Frontend Developer >'}
          </span>
          <p className='w-[30em] text-sm font-semibold text-[#4d4d4d] mt-2'>
            {engLanguageActive
              ? 'I really appreciate that you have reached this section of the portfolio. Any kind of feedback is useful to continue learning and improving.'
              : 'Agradezco mucho que hayas llegado hasta esta sección del portfolio. Cualquier tipo de feedback es útil para continuar aprendiendo y mejorando.'}
          </p>
        </div>
        <ul className='flex justify-center gap-8 font-black text-light-400'>
          <li className='hover:duration-100 hover:text-light-200 '>
            <Link
              href={'https://www.linkedin.com/in/sebaperez90/'}
              target='_blank'>
              Linkedin
            </Link>
          </li>
          <li className='hover:duration-100 hover:text-light-200 border-l-2 border-light-400 pl-4'>
            <Link href={'https://github.com/SebaPerez90'} target='_blank'>
              Github
            </Link>
          </li>
          <li className='hover:duration-100 hover:text-light-200 border-l-2 border-light-400 pl-4'>
            <Link href={''} target='_blank'>
              Facebook
            </Link>
          </li>
          <li className='hover:duration-100 hover:text-light-200 border-l-2 border-light-400 pl-4'>
            <Link href={'#home'}>Home</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
