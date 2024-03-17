import { useStore } from '@/context/store';
import { motion } from 'framer-motion';

import Image from 'next/image';
import form_image from '@/assets/images/candidate.webp';

const ImageForm = ({ formSendSuccessfully }: any) => {
  const { engLanguageActive } = useStore();

  return (
    <motion.div
      transition={{
        duration: 4,
        delay: 0.4,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className='hidden md:flex z-20 flex-col items-center justify-center'>
      <h1
        style={
          formSendSuccessfully ? { opacity: '0', transition: '600ms' } : {}
        }
        className='w-[80%] italic text-lg text-[#4d4d4dda] font-semibold  text-center bg-gradient-to-bl from-inherit border to-[#e9e9e9] [clip-path:polygon(0%_0%,100%_0%,100%_73.5%,59.5%_73.5%,54.75%_100%,50%_73.5%,0%_73.5%)] max-[900px]:translate-y-[3em] py-12 px-8 pb-24 [transform:translate(-0.5em,3em)] z-20 dark:to-theme_dark-sup-pink dark:from-theme_dark-sup-pink dark:text-slate-50'>
        {engLanguageActive
          ? '"Let me know how I can serve you! "'
          : 'Déjame saber en que puedo servirte'}
      </h1>
      <Image
        style={
          formSendSuccessfully ? { opacity: '0', transition: '600ms' } : {}
        }
        src={form_image}
        priority
        alt='form-image-reference'
        className='z-10 w-[20em] h-[20em] opacity-75 max-[900px]:w-[15em] max-[900px]:h-auto'
      />
    </motion.div>
  );
};

export default ImageForm;
