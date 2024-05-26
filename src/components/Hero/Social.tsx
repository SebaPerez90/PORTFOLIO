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
        className='cursor-pointer relative before:absolute before:w-9 before:h-9 before:bg-black before:-z-10 before:-left-[0.6em] before:-bottom-[0.6em] before:rounded-full text-white'>
        <FiGithub />
      </Link>
      <Link
        href={'https://x.com/_SebaPerez_'}
        target='_blank'
        aria-label='social-network-link'
        className='cursor-pointer relative before:absolute before:w-9 before:h-9 before:bg-black before:-z-10 before:-left-[0.6em] before:-bottom-[0.6em] before:rounded-full text-white'>
        <FaXTwitter />
      </Link>
      <Link
        href={'https://www.linkedin.com/in/sebaperez90/'}
        target='_blank'
        aria-label='social-network-link'
        className='cursor-pointer relative before:absolute before:w-9 before:h-9 before:bg-light-400 before:-z-10 before:-left-[0.6em] before:-bottom-[0.6em] before:rounded-full text-white'>
        <FaLinkedinIn />
      </Link>
    </ul>
  );
};

export default Social;


