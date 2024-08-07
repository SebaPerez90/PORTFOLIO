'use client';

import benefits from '@/utils/benefits.json';
import { useStore } from '@/context/store';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FormData, IFormData } from './form-data.interface';
import Image from 'next/image';
import contact from '@/assets/images/contact.svg';
import Footer from '@/components/Footer';
import { BiSolidZap } from 'react-icons/bi';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { IoInformationCircle } from 'react-icons/io5';

const Contact = () => {
  const { engLanguageActive } = useStore();
  const [textAreaLength, setTextAreaLength] = useState<number>(0);
  const [formData, setFormData] = useState<IFormData>(FormData);
  const router = useRouter();

  const lengthControl = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaLength(e.target.selectionEnd);
  };

  const captureValues = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // if (e.target.name === 'name') {
    //   const updatedValue = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    //   setFormData({ ...formData, [e.target.name]: updatedValue });
    // }
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const succesMessage = () => {
    const message = engLanguageActive
      ? 'Your message has been send successfully'
      : 'Tu mensaje fué enviado correctamente';
    toast.success(message, {
      duration: 3000,
      style: {
        fontWeight: '500',
        color: '#333333be',
      },
      position: 'bottom-right',
    });
    setTimeout(() => {
      router.push('/');
    }, 3000);
  };

  return (
    <>
      <main className='flex flex-col items-center bg-white dark:bg-dark-main  pb-48 lg:pb-24 pt-32'>
        <div className='[width:clamp(300px,80%,1400px)] mx-8 flex h-full justify-around items-center flex-wrap'>
          <div className='flex flex-col justify-start items-center sm:items-start gap-8'>
            <motion.div
              transition={{
                bounce: 0.6,
                duration: 1.5,
                type: 'spring',
              }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className='flex items-start flex-col gap-3'>
              <h1 className='font-extrabold text-5xl text-balance text-[#333333e3] dark:text-white'>
                {engLanguageActive
                  ? 'Bring your brand to life!'
                  : 'Dale vida a tu marca!'}
              </h1>
              <h2 className='font-medium text-xl text-slate-500 dark:text-slate-300'>
                {engLanguageActive
                  ? 'Digitize your business now and boost your profits'
                  : 'Digitalizá tu negocio ahora y potencia tus ingresos'}
                🚀
              </h2>
              <ul className='self-start mt-6'>
                <p className='py-2 font-extrabold text-xl border-b-2 border-light-500/70 dark:text-dark-pink text-light-500/90 dark:border-dark-pink'>
                  {engLanguageActive ? 'Benefits' : 'Beneficios'}
                </p>
                {benefits.map((element, index) => (
                  <li
                    key={index}
                    className='text-[#333333be] font-semibold flex items-center mt-3 gap-1 dark:text-slate-300'>
                    <BiSolidZap className='text-light-500/85 dark:text-dark-pink text-2xl' />
                    {engLanguageActive
                      ? element.benefitsEN
                      : element.benefitsES}
                  </li>
                ))}
              </ul>
            </motion.div>
            <Image
              src={contact}
              width={350}
              height={350}
              priority
              alt='contact-img'
              className='h-[350px] w-[350px]'
            />
          </div>
          <motion.form
            transition={{
              duration: 0.3,
            }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            name='contact-form'
            method='POST'
            onSubmit={sendMessage}
            className='flex flex-col justify-around gap-12 w-[25em] h-[33em]'>
            <div className='input_field_container relative w-full bg-white dark:bg-dark-main'>
              <input
                required={true}
                autoComplete='off'
                type='text'
                name='subject'
                id='subject'
                onChange={(e) => {
                  captureValues(e);
                }}
                className='text-2xl dark:border-b-dark-pink dark:border-transparent dark:focus:border-dark-pink dark:focus:bg-dark-main border-b-light-500/40 p-2 pt-5 bg-white outline-none [transition:all_300ms] border-2 border-transparent lg:text-lg text-slate-500 dark:bg-dark-main dark:border-dark-pink dark:text-slate-50 rounded-sm w-full focus:border-2 focus:border-light-500 focus:rounded-md focus:bg-white dark:caret-dark-pink font-medium'
              />
              <label
                htmlFor='subject'
                className='absolute font-bold text-light-500 opacity-60 left-4 top-7 text-lg [transition:all_400ms] dark:text-dark-pink'>
                {engLanguageActive ? 'Subject' : 'Asunto'}
              </label>
            </div>
            <div className='input_field_container relative w-full bg-white dark:bg-dark-main'>
              <input
                required={true}
                autoComplete='off'
                type='text'
                name='name'
                id='name'
                onChange={(e) => {
                  captureValues(e);
                }}
                className='text-2xl dark:border-b-dark-pink dark:border-transparent dark:focus:border-dark-pink dark:focus:bg-dark-main border-b-light-500/40 p-2 pt-5 bg-white outline-none [transition:all_300ms] border-2 border-transparent lg:text-lg text-slate-500 dark:bg-dark-main dark:border-dark-pink dark:text-slate-50 rounded-sm w-full focus:border-2 focus:border-light-500 focus:rounded-md focus:bg-white dark:caret-dark-pink font-medium'
              />
              <label
                htmlFor='name'
                className='absolute font-bold text-light-500 opacity-60 left-4 top-7 text-lg [transition:all_400ms] dark:text-dark-pink'>
                {engLanguageActive ? 'Name' : 'Nombre'}
              </label>
            </div>
            <div className='input_field_container flex flex-col items-start gap-4 relative w-full bg-white dark:bg-dark-main'>
              <p className='font-semibold text-slate-500 dark:text-slate-300 flex items-center text-base lg:text-sm gap-2'>
                <span>
                  <IoInformationCircle className='text-2xl text-light-500/85 dark:text-dark-sky absolute left-[-1em] top-[0.3em]' />
                </span>
                Puedes darme los detalles de tu idea o contarme de que manera
                puedo ayudarte.
              </p>
              <textarea
                name='message'
                maxLength={200}
                onChange={(e) => {
                  lengthControl(e);
                  captureValues(e);
                }}
                className='border-light-500/40  p-2 bg-white outline-none [transition:border_400ms] text-2xl lg:text-lg text-slate-500 resize-none h-[12em] w-full dark:bg-dark-main dark:text-slate-200 rounded-md border-2 font-medium focus:border-light-500 dark:border-dark-pink focus:dark:border-dark-pink'></textarea>
              <span className='absolute right-4 bottom-5 font-semibold dark:text-zinc-300 opacity-50  text-base lg:text-sm'>
                {textAreaLength}/200
              </span>
            </div>
            <button
              type='submit'
              onClick={succesMessage}
              className='bg-light-500 py-3 w-full text-slate-50 rounded-md text-lg font-bold hover:bg-light-500/75 duration-200 hover:duration-200 active:scale-90 dark:bg-dark-sky dark:hover:bg-dark-sky/70 relative bottom-8'>
              {engLanguageActive ? 'Send' : 'Enviar'}
            </button>
          </motion.form>
        </div>
      </main>
      <Footer />
      <Toaster />
    </>
  );
};

export default Contact;
