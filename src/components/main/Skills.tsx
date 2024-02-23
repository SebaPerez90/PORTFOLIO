import { useStore } from '@/store';
import { Roboto } from 'next/font/google';

import addSvgIcon from '@/data/addSvgIcon';

import Image from 'next/image';
import mobile from '@/assets/images/mobile.webp';
import desktop from '@/assets/images/desktop.webp';
import team from '@/assets/images/team.webp';

const roboto = Roboto({
  weight: ['900'],
  subsets: ['latin'],
});

interface Skills {
  title: string;
  skills: string[];
}

const Skills = () => {
  const { engLanguageActive } = useStore();

  const skills: Skills[] = [
    {
      title: 'FRONT-END',
      skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS', 'Javascript', 'Sass'],
    },
    {
      title: 'BACK-END',
      skills: ['Node.js', 'Express.js', 'SQLite'],
    },
    {
      title: 'LEARNING',
      skills: ['TypeScript', 'Next.js', 'MongoDB'],
    },
  ];

  return (
    <section
      id='projects-section'
      className='mt-20 w-[80%] flex flex-col justify-center items-center'>
      <h1
        className='text-3xl opacity-5 [letter-spacing:15px] text-[#313131] '
        style={roboto.style}>
        {engLanguageActive ? 'SKILLS & SERVICES' : 'HABILIDADES Y SERVICIOS '}🤓
      </h1>
      <section>
        <div>
          <Image src={mobile} alt='mobile-icon' className='w-auto h-auto' />
        </div>
      </section>
      <section className='gap-8 w-full flex justify-around my-8'>
        {skills.map((item, index) => (
          <div
            className='overflow-hidden bg-white gap-4 flex flex-col justify-center w-full shadow-[14px_30px_20px_-10px_#0000004f] rounded-md'
            key={index}>
            <h1 className='text-[#333333ac] [letter-spacing:5px] text-2xl font-extrabold text-white text-center relative bottom-4'>
              {item.title}
            </h1>
            <ul className='px-8  gap-6 flex-wrap flex flex-col justify-around items-start h-[50%] w-full '>
              {item.skills.map((skill, index) => (
                <li
                  className='text-xs cursor-defaul font-semibold text-[#3333339e] gap-2 flex items-center w-max'
                  key={index}>
                  {/* Insert dynamically the icon corresponding to the value of item.skill */}
                  {addSvgIcon(skill)}
                  <p>{skill}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Skills;
