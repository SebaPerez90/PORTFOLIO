interface NavLinks {
  titleES: string;
  titleEN: string;
  label: string;
  url: string;
}

const navLinks: NavLinks[] = [
  {
    titleES: 'experiencia',
    titleEN: 'experience',
    label: 'experience-link',
    url: '#experience-section',
  },
  {
    titleES: 'sobre mi',
    titleEN: 'about',
    label: 'about-link',
    url: '#about-section',
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

export default navLinks;
