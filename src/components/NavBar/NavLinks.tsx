import Link from 'next/link';
import { useStore } from '@/context/store';
import Preferences from './Preferences';

const navLinks = [
  {
    titleES: 'Experiencia',
    titleEN: 'Experience',
    label: 'experience-link',
    url: '#experience-section',
  },
  {
    titleES: 'Sobre mi',
    titleEN: 'About',
    label: 'about-link',
    url: '#about-section',
  },
  {
    titleES: 'Proyectos',
    titleEN: 'Projects',
    label: 'projects-link',
    url: '#projects-section',
  },
];

const NavLinks = () => {
  const { engLanguageActive } = useStore();

  return (
    <header className='flex justify-between w-full fixed left-0 top-0 z-50 p-[1em_4em]'>
      <span className='dark:text-slate-200 text-[#333333be] font-bold text-sm'>
        SebaPerez.
      </span>
      <nav
        id='nav-bar'
        className='flex gap-7 dark:text-slate-200 text-[#333333be] font-bold text-sm'>
        {navLinks.map((element, index) => (
          <Link
            className=''
            key={index}
            href={element.url}
            aria-label={element.label}>
            {engLanguageActive ? element.titleEN : element.titleES}
          </Link>
        ))}
      </nav>
      <Preferences />
    </header>
  );
};

export default NavLinks;
