import { useState, useRef, useEffect } from 'react';
import { useStore } from '@/context/store';

import { Roboto } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

import { lengthTextControl } from './utils/lengthTextControl';
import { capturingInput } from './utils/capturingInput';
import { checkEmailEntry } from './utils/checkEmailEntry';

import ImageForm from './ImageForm';
import SuccessMessage from './SuccessMessage';

const roboto = Roboto({
  weight: ['700'],
  subsets: ['latin'],
});

const Contact = () => {
  const { engLanguageActive } = useStore();
  const [textAreaLength, setTextAreaLength] = useState(0);
  const [formSendSuccessfully, setFormSendSuccessfully] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const errorMessageRef: any = useRef<HTMLSpanElement>(null);
  const emailInputRef: any = useRef<HTMLInputElement>(null);

  //FORM HANDLE SUBMIT
  const sendComent = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mbjnlnlq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSendSuccessfully(true);
      }
    } catch (error) {
      console.error('Request Error:', error);
    }
  };

  return (
    <section
      id='contact-section'
      className='gap-16 flex flex-col items-center justify-around w-full'>
      <h1
        className='dark:text-zinc-50 text-center text-4xl min-[500px]:[letter-spacing:10px] text-[#334155]'
        style={roboto.style}>
        {engLanguageActive ? 'CONTACT ME' : 'CONTÁCTAME'}🤝
      </h1>
      <section className='overflow-hidden bg-white  py-9 max-[900px]:w-[90%] w-[55em] duration-300 relative pl-12 md:py-6 rounded-lg flex h-auto justify-around dark:bg-theme_dark-main-bg'>
        <AnimatePresence>
          {!formSendSuccessfully && (
            <motion.form
              transition={{ duration: 0.6 }}
              exit={{ opacity: 0, x: -100 }}
              onSubmit={sendComent}
              action='POST'
              className='gap-3 md:gap-0 items-center w-[50%] md:w-[auto] z-20 bg-transparent [min-width:20em] flex flex-col justify-evenly md:items-start'>
              <motion.label
                transition={{ delay: 0.2, duration: 1 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                htmlFor='name-input-field'
                className='dark:text-zinc-300 w-full flex flex-col items-start font-extrabold text-xl text-[#334155]'>
                {engLanguageActive ? 'Name:' : 'Nombre:'}
                <input
                  onChange={(e) => capturingInput(e, setFormData, formData)}
                  type='text'
                  name='name'
                  id='name-input-field'
                  autoComplete='off'
                  placeholder='e.g.  sebastian perez'
                  className='border-2 dark:bg-theme_dark-box-second dark:text-slate-50 dark:border dark:border-slate-600/50 bg-[#f3f3f3bf] max-[900px]:w-[80%] rounded-md font-semibold text-sm outline-blue-300 dark:focus:bg-theme_dark-box-thir text-[#404040b9] p-4 capitalize placeholder:text-sm placeholder:lowercase placeholder:font-normal w-full focus:placeholder:opacity-0 dark:font-medium'
                />
              </motion.label>

              <motion.label
                transition={{ delay: 0.2, duration: 1 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                htmlFor='email-input-field'
                className='dark:text-zinc-300 w-full relative flex flex-col items-start font-extrabold text-xl text-[#334155]'>
                Email:
                <input
                  onChange={(e) => {
                    capturingInput(e, setFormData, formData);
                    checkEmailEntry(e, errorMessageRef, emailInputRef);
                  }}
                  type='text'
                  name='email'
                  id='email-input-field'
                  autoComplete='off'
                  placeholder={
                    engLanguageActive
                      ? 'e.g.  example@gmail.com (optional)'
                      : 'e.g.  example@gmail.com (opcional)'
                  }
                  className='border-2 dark:bg-theme_dark-box-second dark:text-slate-50 dark:border dark:border-slate-600/50 bg-[#f3f3f3bf] max-[900px]:w-[80%] rounded-md text-sm outline-blue-300 dark:focus:bg-theme_dark-box-thir text-[#404040b9] p-4  w-full placeholder:text-sm placeholder:font-normal focus:placeholder:opacity-0 dark:font-medium'
                  ref={emailInputRef}
                />
                <span
                  ref={errorMessageRef}
                  className='absolute bottom-[-1.5em] w-max text-center text-sm font-semibold text-red-500 opacity-0'>
                  {engLanguageActive
                    ? 'Must be a valid email address'
                    : 'Debe ser una dirección de email valida'}
                </span>
              </motion.label>

              <motion.div
                transition={{ delay: 0.3, duration: 1 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className='relative w-full mt-4'>
                <motion.textarea
                  maxLength={150}
                  onChange={(e) => {
                    lengthTextControl(e, setTextAreaLength);
                    capturingInput(e, setFormData, formData);
                  }}
                  autoComplete='off'
                  name='message'
                  placeholder={
                    engLanguageActive
                      ? 'type your message...'
                      : 'escribe tu mensaje ...'
                  }
                  className='pt-3 px-4 border-2 dark:bg-theme_dark-box-second dark:text-slate-50 dark:border dark:border-slate-600/50 bg-[#f3f3f3bf] max-[900px]:w-[80%] rounded-md text-sm  min-[900px]:text-base focus:placeholder:opacity-0 outline-blue-300 dark:focus:bg-theme_dark-box-thir text-[#404040b9] placeholder:text-base placeholder:font-normal placeholder:translate-y-[8.8rem] resize-none  w-full h-48'></motion.textarea>
                <span className='max-[900px]:right-20 absolute right-5 bottom-5 text-[#404040b9] dark:text-zinc-300'>
                  {textAreaLength}/150
                </span>
              </motion.div>

              <motion.button
                transition={{ delay: 0.4, duration: 0.2 }}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                aria-label='send-btn'
                className='active:scale-110 min-[900px]:translate-y-[-1em] dark:border-theme_dark-sup-sky dark:bg-theme_dark-sup-sky dark:hover:bg-[#38bff875] hover:translate-y-[-0.7em]  max-[900px]:w-[80%] max-[900px]:self-start text-sm self-center w-full  py-3 rounded-md text-white font-bold hover:duration-200 duration-200 hover:bg-blue-400 bg-light-500  hover:border-light-200 border border-light-500/85 md:hover:translate-y-[-1.3em] hover:shadow-[0px_8px_7px_#00000049]'>
                {engLanguageActive ? 'Send' : 'Enviar'}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
        <ImageForm
          formSendSuccessfully={formSendSuccessfully}
          formData={formData}
        />
        {formSendSuccessfully && <SuccessMessage formData={formData} />}
      </section>
    </section>
  );
};

export default Contact;
