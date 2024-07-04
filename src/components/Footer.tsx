import Social from './Landing/Social';
import { FaLocationDot } from 'react-icons/fa6';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import { useStore } from '@/context/store';
import contact from '@/utils/contact.json';

const Footer = () => {
  const { engLanguageActive } = useStore();
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
    <footer className='dark:bg-theme_dark-main-bg bg-[#fbfbfb] h-auto gap-16 pb-2 pt-16 w-full flex justify-between flex-col items-center'>
      <div className='flex flex-col items-center gap-12 relative before:absolute before:-bottom-8 before:left-0 before:w-full before:h-[1px] before:bg-light-500/60 dark:before:bg-theme_dark-sup-pink'>
        <h1 className='font-bold text-xl text-center border-b-4 border-light-500/60 dark:border-theme_dark-sup-pink p-3 w-max m-[0_auto] dark:text-slate-50'>
          {engLanguageActive ? 'How to contact me :' : 'Como contactarme :'}
        </h1>
        <ul className='pb-8 flex flex-col md:flex-row gap-10 mt-4 dark:text-slate-50'>
          {contact.map((element, index) => (
            <li
              key={index}
              className='flex items-center gap-2'>
              <span className='text-light-500 dark:text-theme_dark-sup-pink text-xl'>
                {renderIcon(element.icon)}
              </span>
              <div className='flex flex-col'>
                <span className='font-bold text-base'>
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
