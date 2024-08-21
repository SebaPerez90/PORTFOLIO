'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoMdHome } from 'react-icons/io';
import not_found from '@/assets/images/not-found.png';

export default function NotFound() {
  const router = useRouter();
  const [counter, setCounter] = useState(5);

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1500);

      const timeout = setTimeout(() => {
        router.push('/');
      }, 7500);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }, [router]);

  return (
    <div className='relative h-dvh bg-gradient-to-b from-black to-light-400 flex items-center justify-center'>
      <div>
        <div className='stars w-[5px] rounded-full h-[5px] block absolute left-[45em] top-7 bg-yellow-100  opacity-40 animate-[stars_900ms_linear_alternate-reverse_infinite]'></div>
        <div className='stars w-[5px] rounded-full h-[5px] block absolute left-[36em] top-20 bg-yellow-100  opacity-40 animate-[stars_900ms_linear_alternate-reverse_infinite]'></div>
        <div className='stars w-[5px] rounded-full h-[5px] block absolute left-[40em] top-2 bg-yellow-100  opacity-40 animate-[stars_900ms_linear_alternate-reverse_infinite]'></div>
        <div className='stars w-[5px] rounded-full h-[5px] block absolute left-[50em] top-20 bg-yellow-100  opacity-40 animate-[stars_1s_linear_alternate-reverse_infinite]'></div>
        <div className='stars w-[5px] rounded-full h-[5px] block absolute right-[32em] top-[4.7em] bg-yellow-100  opacity-40 animate-[stars_1.8s_linear_alternate-reverse_infinite]'></div>
        <div className='stars w-[5px] rounded-full h-[5px] block absolute right-[14em] top-[7em] bg-yellow-100  opacity-40 animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
        <div className='stars w-[5px] rounded-full h-[5px] block absolute left-[5em] top-[11em] bg-yellow-100  opacity-40 animate-[stars_1s_linear_alternate-reverse_infinite]'></div>
        <div className='stars w-[5px] rounded-full h-[5px] block absolute right-[9.2em] top-[3em] bg-yellow-100  opacity-40 animate-[stars_1.5s_linear_alternate-reverse_infinite]'></div>
        <div className='stars w-[5px] rounded-full h-[5px] block absolute left-[11em] top-[5em] bg-yellow-100  opacity-40 animate-[stars_1.9s_linear_alternate-reverse_infinite]'></div>
        <div className='stars w-[5px] rounded-full h-[5px] block absolute right-[16em] top-[10em] bg-yellow-100  opacity-40 animate-[stars_1.2s_linear_alternate-reverse_infinite]'></div>
        <div className='stars w-[5px] rounded-full h-[5px] block absolute right-[20em] top-[8.8em] bg-yellow-100  opacity-40 animate-[stars_1s_linear_alternate-reverse_infinite]'></div>
        <div className='stars w-[5px] rounded-full h-[5px] block absolute right-[41em] top-[2.6em] bg-yellow-100  opacity-40 animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
        <div className='stars w-[5px] rounded-full h-[5px] block absolute right-[7em] top-[1.8em] bg-yellow-100  opacity-40 animate-[stars_1.3s_linear_alternate-reverse_infinite]'></div>
        <div className='stars w-[5px] rounded-full h-[5px] block absolute right-[24.4em] top-[6.5em] bg-yellow-100  opacity-40 animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
        <div className='stars w-[5px] rounded-full h-[5px] block absolute right-[37em] top-[1.8em] bg-yellow-100  opacity-40 animate-[stars_1s_linear_alternate-reverse_infinite]'></div>
        <div className='stars w-[5px] rounded-full h-[5px] block absolute left-[6.2em] top-[3em] bg-yellow-100  opacity-40 animate-[stars_1.8s_linear_alternate-reverse_infinite]'></div>
        <div className='stars w-[5px] rounded-full h-[5px] block absolute right-[2em] top-[11em] bg-yellow-100  opacity-40 animate-[stars_1.3s_linear_alternate-reverse_infinite]'></div>
        <div className='stars w-[5px] rounded-full h-[5px] block absolute left-[18.3em] top-[5.4em] bg-yellow-100  opacity-40 animate-[stars_1.66s_linear_alternate-reverse_infinite]'></div>
        <div className='stars w-[5px] rounded-full h-[5px] block absolute left-[23em] top-[10.3em] bg-yellow-100  opacity-40 animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
        <div className='stars w-[5px] rounded-full h-[5px] block absolute left-[5.7em] top-[8.2em] bg-yellow-100  opacity-40 animate-[stars_1.1s_linear_alternate-reverse_infinite]'></div>
        <div className='stars w-[5px] rounded-full h-[5px] block absolute left-[38em] top-[12em] bg-yellow-100  opacity-40 animate-[stars_1.7s_linear_alternate-reverse_infinite]'></div>
        <div className='stars w-[5px] rounded-full h-[5px] block absolute left-[9.6em] top-[4.2em] bg-yellow-100  opacity-40 animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
      </div>
      <div className='flex flex-col items-center justify-center pb-12 h-full'>
        <Image
          src={not_found}
          alt='Not Found'
          width={400}
          height={400}
        />
        <h1 className='text-white text-7xl z-20 font-extrabold'>
          Llegaste a la Luna!
        </h1>
        <p className='text-slate-200 text-xl z-20 mt-4'>
          Parece que estás algo perdido, no te preocupes.<br></br> Serás
          redirigido al inicio en {counter} segundos...
        </p>
        <button
          onClick={() => router.push('/')}
          className='mt-8 rounded-lg flex items-center gap-2 justify-center  p-3 font-bold duration-300 hover:duration-300 active:scale-95 bg-white hover:bg-light-500/30 hover:text-slate-50 border border-transparent hover:border-slate-50'>
          <IoMdHome />
          Vuelve al Inicio
        </button>
      </div>
    </div>
  );
}
