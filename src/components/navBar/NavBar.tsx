import Link from 'next/link';

import { useStore } from '@/context/store';

import ThemeButtons from '@/components/NavBar/ThemeButtons';

interface NavLinks {
  titleES: string;
  titleEN: string;
  label: string;
  url: string;
}

const navLinks: NavLinks[] = [
  {
    titleES: 'sobre mi',
    titleEN: 'about',
    label: 'about-link',
    url: '#about-section',
  },
  {
    titleES: 'experiencia',
    titleEN: 'experience',
    label: 'experience-link',
    url: '#experience-section',
  },
  {
    titleES: 'proyectos',
    titleEN: 'projects',
    label: 'projects-link',
    url: '#projects-section',
  },
  {
    titleES: 'servicios',
    titleEN: 'services',
    label: 'services-link',
    url: '#services-section',
  },
  {
    titleES: 'contáctame',
    titleEN: 'contact me',
    label: 'contact-link',
    url: '#contact-section',
  },
];

const NavBar = ({ visibility }: any) => {
  const { engLanguageActive } = useStore();

  const handleScroll = () => {
    document.addEventListener('scroll', () => {
      const nav_bar: HTMLElement | null = document.getElementById('nav-bar');

      if (window.innerWidth > 640) {
        if (window.scrollY !== 0) {
          nav_bar?.classList.add('sticky-navbar');
        } else nav_bar?.classList.remove('sticky-navbar');
      } else if (nav_bar) {
        nav_bar.style.backdropFilter = 'blur(5px)';
      }
    });
  };
  handleScroll();

  const conditionalStyles = {
    right: '0em',
  };

  return (
    <nav
      id='nav-bar'
      style={visibility ? conditionalStyles : {}}
      className='dark:border sm:p-[0.7em_1.5em]  dark:border-slate-500/30 bg-[#eeeeeeaa] sm:bg-[#eeeeee81] dark:bg-[#0000008e] sm:dark:bg-[#0000004a] border border-slate-500/10 sm:rounded-full flex sm:right-0 sm:flex-row sm:items-center sm:lowercase sm:duration-300 sm:gap-6 sm:relative  sm:top-2 capitalize flex-col rounded-[0_0_0_0.4em] 
      p-[2em_3em_1.5em_1.5em] top-0 items-start right-[-14em] absolute gap-10 duration-500'>
      {navLinks.map((item, index) => (
        <Link
          className=' dark:hover:text-theme_dark-sup-pink duration-300 hover:text-light-900 dark:text-white text-[#333333] font-semibold '
          aria-label={item.label}
          href={item.url}
          key={index}>
          {engLanguageActive ? item.titleEN : item.titleES}
        </Link>
      ))}
      <ThemeButtons />
    </nav>
  );
};

export default NavBar;
