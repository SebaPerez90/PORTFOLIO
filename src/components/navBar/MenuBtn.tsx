import { useState } from 'react';

const MenuBtn = () => {
  const [active, setActive] = useState(false);

  const openMenu = () => {
    const bar_1 = document.getElementById('bar_1');
    const bar_3 = document.getElementById('bar_3');

    const button = document.getElementById('hamburguer-menu');
    button?.classList.remove('hover:before:bg-transparent');

    if (active) {
      button?.classList.remove('hamburguer-menu-inactive');
      setTimeout(() => {
        bar_1 ? bar_1.classList.remove('item1') : '';
        bar_3 ? bar_3.classList.remove('item2') : '';
      }, 400);
    } else {
      button?.classList.toggle('hamburguer-menu-inactive');
      button?.classList.add('hover:before:bg-transparent');

      setTimeout(() => {
        bar_1 ? bar_1.classList.toggle('item1') : '';
        bar_3 ? bar_3.classList.toggle('item2') : '';
      }, 400);
    }

    setActive(!active);
  };

  return (
    <div className='justify-center items-center flex sm:hidden z-50 absolute right-12 top-8'>
      <span className='sr-only'>
        This button is rendered on screen widths less than 640px
      </span>
      <button
        id='hamburguer-menu'
        onClick={openMenu}
        aria-label='expand-collapse-menu'
        className='hamb-menu flex flex-col relative before:absolute before:left-[-1.5em] before:top-[-2em] before:w-full before:h-full before:rounded-full hover:before:bg-slate-50/20 before:p-9 hover:before:duration-300'>
        <span
          id='bar_1'
          className='right-[-2em] absolute duration-100 top-3 h-1 w-10 rounded-md bg-slate-50'></span>
        <span
          id='bar_2'
          className='right-[-2em] absolute duration-100 h-1 w-10 rounded-md bg-slate-50'></span>
        <span
          id='bar_3'
          className='right-[-2em] absolute duration-100 bottom-2 h-1 w-10 rounded-md bg-slate-50'></span>
      </button>
    </div>
  );
};

export default MenuBtn;
