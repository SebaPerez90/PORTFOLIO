import React, { useRef } from 'react';
import { useStore } from '@/store';

import Image from 'next/image';
import location from '@/assets/images/location.webp';

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
    <aside className='h-[28rem] rounded-[0_0.4em_0.4em_0] flex flex-col justify-around items-center bg-[#83A2FF] py-6 px-10'>
      <address className='gap-1 flex items-center p-2 w-max text-sm bg-white rounded-md'>
        <FaLocationDot className='text-red-500 text-xl ' />
        Buenos Aires, Berazategui
      </address>
      <div className='relative rounded-[50%] h-[20rem] w-[20rem] overflow-hidden'>
        <Image
          src={location}
          alt='location-image'
          priority
          className='object-cover h-full w-full'
        />
        <span className='absolute text-[#f00] scale-[2] bottom-[2.5em] z-20 right-[5em] after:absolute after:top-[0.6em] after:left-[0.26em] after:w-[8px] after:h-[100%] after:bg-[#1f1f1fc5] after:[clip-path:ellipse(50%_6%_at_50%_50%)]'>
          <FaLocationDot />
        </span>
      </div>
    </aside>
  );
};

export default ContactInfo;
