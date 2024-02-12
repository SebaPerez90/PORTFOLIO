import React from 'react';
import { useStore } from '@/store';

const Contact = () => {
  const { engLanguageActive, darkThemeActive } = useStore();

  return (
    <section>
      <form
        className='relative caret-[#DA0C81] h-[25rem] w-[30rem] bg-white rounded-md shadow-[2px_18px_20px_#aaaaaa] flex flex-col justify-center gap-8 items-start mb-12 '
        onSubmit={(e) => e.preventDefault()}>
        <div className='flex justify-start gap-5 ml-8'>
          <label className='relative w-[31%] border-b-2'>
            <span className='before:content-["*"] before:absolute before:right-0 before:text-red-500'></span>
            <input
              autoComplete='off'
              name='name'
              type='text'
              placeholder={engLanguageActive ? 'name' : 'nombre'}
              className='pb-1 outline-none placeholder:opacity-65'
            />
          </label>
          <label className='w-[31%] border-b-2'>
            <input
              autoComplete='off'
              name='last-name'
              type='last-name'
              placeholder={engLanguageActive ? 'last-name' : 'apellido'}
              className='pb-1 outline-none placeholder:opacity-65'
            />
          </label>
        </div>

        <label className='relative w-[60%] ml-8'>
          <span className='before:content-["*"] before:absolute before:right-0 before:text-red-500'></span>
          <input
            type='text'
            autoComplete='off'
            name='e-mail'
            placeholder={engLanguageActive ? 'e-mail' : 'correo'}
            className='pb-1 outline-none border-b-2 w-full placeholder:opacity-65'
          />
        </label>

        <textarea
          name='message'
          placeholder={engLanguageActive ? 'message' : 'mensaje'}
          className='h-1/3 outline-none resize-none w-[60%] border-b-2 ml-8 placeholder:opacity-65 placeholder:absolute placeholder:bottom-0 placeholder:pb-2'></textarea>

        <button className='p-[1em_1.5em] bg-[#DA0C81] font-bold text-[.6em] rounded-sm text-white w-[60%] ml-8'>
          {engLanguageActive ? 'SEND' : 'ENVIAR'}
        </button>
      </form>
    </section>
  );
};

export default Contact;
