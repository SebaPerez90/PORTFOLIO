import { FiGithub } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const Social = () => {
  return (
    <ul className='max-[520px]:flex-row flex flex-col gap-10'>
      <Link
        href={'https://github.com/SebaPerez90'}
        target='_blank'
        aria-label='social-network-link'
        className='cursor-pointer relative before:absolute before:w-9 before:h-9 before:bg-black before:-z-10 before:-left-[0.6em] before:-bottom-[0.6em] before:rounded-full text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-full dark:hover:after:bg-[#ffffff2a] hover:after:bg-[#00000023] after:duration-150 after:rounded-full after:scale-[3.5] active:scale-90 after:z-10'>
        <FiGithub />
      </Link>
      <Link
        href={'https://x.com/_SebaPerez_'}
        target='_blank'
        aria-label='social-network-link'
        className='cursor-pointer relative before:absolute before:w-9 before:h-9 before:bg-black before:-z-10 before:-left-[0.6em] before:-bottom-[0.6em] before:rounded-full text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-full dark:hover:after:bg-[#ffffff2a] hover:after:bg-[#00000023] after:duration-150 after:rounded-full after:scale-[3.5] active:scale-90 after:z-10'>
        <FaXTwitter />
      </Link>
      <Link
        href={'https://www.linkedin.com/in/sebaperez90/'}
        target='_blank'
        aria-label='social-network-link'
        className='cursor-pointer relative before:absolute before:w-9 before:h-9 before:bg-light-400 before:-z-10 before:-left-[0.6em] before:-bottom-[0.6em] before:rounded-full text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-full dark:hover:after:bg-[#ffffff2a] hover:after:bg-[#00000023] after:duration-150 after:rounded-full after:scale-[3.5] active:scale-90 after:z-10'>
        <FaLinkedinIn />
      </Link>
    </ul>
  );
};

export default Social;

/**<Link
            target='_blank'
            href={'https://github.com/SebaPerez90'}
            aria-label='social-network-btn'
            className='relative before:absolute before:left-0 before:bottom-0 before:w-full before:h-full dark:hover:before:bg-[#ffffff2a] hover:before:bg-[#00000023] before:duration-150 before:rounded-full before:scale-[1.9] before:-z-10 text-white bg-black text-3xl  rounded-full hover:outline hover:outline-1 hover:outline-white'>
            <FaGithub />
          </Link> */
