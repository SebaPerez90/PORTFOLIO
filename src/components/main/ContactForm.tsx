import { useState, useRef, ChangeEvent, SetStateAction } from 'react';
import { Roboto } from 'next/font/google';
import { useStore } from '@/store';

import Image from 'next/image';
import form_image from '@/assets/images/candidate.webp';

const roboto = Roboto({
  weight: ['700'],
  subsets: ['latin'],
});

const Contact = () => {
  const { engLanguageActive } = useStore();
  const [textAreaLength, setTextAreaLength] = useState(0);

  const errorMessageRef: any = useRef<HTMLSpanElement>(null);
  const emailInputRef: any = useRef<HTMLInputElement>(null);

  const checkEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    const email = e.target.value;
    const regExp =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const verificar = regExp.test(email);

    //first check if the value in input is a valid adrres email
    if (verificar) {
      errorMessageRef.current.style.opacity = '0';
      emailInputRef.current.style.outline = 'none';

      //then check if the email.value.length > 0
    } else if (!e.target.value) {
      errorMessageRef.current.style.opacity = '0';
      emailInputRef.current.style.outline = 'none';
    } else {
      errorMessageRef.current.style.opacity = '1';
      emailInputRef.current.style.outline = '2px solid red';
    }
  };

  //control the length number in text area input
  const lengthControl = (e: any): void => {
    setTextAreaLength(e.target.selectionEnd);
  };

  return (
    <section
      id='contact-section'
      className='pt-20 pb-40 gap-16 flex flex-col items-center justify-around w-full'>
      <h1
        className='text-center text-3xl [letter-spacing:10px] text-[#313131be]'
        style={roboto.style}>
        {engLanguageActive ? 'CONTACT ME' : 'CONTÁCTAME'}🤝
      </h1>
      <section className='after:absolute after:left-0 after:bottom-0 after:w-1/2 after:h-full after:bg-gradient-to-l after:from-blue-50 after:via-white after:to-white after:z-10 before:absolute before:right-0 before:bottom-0 before:w-1/2 before:h-full before:bg-gradient-to-l from-blue-300 via-blue-200 to-blue-50 relative px-12 py-10 rounded-lg shadow-[14px_30px_20px_-10px_#0000004f]  bg-white flex w-[55em] h-auto justify-around overflow-hidden'>
        <form
          className='z-20 gap-8 bg-transparent  [min-width:20em] flex flex-col justify-evenly items-start '
          onSubmit={(e) => e.preventDefault()}>
          <label
            htmlFor='name-input-field'
            className='w-full flex flex-col items-start font-extrabold text-xl text-[#404040b9]'>
            {engLanguageActive ? 'Name:' : 'Nombre:'}
            <input
              type='text'
              name='user-name'
              id='name-input-field'
              autoComplete='off'
              placeholder='e.g.  sebastian perez'
              className='rounded-md font-semibold text-sm outline-blue-300 text-[#404040b9] p-2 capitalize placeholder:text-sm placeholder:lowercase placeholder:font-normal border-2 w-full focus:placeholder:opacity-0'
            />
          </label>

          <label
            htmlFor='email-input-field'
            className='w-full relative flex flex-col items-start font-extrabold text-xl text-[#404040b9]'>
            Email:
            <input
              onChange={checkEmail}
              type='text'
              name='user-email'
              id='email-input-field'
              autoComplete='off'
              placeholder='e.g.  example@gmail.com'
              className='rounded-md text-sm outline-blue-300 text-[#404040b9] p-2 border-2 w-full placeholder:text-sm placeholder:font-normal focus:placeholder:opacity-0'
              ref={emailInputRef}
            />
            <span
              ref={errorMessageRef}
              className='absolute bottom-[-2em] w-max text-center text-sm font-semibold text-red-500 opacity-0'>
              {engLanguageActive
                ? 'Must be a valid email address'
                : 'Debe ser una dirección de email valida'}
            </span>
          </label>

          <div className='relative w-full mt-4'>
            <textarea
              maxLength={150}
              onChange={lengthControl}
              autoComplete='off'
              name='message'
              placeholder={
                engLanguageActive ? 'your message...' : 'tu mensaje ...'
              }
              className='rounded-md focus:placeholder:opacity-0 outline-blue-300 text-[#404040b9] placeholder:text-base placeholder:font-normal p-3 placeholder:translate-y-28 resize-none border-2 w-full h-40'></textarea>
            <span className='absolute right-5 bottom-5 text-[#404040b9]'>
              {textAreaLength}/150
            </span>
          </div>

          <button
            aria-label='send-btn'
            className='text-sm self-center w-full translate-y-[-1em] py-3 rounded-lg text-white font-bold hover:duration-200 duration-200 hover:bg-blue-400 bg-light-500  hover:border-light-200 border-2 border-light-500 hover:translate-y-[-1.3em] hover:shadow-[0px_8px_7px_#00000049]'>
            {engLanguageActive ? 'Send' : 'Enviar'}
          </button>
        </form>
        <div className='z-20 flex flex-col items-center justify-center'>
          <p className='p-4 text-[#404040cb] w-[80%] text-sm font-semibold bg-[#0000000e] rounded-sm [backdrop-filter:blur(5px)]'>
            Let me know how I can be of service to you or tell me about your
            user experience or any type of feedback.
          </p>
          <Image
            src={form_image}
            priority
            alt='form-image-reference'
            className='w-[20em] h-[20em] opacity-75'
          />
        </div>
      </section>
    </section>
  );
};

export default Contact;
