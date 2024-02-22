import React, { useRef } from 'react';
import { useStore } from '@/store';

import Image from 'next/image';
import location from '@/assets/images/location.png';

import { MdOutlineEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

const ContactInfo = () => {
  const { engLanguageActive, darkThemeActive } = useStore();

  const emailAddressRef = useRef<HTMLParagraphElement>(null);
  const infoMessajeRef = useRef<HTMLSpanElement>(null);

  const copyToClipboard = () => {
    if (emailAddressRef.current !== null && infoMessajeRef.current !== null) {
      const textToCopy = emailAddressRef.current.innerText;
      infoMessajeRef.current.style.opacity = '1';

      setTimeout(() => {
        infoMessajeRef.current
          ? (infoMessajeRef.current.style.opacity = '0')
          : null;
      }, 3000);

      navigator.clipboard.writeText(textToCopy);
    }
  };
  return (
    <aside className='h-[28rem] rounded-[0_0.4em_0.4em_0] flex flex-col justify-around bg-[#b784b7] py-4 px-10'>
      <h1 className='text-4xl font-bold text-white text-shadow text-center'>
        {engLanguageActive ? 'Contact Me' : 'Contactame'}
      </h1>

      <ul className='flex flex-col justify-start items-start gap-4 text-[#909090]'>
        <li className='gap-1 flex items-center text-sm bg-white py-1 px-2 rounded-md'>
          <FaLocationDot className='text-red-500 text-xl ' />
          Buenos Aires, Berazategui
        </li>

        <li
          onClick={copyToClipboard}
          className='z-10 relative hover:scale-105 hover:shadow-md hover:bg-[#8a638ab3] hover:text-white hover:duration-500 duration-500 cursor-pointer gap-1 flex items-center text-sm tracking-tighter bg-white py-1 px-2 rounded-md'>
          <MdOutlineEmail className='text-red-500 text-xl cursor-pointer' />
          <p ref={emailAddressRef}>sebastian.perez.jobs@gmail.com</p>

          <span
            ref={infoMessajeRef}
            className='cursor-default absolute left-16 w-max top-8 text-green-400 font-black opacity-0 border-2 bg-white p-[0.3em_1em] rounded-md shadow-lg'>
            {engLanguageActive ? 'coppied!' : 'copiado!'}
          </span>
        </li>
      </ul>

      <div className='relative'>
        <Image
          src={location}
          alt='location-image'
          priority
          className='rounded-[1.6em] h-[auto] w-[22rem]'
        />
        <span className='absolute text-[#f00] scale-[2] bottom-[2.5em] z-20 right-[5em] after:absolute after:top-[0.6em] after:left-[0.26em] after:w-[8px] after:h-[100%] after:bg-[#1f1f1fc5] after:[clip-path:ellipse(50%_6%_at_50%_50%)]'>
          <FaLocationDot />
        </span>
      </div>
    </aside>
  );
};

export default ContactInfo;
