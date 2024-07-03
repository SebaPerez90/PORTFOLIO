import { useState } from 'react';
import { motion } from 'framer-motion';
import navLinks from '@/utils/nav-links.json';
import Link from 'next/link';
import { useStore } from '@/context/store';
import { IoMdHome } from 'react-icons/io';
import { FaUserTie } from 'react-icons/fa6';
import { HiOutlineMailOpen } from 'react-icons/hi';

const HamburguerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { engLanguageActive } = useStore();

  const openMenu = () => {
    const line_a = document.getElementById('line_a');
    const line_b = document.getElementById('line_b');
    const line_c = document.getElementById('line_c');

    if (isOpen === false) {
      line_a!.classList.add('[rotate:45deg]', 'top-2');
      line_b!.classList.add('opacity-0');
      line_c!.classList.add('[rotate:-45deg]', 'bottom-2');
      setIsOpen(true);
    } else {
      line_a!.classList.remove('[rotate:45deg]', 'top-2');
      line_b!.classList.remove('opacity-0');
      line_c!.classList.remove('[rotate:-45deg]', 'bottom-2');
      setIsOpen(false);
    }
  };

  const renderIcon = (url: string) => {
    switch (url) {
      case '/':
        return <IoMdHome />;
      case '/contact':
        return <HiOutlineMailOpen />;
      case '/about':
        return <FaUserTie />;
    }
  };

  return (
    <div className='relative'>
      <div
        aria-label='button-menu'
        className='md:hidden flex flex-col gap-1 cursor-pointer absolute left-2 -top-2 z-50'
        onClick={openMenu}>
        <span
          id='line_a'
          className='relative w-8 h-1 bg-light-500 rounded-lg duration-200 dark:bg-theme_dark-sup-pink'></span>
        <span
          id='line_b'
          className='relative w-8 h-1 bg-light-500 rounded-lg duration-200 dark:bg-theme_dark-sup-pink'></span>
        <span
          id='line_c'
          className='relative w-8 h-1 bg-light-500 rounded-lg duration-200 dark:bg-theme_dark-sup-pink'></span>
      </div>
      {isOpen && (
        <motion.div
          transition={{
            type: 'spring',
            bounce: 0.5,
            staggerChildren: 0.4,
          }}
          initial={{ x: 100, opacity: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          className='absolute z-30 w-[15em] h-[20em] -right-20 -top-7 bg-[#fbfbfb] dark:bg-theme_dark-box-thir rounded-[0_0_0_0.7em] border border-light-500/20 dark:border-theme_dark-sup-pink/30'>
          <motion.nav
            transition={{ delay: 0.2 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='flex flex-col items-center h-full justify-evenly dark:text-slate-200 text-[#333333be] font-bold text-sm z-50'>
            {navLinks.map((element, index) => (
              <Link
                className='duration-200 hover:duration-200 hover:text-light-500 dark:hover:text-theme_dark-sup-pink z-50 flex items-center gap-2'
                key={index}
                href={element.url}
                aria-label={element.label}>
                <span className='text-light-500 dark:text-theme_dark-sup-pink text-xl relative bottom-1'>
                  {renderIcon(element.url)}
                </span>
                {engLanguageActive ? element.titleEN : element.titleES}
              </Link>
            ))}
          </motion.nav>
        </motion.div>
      )}
    </div>
  );
};

export default HamburguerMenu;
