'use client';

import form_data from '@/utils/form-data.json';
import benefits from '@/utils/benefits.json';
import { useStore } from '@/context/store';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FormData, IFormData } from './form-data.interface';
import { FaCircleExclamation } from 'react-icons/fa6';
import Image from 'next/image';
import contact from '@/assets/images/contact.svg';
import Footer from '@/components/Footer';
import { BiSolidZap } from 'react-icons/bi';

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
      <main className='flex flex-col items-center bg-[#e2e2e2] dark:bg-theme_dark-main-bg'>
        <div className='w-full flex justify-evenly gap-14 pb-16 pt-24 flex-wrap'>
          <div className='max-[550px]:px-10 w-[30em] flex flex-col justify-center items-center'>
            <div className='flex items-center flex-col gap-1'>
              <h1 className='font-bold text-4xl text-[#333333be]] text-[#333333e3] dark:text-white'>
                {engLanguageActive
                  ? 'Bring your brand to life!'
                  : 'Dale vida a tu marca!'}
              </h1>
              <h2 className='font-semibold text-lg text-[#333333be]] text-[#333333be] dark:text-slate-200'>
                {engLanguageActive
                  ? 'Digitize your business now and boost your profits'
                  : 'Digitalizá tu negocio ahora y potencia tus ingresos'}
                🚀
              </h2>
              <ul className='self-start mt-6'>
                <p className='py-2 font-bold border-b-2 border-light-500 text-[#333333e3] dark:text-slate-50 dark:border-theme_dark-sup-sky'>
                  {engLanguageActive ? 'Benefits' : 'Beneficios'}
                </p>
                {benefits.map((element, index) => (
                  <li
                    key={index}
                    className='text-[#333333be] font-semibold flex items-center mt-3 gap-1 dark:text-slate-50'>
                    <BiSolidZap className='text-light-500 dark:text-theme_dark-sup-pink text-2xl' />
                    {engLanguageActive
                      ? element.benefitsEN
                      : element.benefitsES}
                  </li>
                ))}
              </ul>
            </div>
            <Image
              src={contact}
              width={350}
              height={350}
              priority
              alt='contact-img'
              className='w-[350px] h-[350px]'
            />
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-6xl text-[#333333be]] text-[#333333e3] dark:text-slate-50 max-[500px]:w-2/3 max-[500px]:m-[0_auto] max-[500px]:text-4xl'>
              {engLanguageActive ? 'Get in Touch' : 'Contáctame'}
            </h1>
            <form
              name='contact-form'
              method='POST'
              onSubmit={sendMessage}
              className='max-[500px]:w-[21em] max-[500px]:bg-[#e2e2e2] max-[500px]:shadow-none bg-[#fbfbfb] rounded-md flex flex-col justify-around w-[25em] h-[33em] p-10 dark:bg-theme_dark-box-thir [box-shadow:7px_9px_9px_-3px_rgba(0,0,0,0.16)]'>
              {form_data.map((element, index) => (
                <label
                  key={index}
                  htmlFor={element.htmlFor}
                  className='flex flex-col font-semibold relative text-[#333333be] dark:text-slate-50'>
                  {engLanguageActive ? element.labelEN : element.labelES}
                  {element.inputName === 'email' && (
                    <span className='absolute gap-[2px] text-light-500/60 left-0 -bottom-5 flex items-center text-xs dark:text-theme_dark-sup-sky'>
                      <FaCircleExclamation />
                      {engLanguageActive
                        ? 'optional field / valid email addrress'
                        : 'campo opcional / correo válido'}
                    </span>
                  )}
                  <input
                    id={element.id}
                    name={element.inputName}
                    type='text'
                    autoComplete='off'
                    style={
                      element.inputName === 'name'
                        ? { textTransform: 'capitalize' }
                        : undefined
                    }
                    value={
                      element.inputName === 'name'
                        ? formData.name
                        : formData.email
                    }
                    onChange={(e) => {
                      captureValues(e);
                    }}
                    placeholder={
                      engLanguageActive
                        ? element.placeHolderEN
                        : element.placeHolderES
                    }
                    className='max-[500px]:border-b-light-500 placeholder:opacity-70 placeholder:text-xs placeholder:font-semibold p-2 rounded-sm bg-[#e8e8e8] focus:placeholder:opacity-0 placeholder:duration-300 outline-none focus:bg-[#fbfbfb] duration-300 focus:duration-300 focus:border-b-light-500 border-b-2 caret-light-500 text-sm font-semibold text-[#333333e3] mt-1 dark:caret-theme_dark-sup-pink dark:focus:border-theme_dark-sup-pink focus:dark:bg-theme_dark-box-thir dark:bg-theme_dark-box-second dark:border-theme_dark-box-second dark:text-slate-50'
                  />
                </label>
              ))}
              <div className='relative w-full translate-y-4'>
                <p className='flex flex-col font-semibold relative text-[#333333be] dark:text-slate-50'>
                  {engLanguageActive
                    ? 'How can I help you ?'
                    : 'Como puedo ayudarte ?'}
                </p>
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
                  className='max-[500px]:border-b-light-500 placeholder:opacity-70 placeholder:text-xs placeholder:font-semibold p-[5px] rounded-sm bg-[#e8e8e8] focus:placeholder:opacity-0 placeholder:duration-300 outline-none placeholder:pl-1 focus:bg-[#fbfbfb] duration-300 focus:duration-300 focus:border-b-light-500 border-b-2 caret-light-500 text-sm font-semibold text-[#333333e3] resize-none h-[10em] w-full mt-1 dark:caret-theme_dark-sup-pink dark:focus:border-theme_dark-sup-pink focus:dark:bg-theme_dark-box-thir dark:bg-theme_dark-box-second dark:border-theme_dark-box-second dark:text-slate-50'></textarea>
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
                        filter: 'grayscale(1)',
                        transition: 'all 300ms',
                      }
                }
                className='bg-light-500 py-3 w-full text-slate-50 rounded-md text-xs font-bold hover:bg-light-400 duration-200 hover:duration-200 active:scale-95 dark:bg-theme_dark-sup-sky'>
                {engLanguageActive ? 'Send' : 'Enviar'}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
