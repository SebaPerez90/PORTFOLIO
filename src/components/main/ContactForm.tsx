'use client';

import React, { useState, useRef, ChangeEvent } from 'react';
import { useStore } from '@/store';

import { MdOutlineEmail } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa6';

const Contact = () => {
  const { engLanguageActive, darkThemeActive } = useStore();
  const [checked, setChecked] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const errorMessageRef = useRef<HTMLSpanElement>(null);

  // this function check the e-mail input value is a valid address and toggle effect send button if pass the check
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
    <form
      className=' caret-[#DA0C81] h-[28rem] w-[25rem] bg-white rounded-[0.4em_0_0_0.4em] flex flex-col justify-center gap-8 items-center'
      onSubmit={(e) => e.preventDefault()}>
      <div className='flex justify-start w-[70%] gap-5 '>
        <label className='relative w-[50%]'>
          <input
            onChange={() => console.log('sacar esto , es solo plantilla')}
            type='text'
            name='name'
            autoComplete='off'
            placeholder={engLanguageActive ? 'FIRST NAME' : 'NOMBRE'}
            className='focus-form-field text-[#da0c8184] capitalize border-b-2 pb-1 pl-1 outline-none placeholder:opacity-75 placeholder:text-[0.7em] font-semibold w-[100%] '
          />
        </label>
        <label className='w-[50%]'>
          <input
            onChange={() => console.log('sacar esto , es solo plantilla')}
            type='last-name'
            name='last-name'
            autoComplete='off'
            placeholder={engLanguageActive ? 'LAST NAME' : 'APELLIDO'}
            className='focus-form-field text-[#da0c8184] capitalize border-b-2 pb-1 pl-1 outline-none placeholder:opacity-75 placeholder:text-[0.7em] font-semibold w-[100%]'
          />
        </label>
      </div>

      <label className='relative w-[70%] mt-4'>
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
          name='e-mail'
          autoComplete='off'
          placeholder={engLanguageActive ? 'E-MAIIL' : 'CORREO'}
          className='focus-form-field text-[#da0c8184] pb-1 pl-1 outline-none border-b-2 w-full placeholder:opacity-75 placeholder:text-[0.7em] font-semibold'
          ref={emailFieldRef}
        />
      </label>

      <textarea
        name='message'
        placeholder={engLanguageActive ? 'MESSAGE' : 'MENSAJE'}
        className='text-[#da0c8184] h-[30%] outline-none resize-none w-[70%] border-b-2 placeholder:opacity-75 placeholder:absolute placeholder:bottom-0 placeholder:pb-2 placeholder:pl-1 placeholder:text-[0.7em] font-semibold focus-form-field'></textarea>

      <button
        ref={buttonRef}
        className='flex justify-center cursor-not-allowed  items-center p-[1em_1.5em] bg-[#da0c8153] font-bold text-[.6em] translate-y-[-1em] rounded-full text-[#ffffff9d] w-[70%] duration-1000 opacity-75'>
        {engLanguageActive ? 'SEND' : 'ENVIAR'}
        <MdOutlineEmail className='ml-1 translate-y-[-0.1em]' />
      </button>
    </form>
  );
};

export default Contact;
