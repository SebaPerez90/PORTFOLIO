import { motion } from 'framer-motion';
import { useStore } from '@/context/store';

const SuccessMessage = ({ formData }: any) => {
  const { engLanguageActive } = useStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      transition={{ delay: 0.7 }}
      whileInView={{ opacity: 1, y: 0 }}
      className=' absolute left-0 top-0 w-full h-full justify-center items-center flex'>
      <div className='text-2xl font-normal text-center text-slate-50'>
        <h1 className=''>
          Thanks{' '}
          <strong className='capitalize text-3xl font-bold text-theme_dark-sup-pink'>
            {formData.name}
          </strong>
          !
        </h1>
        <p>your message has ben send successfully ...</p>
      </div>
    </motion.div>
  );
};

export default SuccessMessage;
