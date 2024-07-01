import { FiGithub } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const Social = () => {
  return (
    <ul className='flex gap-12'>
      <Link
        href={'https://github.com/SebaPerez90'}
        target='_blank'
        aria-label='social-network-link'
        className='cursor-pointer relative before:absolute before:w-9 before:h-9 before:bg-black before:-z-10 before:-left-[0.6em] before:-bottom-[0.6em] before:rounded-full text-white  after:absolute after:left-0 after:bottom-0 after:w-full after:h-full dark:hover:after:bg-[#ffffff2a] hover:after:bg-[#00000023] after:duration-150 after:rounded-full after:scale-[3.5] active:scale-90 after:z-10 social-network'>
        <FiGithub />
        <span className='absolute -left-3 top-11 text-[#333333be] dark:text-slate-200 opacity-0 font-semibold text-xs'>
          Github
        </span>
      </Link>
      <Link
        href={'https://x.com/_SebaPerez_'}
        target='_blank'
        aria-label='social-network-link'
        className='cursor-pointer relative before:absolute before:w-9 before:h-9 before:bg-black before:-z-10 before:-left-[0.6em] before:-bottom-[0.6em] before:rounded-full text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-full dark:hover:after:bg-[#ffffff2a] hover:after:bg-[#00000023] after:duration-150 after:rounded-full after:scale-[3.5] active:scale-90 after:z-10 social-network'>
        <FaXTwitter />
        <span className='absolute -left-3 top-11 text-[#333333be] dark:text-slate-200 opacity-0 font-semibold text-xs'>
          Twitter
        </span>
      </Link>
      <Link
        href={'https://www.linkedin.com/in/sebaperez90/'}
        target='_blank'
        aria-label='social-network-link'
        className='cursor-pointer relative before:absolute before:w-9 before:h-9 before:bg-light-400 before:-z-10 before:-left-[0.6em] before:-bottom-[0.6em] before:rounded-full text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-full dark:hover:after:bg-[#ffffff2a] hover:after:bg-[#00000023] after:duration-150 after:rounded-full after:scale-[3.5] active:scale-90 after:z-10 social-network'>
        <FaLinkedinIn />
        <span className='absolute -left-3 top-11 text-[#333333be] dark:text-slate-200 opacity-0 font-semibold text-xs'>
          LinkedIn
        </span>
      </Link>
    </ul>
  );
};

export default Social;
