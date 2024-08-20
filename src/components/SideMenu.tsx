const links = [
  {
    section: '#experience-section',
    icon: '👨‍💼',
    info: 'experience',
  },
  {
    section: '#projects-section',
    icon: '💼',
    info: 'portfolio',
  },
  {
    section: '#skills-section',
    icon: '💻',
    info: 'skills',
  },
  {
    section: '#services-section',
    icon: '💡',
    info: 'services',
  },
];

const SideMenu = () => {
  return (
    <ul className='fixed left-4 top-[40%] z-50 flex flex-col gap-6'>
      {links.map((link, index) => (
        <li
          key={index}
          className='rounded-full p-2 bg-light-500/40 links'>
          <a
            className='relative cursor-pointer'
            href={link.section}>
            {link.icon}
            <span className='absolute text-sm left-9 opacity-0 [transition:all_200ms]'>
              {link.info}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SideMenu;
