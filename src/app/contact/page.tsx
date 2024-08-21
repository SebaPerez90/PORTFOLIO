'use client';

import benefits from '@/utils/benefits.json';
import { useStore } from '@/context/store';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { IFormData } from '../../interface/form-data.interface';
import Image from 'next/image';
import contact from '@/assets/svgs/contact.svg';
import Footer from '@/components/Footer';
import { BiSolidZap } from 'react-icons/bi';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { IoInformationCircle } from 'react-icons/io5';
import NavLinks from '@/components/NavBar/NavLinks';

const Contact = () => {
  const { engLanguageActive } = useStore();
  const [textAreaLength, setTextAreaLength] = useState<number>(0);
  const [wrongEmail, setWrongEmail] = useState<boolean>(true);
  const [formData, setFormData] = useState<IFormData>({
    subject: '',
    name: '',
    email: '',
    message: '',
  });

  const router = useRouter();
  const send_btn = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // Disable the send button function until the fields are completed
    if (
      wrongEmail === false &&
      formData.email &&
      formData.name &&
      formData.subject &&
      formData.message
    ) {
      send_btn.current?.classList.replace('btn_disabled', 'btn_primary');
    } else if (wrongEmail === true) {
      send_btn.current?.classList.replace('btn_primary', 'btn_disabled');
    }
  }, [
    formData.email,
    formData.message,
    formData.name,
    formData.subject,
    wrongEmail,
  ]);

  const lengthControl = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaLength(e.target.selectionEnd);
  };

  const captureValues = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'name') {
      const updatedValue = value.replace(/[^a-zA-Z\s]/g, '');
      setFormData({ ...formData, [name]: updatedValue });
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(value)) {
        setFormData({ ...formData, [name]: value });
        setWrongEmail(false);
      } else {
        setWrongEmail(true);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const sendForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_FORMSPREE_SERVICE}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error('Error al registrar');
      const data = await response.json();

      setTimeout(() => {
        router.push('/');
      }, 3000);

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const succesMessage = (e: FormEvent<HTMLFormElement>) => {
    const myPromise = sendForm(e);

    toast.promise(
      myPromise,
      {
        loading: engLanguageActive ? 'Sending data...' : 'Enviando datos...',
        success: engLanguageActive ? 'Message sent!' : 'Mensaje enviado!',
        error: engLanguageActive ? 'An error occurred' : 'Ocurrio un error',
      },
      {
        style: {
          width: '260px',
          textAlign: 'center',
          padding: '1.1em',
          fontSize: '1.3em',
        },
        success: {
          duration: 3000,
        },
      }
    );
  };

  return (
    <>
      <NavLinks />
      <main
        id='contact-section'
        className='flex flex-col items-center bg-white dark:bg-dark-main gap-24 pb-48 lg:pb-24 pt-28'>
        <div className='flex flex-col items-center gap-5'>
          <h1 className='font-extrabold text-5xl text-balance text-[#333333e3] dark:text-white text-center mx-4'>
            <strong className='text-light-500/80 dark:text-dark-pink text-6xl'>
              {engLanguageActive ? 'Contact me' : 'Contáctame'}
            </strong>
            <br></br>
            <strong className='text-4xl [line-height:2em]'>
              {engLanguageActive ? 'and' : 'y'}
            </strong>
            <br></br>
            {engLanguageActive
              ? 'Bring your project to life!'
              : 'Dale vida a tu proyecto!'}
          </h1>
          <h2 className='text-center mx-6 font-medium text-xl text-slate-500/85 dark:text-slate-300'>
            {engLanguageActive
              ? 'Digitize your business now and boost your profits '
              : 'Digitalizá tu negocio ahora y potencia tus ingresos '}
            🚀
          </h2>
        </div>
        <div className='[width:clamp(300px,90%,1200px)] mx-8 flex h-full justify-around items-start flex-wrap gap-12'>
          <div className='flex flex-col justify-start items-center sm:items-start gap-8 '>
            <motion.div
              transition={{
                bounce: 0.6,
                duration: 1.5,
                type: 'spring',
              }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className='flex items-start  flex-col gap-3'>
              <ul className='self-start mt-6'>
                <p className='mb-4 font-extrabold text-xl border-b-2 border-light-500/70 dark:text-dark-pink text-light-500/90 dark:border-dark-pink'>
                  {engLanguageActive ? 'Benefits' : 'Beneficios'}
                </p>
                {benefits.map((element, index) => (
                  <li
                    key={index}
                    className='text-[#333333be] font-semibold text-lg flex items-center mt-3 gap-1 dark:text-slate-300'>
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
              className='h-[350px] w-[350px] animate-[appearContent_300ms_ease-out]'
            />
          </div>
          <form
            name='contact-form'
            method='POST'
            onSubmit={succesMessage}
            className='flex flex-col justify-around gap-7 w-[35em] md:w-[25em] animate-[disappearContent_900ms_ease]'>
            <div className='input_field_container relative w-full bg-white dark:bg-dark-main'>
              <input
                required={true}
                value={formData.subject}
                autoComplete='off'
                type='text'
                name='subject'
                id='subject'
                onChange={(e) => {
                  captureValues(e);
                }}
                className='text-2xl dark:border-dark-pink dark:focus:border-dark-pink dark:focus:bg-dark-main border-light-500/50 p-4 bg-white outline-none [transition:all_300ms] border-2 lg:text-lg text-slate-600 dark:bg-dark-main dark:text-slate-50  w-full focus:border-2 focus:border-light-500 focus:rounded-md focus:bg-white dark:caret-dark-pink font-medium rounded-md'
              />
              <label
                htmlFor='subject'
                className='absolute font-bold text-light-500/80  left-4 top-5 text-lg [transition:all_400ms] dark:text-dark-pink'>
                {engLanguageActive ? 'Subject' : 'Asunto'}
              </label>
            </div>
            <div className='input_field_container relative w-full bg-white dark:bg-dark-main'>
              <input
                required={true}
                value={formData.name}
                autoComplete='off'
                type='text'
                name='name'
                id='name'
                onChange={(e) => {
                  captureValues(e);
                }}
                className='capitalize text-2xl dark:focus:border-dark-pink dark:focus:bg-dark-main border-light-500/50 p-4 bg-white outline-none [transition:all_300ms] border-2 lg:text-lg text-slate-600 dark:bg-dark-main dark:border-dark-pink dark:text-slate-50  w-full focus:border-2 focus:border-light-500 focus:rounded-md focus:bg-white dark:caret-dark-pink font-medium rounded-md'
              />
              <label
                htmlFor='name'
                className='absolute font-bold text-light-500/80 left-4 top-5 text-lg [transition:all_400ms] dark:text-dark-pink'>
                {engLanguageActive ? 'Full name' : 'Nombre completo'}
              </label>
            </div>
            <div className='input_field_container relative w-full bg-white dark:bg-dark-main'>
              <input
                required={true}
                autoComplete='off'
                type='text'
                name='email'
                id='email'
                onChange={(e) => {
                  captureValues(e);
                }}
                className='lowercase text-2xl dark:focus:border-dark-pink dark:focus:bg-dark-main border-light-500/50 p-4 bg-white outline-none [transition:all_300ms] border-2 lg:text-lg text-slate-600 dark:bg-dark-main dark:border-dark-pink dark:text-slate-50  w-full focus:border-2 focus:border-light-500 focus:rounded-md focus:bg-white dark:caret-dark-pink font-medium rounded-md'
              />
              <label
                htmlFor='email'
                className='absolute font-bold text-light-500/80 left-4 top-5 text-lg [transition:all_400ms] dark:text-dark-pink'>
                {engLanguageActive ? 'Email' : 'Correo electrónico'}
              </label>
              {wrongEmail ? (
                <span className='absolute flex items-center gap-1 font-medium w-max left-0 -bottom-8 text-red-700'>
                  <IoInformationCircle />
                  {engLanguageActive ? 'Enter a valid email address' : 'Ingresa una dirección de email válido'}
                </span>
              ) : null}
            </div>
            <div className='input_field_container flex flex-col items-start gap-4 relative w-full mt-6 bg-white dark:bg-dark-main'>
              <textarea
                name='message'
                maxLength={200}
                onChange={(e) => {
                  lengthControl(e);
                  captureValues(e);
                }}
                className='border-light-500/40  p-4 bg-white outline-none [transition:border_400ms] text-2xl lg:text-lg text-slate-600 resize-none h-[12em] w-full dark:bg-dark-main dark:text-slate-200 rounded-md border-2 font-medium focus:border-light-500 dark:border-dark-pink focus:dark:border-dark-pink
                '></textarea>
              <span className='absolute right-4 bottom-5 font-semibold dark:text-zinc-300 opacity-50  text-base lg:text-sm'>
                {textAreaLength}/200
              </span>
            </div>
            <button
              ref={send_btn}
              type='submit'
              className='btn_primary'>
              {engLanguageActive ? 'Send' : 'Enviar'}
            </button>
          </form>
        </div>
      </main>
      <Footer />
      <Toaster />
    </>
  );
};

export default Contact;
