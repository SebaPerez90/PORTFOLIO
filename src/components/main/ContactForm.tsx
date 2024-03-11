import { useState, useRef, ChangeEvent } from 'react';
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
      emailInputRef.current.style.outlineColor = '#93c5fd';

      //then check if the email.value.length > 0
    } else if (!e.target.value) {
      errorMessageRef.current.style.opacity = '0';
      emailInputRef.current.style.outlineColor = '#93c5fd';
    } else {
      errorMessageRef.current.style.opacity = '1';
      emailInputRef.current.style.outlineColor = 'red';
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
        className='dark:text-zinc-50 text-center text-4xl min-[500px]:[letter-spacing:10px] text-[#313131be]'
        style={roboto.style}>
        {engLanguageActive ? 'CONTACT ME' : 'CONTÁCTAME'}🤝
      </h1>
      <section className='before:bg-transparent after:bg-transparent py-9 max-[900px]:w-[90%] w-[55em] duration-300 relative pl-12 md:py-6 rounded-lg shadow-[14px_30px_20px_-10px_#0000004f] flex h-auto justify-around overflow-hidden md:after:absolute after:left-0 after:bottom-0 after:w-1/2 after:h-full after:bg-gradient-to-l after:from-blue-50 after:via-white after:to-white after:z-10 md:before:absolute before:right-0 before:bottom-0 before:w-1/2 before:h-full before:bg-gradient-to-l from-blue-300 via-blue-200 to-blue-50 dark:after:w-0 dark:after:h-0 dark:before:w-0 dark:before:h-0 dark:bg-theme_dark-main-bg'>
        <form
          className='gap-3 md:gap-0 items-center w-[50%] md:w-[auto] z-20 bg-transparent [min-width:20em] flex flex-col justify-evenly md:items-start'
          onSubmit={(e) => e.preventDefault()}>
          <label
            htmlFor='name-input-field'
            className='dark:text-zinc-300 w-full flex flex-col items-start font-extrabold text-xl text-[#404040b9]'>
            {engLanguageActive ? 'Name:' : 'Nombre:'}
            <input
              type='text'
              name='user-name'
              id='name-input-field'
              autoComplete='off'
              placeholder='e.g.  sebastian perez'
              className='border-2  dark:bg-theme_dark-box-second dark:text-slate-50 dark:border dark:border-slate-600/50 focus:bg-[#f3f3f3bf] max-[900px]:w-[80%] rounded-md font-semibold text-sm  outline-blue-300 dark:focus:bg-theme_dark-box-thir text-[#404040b9] p-2 capitalize placeholder:text-sm placeholder:lowercase placeholder:font-normal  w-full focus:placeholder:opacity-0 dark:font-medium'
            />
          </label>

          <label
            htmlFor='email-input-field'
            className='dark:text-zinc-300 w-full relative flex flex-col items-start font-extrabold text-xl text-[#404040b9]'>
            Email:
            <input
              onChange={checkEmail}
              type='text'
              name='user-email'
              id='email-input-field'
              autoComplete='off'
              placeholder={
                engLanguageActive
                  ? 'e.g.  example@gmail.com (optional)'
                  : 'e.g.  example@gmail.com (opcional)'
              }
              className='border-2  dark:bg-theme_dark-box-second dark:text-slate-50 dark:border dark:border-slate-600/50 focus:bg-[#f3f3f3bf] max-[900px]:w-[80%] rounded-md text-sm outline-blue-300 dark:focus:bg-theme_dark-box-thir text-[#404040b9] p-2  w-full placeholder:text-sm placeholder:font-normal focus:placeholder:opacity-0 dark:font-medium'
              ref={emailInputRef}
            />
            <span
              ref={errorMessageRef}
              className='absolute bottom-[-1.5em] w-max text-center text-sm font-semibold text-red-500 opacity-0'>
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
              className=' border-2  dark:bg-theme_dark-box-second dark:text-slate-50 dark:border dark:border-slate-600/50 focus:bg-[#f3f3f3bf] max-[900px]:w-[80%] rounded-md text-sm  min-[900px]:text-base focus:placeholder:opacity-0 outline-blue-300 dark:focus:bg-theme_dark-box-thir text-[#404040b9] placeholder:text-base placeholder:font-normal p-3 placeholder:translate-y-28 resize-none  w-full h-40'></textarea>
            <span className='max-[900px]:right-20 absolute right-5 bottom-5 text-[#404040b9] dark:text-zinc-300'>
              {textAreaLength}/150
            </span>
          </div>

          <button
            aria-label='send-btn'
            className='dark:border-theme_dark-sup-sky dark:bg-theme_dark-sup-sky dark:hover:bg-[#38bff875] hover:translate-y-[-0.7em] translate-y-[-0.5em] max-[900px]:w-[80%] max-[900px]:self-start text-sm self-center w-full md:translate-y-[-1em] py-3 rounded-md text-white font-bold hover:duration-200 duration-200 hover:bg-blue-400 bg-light-500  hover:border-light-200 border border-light-500/85 md:hover:translate-y-[-1.3em] hover:shadow-[0px_8px_7px_#00000049]'>
            {engLanguageActive ? 'Send' : 'Enviar'}
          </button>
        </form>
        <div className='hidden md:flex z-20 flex-col items-center justify-center'>
          <h1 className='w-[80%] italic text-lg text-[#4d4d4dda] font-semibold  text-center bg-gradient-to-bl from-inherit border to-[#e9e9e9] [clip-path:polygon(0%_0%,100%_0%,100%_73.5%,59.5%_73.5%,54.75%_100%,50%_73.5%,0%_73.5%)] max-[900px]:translate-y-[3em] py-12 px-8 pb-24 [transform:translate(-0.5em,3em)] z-20 dark:to-theme_dark-sup-pink dark:from-theme_dark-sup-pink dark:text-slate-50'>
            {engLanguageActive
              ? '"Let me know how I can serve you! "'
              : 'Déjame saber en que puedo servirte'}
          </h1>

          <Image
            src={form_image}
            priority
            alt='form-image-reference'
            className='z-10 w-[20em] h-[20em] opacity-75 max-[900px]:w-[15em] max-[900px]:h-auto'
          />
        </div>
      </section>
    </section>
  );
};

export default Contact;
