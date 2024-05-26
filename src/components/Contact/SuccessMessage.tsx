import { motion } from 'framer-motion';
import { useStore } from '@/context/store';
import { useState } from 'react';

import ContactForm from '@/components/Contact/ContactForm';

const SuccessMessage = ({ formData }: any) => {
  const { engLanguageActive } = useStore();
  const [refresh, setRefresh] = useState(false);

  const reRenderForm = () => {
    const message_container = document.getElementById('main-container');

    setRefresh(!refresh);
    message_container ? (message_container.innerHTML = '') : '';

    if (!refresh && message_container) {
      {
        engLanguageActive
          ? (message_container.innerHTML =
              '<h1 class="dark:text-white text-[#333333] font-extrabold text-3xl">Thanks for you feedback 🙂</h1>')
          : (message_container.innerHTML =
              '<h1 class="dark:text-white text-[#333333] font-extrabold text-3xl">Gracias por tu aporte 🙂</h1>');
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      transition={{ delay: 0.7 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      id='main-container'
      className='z-40 relative left-[-1.5em] md:absolute md:left-0 top-0 w-full h-[465px] md:h-full justify-center items-center flex-col flex'>
      <div className='px-3 text-2xl font-normal text-center text-[#333333] dark:text-slate-50'>
        <h1 className=''>
          {engLanguageActive ? 'Thanks ' : 'Gracias '}
          <strong className='capitalize text-3xl font-bold text-light-500 dark:text-theme_dark-sup-pink'>
            {formData.name}
          </strong>
          !
        </h1>
        <p>
          {engLanguageActive
            ? 'your message has ben send successfully...'
            : ' tu mensaje fué enviada exitosamente...'}
        </p>
      </div>
      <button
        aria-label='reRender-switch'
        className='btn-light mt-14'
        onClick={reRenderForm}>
        {engLanguageActive ? 'Send other message' : 'Envia otro mensaje'}
      </button>
      {refresh && (
        <div className='translate-y-[-4.5em]'>
          <ContactForm />
        </div>
      )}
    </motion.div>
  );
};

export default SuccessMessage;
