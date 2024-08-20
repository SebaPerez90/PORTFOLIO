'use client';
import { useStore } from '@/context/store';
import { useEffect } from 'react';

const links = [
  {
    section: '#experience-section',
    icon: '👨‍💼',
    infoEn: 'experience',
    infoEs: 'experiencia',
  },
  {
    section: '#projects-section',
    icon: '💼',
    infoEn: 'portfolio',
    infoEs: 'portfolio',
  },
  {
    section: '#skills-section',
    icon: '💻',
    infoEn: 'skills',
    infoEs: 'habilidades',
  },
  {
    section: '#services-section',
    icon: '💡',
    infoEn: 'services',
    infoEs: 'servicios',
  },
];

const SideMenu = () => {
  const { engLanguageActive } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      const side_menu: HTMLElement | null =
        document.getElementById('side-menu');

      if (window.scrollY > 450) {
        side_menu!.classList.replace('max-[550px]:opacity-0', 'opacity-1');
      } else {
        side_menu!.classList.replace('opacity-1', 'max-[550px]:opacity-0');
      }
    };

    handleScroll();
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <ul
      id='side-menu'
      className='fixed left-2 top-[30%] z-50 max-[550px]:opacity-0 flex items-center flex-col gap-8 [transition:all_600ms]'>
      <div className='w-[2px] h-full bg-light-500/40 dark:bg-dark-pink/40 absolute z-10'></div>
      {links.map((link, index) => (
        <li
          key={index}
          className='rounded-full bg-[#8f8fff] z-20 links dark:bg-[#894166] hover:bg-light-500 hover:dark:bg-dark-pink duration-700 hover:duration-200 w-10 text-center py-2'>
          <a
            className='relative cursor-pointer'
            href={link.section}>
            {link.icon}
            <span className='absolute text-sm left-9 opacity-0 [transition:all_200ms] dark:text-slate-200'>
              {engLanguageActive ? link.infoEn : link.infoEs}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SideMenu;
