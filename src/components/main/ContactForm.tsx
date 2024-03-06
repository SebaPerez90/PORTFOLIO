import { useState, useRef, ChangeEvent } from 'react';
import { Roboto } from 'next/font/google';
import { useStore } from '@/store';

import { FaCheck } from 'react-icons/fa6';
import { VscSend } from 'react-icons/vsc';

import Image from 'next/image';
import form_image from '@/assets/images/candidate.webp';

const roboto = Roboto({
  weight: ['700'],
  subsets: ['latin'],
});

const Contact = () => {
  const { engLanguageActive } = useStore();
  const [checked, setChecked] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const errorMessageRef = useRef<HTMLSpanElement>(null);

  // this function check the email input value is a valid address and toggle effect send button if pass the check
  const checkEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    const email = e.target.value;
    const regExp =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const verificar = regExp.test(email);

    if (verificar) {
      errorMessageRef.current
        ? (errorMessageRef.current.style.opacity = '0')
        : null;

      emailFieldRef.current
        ? emailFieldRef.current.style.removeProperty('border')
        : null;

      buttonRef.current
        ? buttonRef.current.classList.toggle('allow-send-form')
        : null;

      setChecked(true);
    } else {
      errorMessageRef.current
        ? (errorMessageRef.current.style.opacity = '1')
        : null;
      emailFieldRef.current
        ? (emailFieldRef.current.style.border = '1px solid #ff6565')
        : null;
    }
  };

  return (
    <section
      id='contact-section'
      className='mt-20 text-center  flex flex-col items-center justify-around w-full'>
      <div className='relative gap-20 py-16 w-full flex flex-col justify-center items-center bg-gradient-to-b  from-light-400 to-light-200'>
        <h1
          className='text-xl [letter-spacing:10px] text-white border-[6px] border-white p-4'
          style={roboto.style}>
          {engLanguageActive ? 'CONTACT ME' : 'CONTÁCTAME'}🤝
        </h1>
        <section className='z-50 rounded-lg shadow-[14px_30px_20px_-10px_#0000004f]  bg-white flex  w-[50em] h-[28em] justify-around overflow-hidden'>
          <form
            className=' bg-white flex flex-col justify-center gap-8 items-center'
            onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='name' className=''>
              <input
                type='text'
                name='name'
                autoComplete='off'
                placeholder={
                  engLanguageActive ? 'full name' : 'Nombre completo'
                }
                className='capitalize placeholder:lowercase border-b-2 pb-1 pl-1 outline-none placeholder:opacity-75  font-semibold w-[100%] '
              />
            </label>

            <label htmlFor='email' className='relative '>
              <span className='absolute right-2 text-red-500 text-xl top-2'>
                {checked ? <FaCheck className='text-green-500 text-sm' /> : '*'}
              </span>
              <span
                ref={errorMessageRef}
                className='absolute bottom-[-1.5em] w-full text-center text-xs font-semibold text-red-500 opacity-0'>
                {engLanguageActive
                  ? 'must be a valid email address'
                  : 'debe ser una dirección de email valida'}
              </span>
              <input
                onChange={checkEmail}
                type='text'
                name='email'
                autoComplete='off'
                placeholder='email'
                className='pb-1 pl-1 outline-none border-b-2 w-full placeholder:opacity-75  font-semibold'
                ref={emailFieldRef}
              />
            </label>

            <textarea
              name='message'
              placeholder={
                engLanguageActive ? 'send you message' : 'Envia tu mensaje'
              }
              className='h-[30%] w-full outline-none resize-none border-b-2 placeholder:opacity-75 placeholder:absolute placeholder:bottom-0 placeholder:pb-2 placeholder:pl-1  font-semibold'></textarea>

            <button
              ref={buttonRef}
              // flex items-center p-[0.8em_2em] gap-2 text-white rounded-full bg-gradient-to-b from-light-900 via-light-900 font-bold to-[#7d27ffae] border-[1px] border-[#4f2194] hover:translate-y-[-0.3em] hover:shadow-[0px_8px_7px_#00000049] duration-200 active:border-[#dedede] hover:bg-[#4f2194] hover:border-light-900 hover:text-[#ffffff93]
              className='cursor-not-allowed'>
              {engLanguageActive ? 'SEND' : 'ENVIAR'}
              <VscSend />
            </button>
          </form>
          <div className='relative flex before:absolute before:z-20 before:right-[-12em]  before:rounded-[50%]  before:bottom-0 before:w-[25em] before:h-full before:scale-110 before:bg-[#c89cfe] after:absolute after:z-10 after:right-[-8em] after:rounded-[50%]  after:bottom-0 after:w-[25em] after:h-full after:scale-125 after:bg-[#dcbfff]'>
            <span className='absolute z-30 right-[-18em] rounded-[50%]  bottom-0 w-[25em] h-full bg-[#9e54f8] '></span>
            <Image
              src={form_image}
              priority
              alt='form-image-reference'
              className='w-[20em] h-[20em] z-40'
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
/*<cite>{`"discipline is our destiny ..."`}</cite>

*/
