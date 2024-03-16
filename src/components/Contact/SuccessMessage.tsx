import { motion } from 'framer-motion';

const SuccessMessage = ({ formData }: any) => {
  return (
    <motion.div
      transition={{ duration: 2 }}
      whileInView={{ backgroundColor: '#fff' }}>
      <h1 className='h-56 w-full rounded-lg'>
        hi! {formData.name} message has been send successfully 😃
      </h1>
      <p></p>
    </motion.div>
  );
};

export default SuccessMessage;
