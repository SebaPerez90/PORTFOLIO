import { useStore } from '@/context/store';
import { Roboto } from 'next/font/google';
import services from '@/utils/services.json';

const roboto = Roboto({
  weight: ['900'],
  subsets: ['latin'],
});

const Services = () => {
  const { engLanguageActive } = useStore();
  return (
    <section
      id='services-section'
      className='flex flex-col items-center gap-20'>
      <h1
        className='dark:text-zinc-50 text-4xl text-[#334155] text-center'
        style={roboto.style}>
        {engLanguageActive ? 'My Services.' : 'Mis Servicios.'}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-2 items-center'>
        {services.map((element, index) => (
          <div
            key={index}
            className='border h-40 w-[22em] rounded-md bg-white justify-self-center p-4 text-center flex flex-col justify-center gap-4 px-6'>
            <h2 className='font-bold text-light-500 text-xl'>
              {engLanguageActive ? element.titleEN : element.titleES}
            </h2>
            <p className='text-[#333333e3] text-left text-sm font-medium'>
              {engLanguageActive
                ? element.descriptionEN
                : element.descriptionES}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
