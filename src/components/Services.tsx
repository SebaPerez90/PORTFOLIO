import { useStore } from '@/context/store';
import { Roboto } from 'next/font/google';
import services from '@/utils/services.json';
import { TbBulb } from 'react-icons/tb';
import { PiGearBold } from 'react-icons/pi';
import { MdOutlineDevices } from 'react-icons/md';
import { BiSolidRocket } from 'react-icons/bi';
import Link from 'next/link';

const roboto = Roboto({
  weight: ['900'],
  subsets: ['latin'],
});

const Services = () => {
  const { engLanguageActive } = useStore();

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'gear':
        return <PiGearBold />;
      case 'rocket':
        return <BiSolidRocket />;
      case 'bulb':
        return <TbBulb />;
      case 'devices':
        return <MdOutlineDevices />;
    }
  };

  return (
    <section
      id='services-section'
      className='flex flex-col items-center gap-10'>
      <h1
        className='dark:text-zinc-50 text-4xl text-[#334155] text-center'
        style={roboto.style}>
        {engLanguageActive ? 'My Services.' : 'Mis Servicios.'}
      </h1>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 w-full gap-2 items-center'>
        {services.map((element, index) => (
          <div
            key={index}
            className='border dark:border-slate-700 h-40 w-[22em] rounded-md bg-white justify-self-center p-4 text-center flex flex-col justify-center gap-4 px-6 relative dark:bg-theme_dark-main-bg'>
            <span className='dark:text-theme_dark-sup-sky text-light-500 text-4xl absolute top-2 left-2'>
              {renderIcon(element.icon)}
            </span>
            <h2 className='dark:text-theme_dark-sup-sky font-bold text-light-500 text-xl'>
              {engLanguageActive ? element.titleEN : element.titleES}
            </h2>
            <p className='dark:text-slate-50 text-[#333333e3] text-left text-sm font-medium'>
              {engLanguageActive
                ? element.descriptionEN
                : element.descriptionES}
            </p>
          </div>
        ))}
      </div>
      <div className='mt- flex flex-col items-center gap-3'>
        <p className='dark:text-slate-50 text-3xl font-semibold text-[#333333e3]'>
          {engLanguageActive
            ? 'Bring your brand to Life!'
            : 'Dale vida a tu marca!'}
        </p>
        <Link
          className='bg-light-500 p-3 text-slate-50 rounded-md text-xs font-bold hover:bg-light-400 duration-200 hover:duration-200 active:scale-95 dark:bg-theme_dark-sup-sky'
          href={'#contact-section'}
          aria-label='contact-link'>
          {engLanguageActive ? 'Get in Touch' : 'Contáctame'}
        </Link>
      </div>
    </section>
  );
};

export default Services;
