import { useStore } from '@/context/store';
import services from '@/utils/services.json';
import { TbBulb } from 'react-icons/tb';
import { PiGearBold } from 'react-icons/pi';
import { MdOutlineDevices } from 'react-icons/md';
import { BiSolidRocket } from 'react-icons/bi';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
      <h1 className='dark:text-zinc-50 text-4xl text-[#334155] font-bold text-center'>
        {engLanguageActive ? 'My Services.' : 'Mis Servicios.'}
      </h1>
      <div className=' mt-10 grid grid-cols-1 md:grid-cols-2 w-full gap-4 items-center'>
        {services.map((element, index) => (
          <motion.div
            transition={{
              duration: 0.5,
              delay: 0.25,
              staggerChildren: 2,
            }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            key={index}
            className='border-b-light-800 border-b-4 dark:border-b-dark-pink border dark:border-slate-700 h-40 w-[22em] rounded-md bg-white justify-self-center p-4 text-center flex flex-col justify-center gap-4 px-6 relative dark:bg-dark-main'>
            <span className='dark:text-dark-sky text-light-500 text-4xl absolute top-2 left-2'>
              {renderIcon(element.icon)}
            </span>
            <h2 className='dark:text-dark-sky font-bold text-light-500 text-xl'>
              {engLanguageActive ? element.titleEN : element.titleES}
            </h2>
            <p className='dark:text-slate-50 text-[#333333e3] text-left text-sm font-medium'>
              {engLanguageActive
                ? element.descriptionEN
                : element.descriptionES}
            </p>
          </motion.div>
        ))}
      </div>
      <div className='flex flex-col items-center justify-center w-full px-16 gap-4 translate-y-8'>
        <p className='dark:text-slate-50 text-xl font-bold text-[#333333be] text-center'>
          {engLanguageActive
            ? 'Bring your brand to life! Let’s create something amazing together.'
            : '¡Dale vida a tu marca! Hagamos algo increíble juntos.'}
        </p>
        <Link
          className='bg-light-500 p-3 text-slate-50 rounded-md text-xs font-bold hover:bg-light-400 duration-200 hover:duration-200 active:scale-95 dark:bg-dark-sky'
          href={'/contact'}
          aria-label='contact-link'>
          {engLanguageActive ? 'Get in Touch' : 'Contáctame'}
        </Link>
      </div>
    </section>
  );
};

export default Services;
