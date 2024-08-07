import Social from './Landing/Social';
import { FaLocationDot } from 'react-icons/fa6';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import { useStore } from '@/context/store';
import contact from '@/utils/contact.json';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const Footer = () => {
  const { engLanguageActive } = useStore();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/about') {
      document
        .getElementById('footer-section')
        ?.classList.add('dark:bg-[#0f172a]', 'bg-white');
    }
  }, [pathname]);

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'location':
        return <FaLocationDot />;
      case 'email':
        return <HiOutlineMailOpen />;
      case 'phone':
        return <FaPhoneAlt />;
    }
  };

  return (
    <footer
      id='footer-section'
      className='dark:bg-dark-secondary bg-[#f6f6f7] h-auto gap-16 pb-2 pt-16 w-full flex justify-between flex-col items-center'>
      <div className='flex flex-col items-center gap-12 relative before:absolute before:-bottom-5 before:left-0 before:w-full before:h-[1px] before:bg-light-500/50 dark:before:bg-dark-pink'>
        <h1 className='font-bold text-3xl text-center text-black/70 w-max m-[0_auto] dark:text-slate-50'>
          {engLanguageActive ? 'How to contact me' : 'Como contactarme'}
        </h1>
        <ul className='pb-8 flex flex-col md:flex-row gap-10 mt-4 dark:text-slate-50'>
          {contact.map((element, index) => (
            <li
              key={index}
              className='flex items-center gap-2'>
              <span className='text-light-500/85 dark:text-dark-pink text-xl'>
                {renderIcon(element.icon)}
              </span>
              <div className='flex flex-col'>
                <span className='font-bold text-light-500/85 text-lg dark:text-dark-pink'>
                  {engLanguageActive ? element.contactENG : element.contactESP}
                </span>
                <span className='font-normal text-sm '>{element.content}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Social />
      <span className='dark:text-slate-50 font-semibold text-sm text-black'>
        ©Sebastian Perez | 2024
      </span>
    </footer>
  );
};

export default Footer;
