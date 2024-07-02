import Social from './Landing/Social';
import { FaLocationDot } from 'react-icons/fa6';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import { useStore } from '@/context/store';
import contact from '@/utils/contact.json';

const Footerr = () => {
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
    <footer className='bg-white h-auto gap-16 pb-2 pt-12 w-full flex justify-between flex-col items-center'>
      <div className='relative before:absolute before:-bottom-8 before:left-0 before:w-full before:h-[1px] before:bg-light-500/30'>
        <h1 className='font-bold text-xl text-center bg-light-500 p-3 w-max m-[0_auto] text-slate-50 rounded-md'>
          {engLanguageActive ? 'How to contact me :' : 'Como contactarme :'}
        </h1>
        <ul className='flex gap-8 mt-4'>
          {contact.map((element, index) => (
            <li
              key={index}
              className='flex items-center gap-2'>
              <span className='text-light-500 text-xl'>
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
      <span className='font-semibold text-sm text-black'>
        ©Sebastian Perez | 2024
      </span>
    </footer>
  );
};

export default Footerr;
