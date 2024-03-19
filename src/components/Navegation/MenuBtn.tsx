import { useState } from 'react';
import openMenu from './utils';
import NavBar from './NavBar';

const MenuBtn = () => {
  const [active, setActive] = useState(false);
  const [visibility, setVisibility] = useState(false);

  return (
    // <header className='z-50 duration-300 flex justify-center w-full fixed'>
    <header className='z-50 top-0 duration-300 w-full fixed'>
      <div className='justify-center items-center flex sm:hidden z-50 absolute right-12 top-8'>
        <span className='sr-only'>
          This button is rendered on screen widths less than 640px
        </span>
        <button
          id='hamburguer-menu'
          onClick={() => openMenu(active, setActive, visibility, setVisibility)}
          aria-label='expand-collapse-menu'
          className='active:scale-90 hamb-menu flex flex-col relative before:absolute before:left-[-1.3em] before:top-[-1.9em] before:w-full before:h-full before:rounded-full hover:before:bg-slate-50/10 before:p-8 hover:before:duration-150'>
          <span
            id='bar_1'
            className='right-[-2em] absolute duration-100 top-3 h-1 w-10 rounded-md dark:bg-slate-50 bg-light-500/70'></span>
          <span
            id='bar_2'
            className='right-[-2em] absolute duration-100 h-1 w-10 rounded-md dark:bg-slate-50 bg-light-500/70'></span>
          <span
            id='bar_3'
            className='right-[-2em] absolute duration-100 bottom-2 h-1 w-10 rounded-md dark:bg-slate-50 bg-light-500/70'></span>
        </button>
      </div>

      <NavBar visibility={visibility} />
    </header>
  );
};

export default MenuBtn;
