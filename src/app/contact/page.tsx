'use client';

import form_data from '@/utils/form-data.json';
import { useStore } from '@/context/store';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FormData, IFormData } from './form-data.interface';

const Contact = () => {
  const { engLanguageActive } = useStore();
  const [textAreaLength, setTextAreaLength] = useState<number>(0);
  const [formData, setFormData] = useState<IFormData>(FormData);

  const lengthControl = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaLength(e.target.selectionEnd);
  };

  const captureValues = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === 'name') {
      const updatedValue = e.target.value.replace(/[^a-zA-Z\s]/g, '');
      setFormData({ ...formData, [e.target.name]: updatedValue });
    } else if (e.target.name === 'email' || e.target.name === 'message') {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch('https://formspree.io/f/mbjnlnlq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  };

  return (
    <>
      <main className='flex flex-col items-center pt-28  bg-[#e2e2e2] dark:bg-theme_dark-main-bg'>
        {/* <h1>{engLanguageActive ? 'Get in Touch' : 'Contáctame'}</h1> */}
        <form
          name='contact-form'
          method='POST'
          onSubmit={sendMessage}
          className='border bg-[#fbfbfb] rounded-md flex flex-col justify-around w-[25em] h-[30em] py-2 px-10'>
          {form_data.map((element, index) => (
            <label
              key={index}
              htmlFor={element.htmlFor}
              className='flex flex-col font-semibold text-[#333333be]'>
              {engLanguageActive ? element.labelEN : element.labelES}
              <input
                id={element.id}
                name={element.inputName}
                type='text'
                autoComplete='off'
                // value={formData[element.inputName as keyof typeof formData]}
                value={
                  element.inputName === 'name' ? formData.name : formData.email
                }
                onChange={(e) => {
                  captureValues(e);
                }}
                placeholder={
                  engLanguageActive
                    ? element.placeHolderEN
                    : element.placeHolderES
                }
                className='placeholder:opacity-70 placeholder:text-xs placeholder:font-semibold p-2 rounded-sm bg-[#e8e8e8] focus:placeholder:opacity-0 placeholder:duration-300 outline-none focus:bg-[#fbfbfb] duration-300 focus:duration-300 focus:border-b-light-500 border-b-2 caret-light-500 text-sm font-semibold text-[#333333e3]'
              />
            </label>
          ))}
          <div className='relative w-full translate-y-6'>
            <textarea
              name='message'
              maxLength={200}
              onChange={(e) => {
                lengthControl(e);
                captureValues(e);
              }}
              placeholder={
                engLanguageActive
                  ? 'How can I help you ?'
                  : 'Como puedo ayudarte ?'
              }
              className='placeholder:opacity-70 placeholder:text-xs placeholder:font-semibold p-[5px] rounded-sm bg-[#e8e8e8] focus:placeholder:opacity-0 placeholder:duration-300 outline-none placeholder:pl-1 focus:bg-[#fbfbfb] duration-300 focus:duration-300 focus:border-b-light-500 border-b-2 caret-light-500 text-sm font-semibold text-[#333333e3] resize-none h-[12em] w-full'></textarea>
            <span className='absolute right-4 bottom-5 font-semibold dark:text-zinc-300 opacity-50 text-sm'>
              {textAreaLength}/200
            </span>
          </div>
          <button
            type='submit'
            style={
              formData.name && formData.message
                ? {
                    pointerEvents: 'all',
                    filter: 'grayscale(0)',
                    transition: 'all 300ms',
                  }
                : {
                    pointerEvents: 'none',
                    filter: 'grayscale(0.7)',
                    transition: 'all 300ms',
                  }
            }
            className='bg-light-500 py-3 w-full text-slate-50 rounded-md text-xs font-bold hover:bg-light-400 duration-200 hover:duration-200 active:scale-95 dark:bg-theme_dark-sup-sky'>
            {engLanguageActive ? 'Send' : 'Enviar'}
          </button>
        </form>
      </main>
    </>
  );
};

export default Contact;
