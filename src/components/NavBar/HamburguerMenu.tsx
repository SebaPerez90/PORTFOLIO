import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import navLinks from '@/utils/nav-links.json';
import Link from 'next/link';
import { useStore } from '@/context/store';
import { IoMdHome } from 'react-icons/io';
import { FaUserTie } from 'react-icons/fa6';
import { HiOutlineMailOpen } from 'react-icons/hi';
import LanguageButtons from './LanguageButtons';
import { IoMdSettings } from 'react-icons/io';
import { IoSunny } from 'react-icons/io5';
import { BsMoonStarsFill } from 'react-icons/bs';
import { usePathname } from 'next/navigation';

const HamburguerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { engLanguageActive } = useStore();
  const pathname = usePathname();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const openMenu = () => {
    const line_a = document.getElementById('line_a');
    const line_b = document.getElementById('line_b');
    const line_c = document.getElementById('line_c');
    const main_section = document.getElementById('main-section');
    const contact_section = document.getElementById('contact-section');
    const footer_section = document.getElementById('footer-section');
    const about_section = document.getElementById('about-section');

    if (isOpen === false) {
      line_a!.classList.add('[rotate:45deg]', 'top-2');
      line_b!.classList.add('opacity-0');
      line_c!.classList.add('[rotate:-45deg]', 'bottom-2');
      main_section?.classList.add('[filter:blur(5px)]');
      contact_section?.classList.add('[filter:blur(5px)]');
      footer_section?.classList.add('[filter:blur(5px)]');
      about_section?.classList.add('[filter:blur(5px)]');
      setIsOpen(true);
    } else {
      line_a!.classList.remove('[rotate:45deg]', 'top-2');
      line_b!.classList.remove('opacity-0');
      line_c!.classList.remove('[rotate:-45deg]', 'bottom-2');
      main_section?.classList.remove('[filter:blur(5px)]');
      contact_section?.classList.remove('[filter:blur(5px)]');
      footer_section?.classList.remove('[filter:blur(5px)]');
      about_section?.classList.remove('[filter:blur(5px)]');
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
    <div className='relative min-[500px]:hidden'>
      <div
        aria-label='button-menu'
        className='min-[500px]:hidden flex flex-col gap-1 cursor-pointer absolute left-2 -top-2 z-[70]'
        onClick={openMenu}>
        <span
          id='line_a'
          className='relative w-8 h-1 bg-light-500 rounded-lg duration-200 dark:bg-dark-pink'></span>
        <span
          id='line_b'
          className='relative w-8 h-1 bg-light-500 rounded-lg duration-200 dark:bg-dark-pink'></span>
        <span
          id='line_c'
          className='relative w-8 h-1 bg-light-500 rounded-lg duration-200 dark:bg-dark-pink'></span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            transition={{
              type: 'spring',
              bounce: 0.5,
              staggerChildren: 0.4,
            }}
            initial={{ x: 100, opacity: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0, width: 0 }}
            className='[box-shadow:-4px_10px_27px_0px_rgba(0,0,0,0.11)] absolute z-50 w-[21em] h-[25em] -right-20 -top-10 bg-[#fbfbfb] dark:bg-dark-tertiary rounded-[0_0_0_0.7em] overflow-hidden'>
            <motion.nav
              transition={{ delay: 0.2 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='flex flex-col items-center h-full justify-evenly dark:text-slate-200  font-bold text-sm z-[60] relative before:absolute before:h-full before:w-20 before:bg-light-500 before:left-0 before:bottom-0 dark:before:bg-dark-pink text-[#4d4dff80]'>
              {navLinks.map((element, index) => (
                <Link
                  className='duration-200 hover:duration-200 hover:text-light-500/50 dark:hover:text-dark-pink z-50 flex items-center gap-2 text-slate-600 dark:text-slate-50'
                  key={index}
                  href={element.url}
                  style={
                    pathname === element.url
                      ? {
                          color: 'inherit',
                          fontWeight: 'bolder',
                          transition: '200ms',
                        }
                      : undefined
                  }
                  aria-label={element.label}>
                  <span className='text-light-50 text-xl absolute left-8'>
                    {renderIcon(element.url)}
                  </span>
                  {engLanguageActive ? element.titleEN : element.titleES}
                </Link>
              ))}
              <div className='flex items-center gap-4 ml-3'>
                <IoMdSettings
                  style={{
                    position: 'absolute',
                    left: '2rem',
                    color: '#e8f1ff',
                    fontSize: '1.25rem',
                    lineHeight: ' 1.75rem',
                  }}
                />
                <button
                  className='text-2xl font-extrabold text-light-500 dark:text-dark-pink active:scale-75 active:outline active:outline-2 active:outline-light-500/50 rounded-full p-2'
                  onClick={() => setTheme(theme === 'dark' ? 'ligth' : 'dark')}>
                  {theme === 'dark' ? <BsMoonStarsFill /> : <IoSunny />}
                </button>
                <LanguageButtons />
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburguerMenu;
