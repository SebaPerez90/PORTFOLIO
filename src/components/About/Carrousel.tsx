'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useStore } from '@/context/store';
import { Roboto } from 'next/font/google';

const data = [
  {
    title: 'Service 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel neque vel justo convallis consectetur.',
    category: 'Category 1',
  },
  {
    title: 'Service 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel neque vel justo convallis consectetur.',
    category: 'Category 1',
  },
  {
    title: 'Service 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel neque vel justo convallis consectetur.',
    category: 'Category 1',
  },
  {
    title: 'Service 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel neque vel justo convallis consectetur.',
    category: 'Category 1',
  },
  {
    title: 'Service 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel neque vel justo convallis consectetur.',
    category: 'Category 1',
  },
  {
    title: 'Service 6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel neque vel justo convallis consectetur.',
    category: 'Category 1',
  },
  {
    title: 'Service 7',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel neque vel justo convallis consectetur.',
    category: 'Category 1',
  },
  {
    title: 'Service 8',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel neque vel justo convallis consectetur.',
    category: 'Category 1',
  },
];

const roboto = Roboto({
  weight: ['900'],
  subsets: ['latin'],
});

const Services = () => {
  const { engLanguageActive } = useStore();
  return (
    <section className='flex flex-col items-center w-[70%] gap-16'>
      <h1
        className='dark:text-slate-50 text-4xl font-black text-[#334155]'
        style={roboto.style}>
        {engLanguageActive ? 'Services.' : 'Servicios.'}
      </h1>
      <div className='flex w-full'>
        <Swiper
          modules={[Autoplay, Navigation]}
          className='swiper-container z-50'
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
          onSlideChange={() => console.log('slide change')}>
          {data.map((element, index) => (
            <SwiperSlide key={index}>
              <div className='border border-red-600 w-[10em] text-black bg-cyan-200'>
                <h3>{element.title}</h3>
                <p>{element.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
