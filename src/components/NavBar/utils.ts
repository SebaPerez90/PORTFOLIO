// import { SetStateAction } from 'react';

// const openMenu = (
//   active: boolean,
//   setActive: { (value: SetStateAction<boolean>): void; (arg0: boolean): void },
//   visibility: boolean,
//   setVisibility: {
//     (value: SetStateAction<boolean>): void;
//     (arg0: boolean): void;
//   }
// ) => {
//   const bar_1 = document.getElementById('bar_1');
//   const bar_3 = document.getElementById('bar_3');

//   const button = document.getElementById('hamburguer-menu');
//   button?.classList.remove('hover:before:bg-transparent');

//   if (active) {
//     button?.classList.remove('hamburguer-menu-inactive');
//     setTimeout(() => {
//       bar_1 ? bar_1.classList.remove('item1') : '';
//       bar_3 ? bar_3.classList.remove('item2') : '';
//     }, 400);
//   } else {
//     button?.classList.toggle('hamburguer-menu-inactive');
//     button?.classList.add('hover:before:bg-transparent');

//     setTimeout(() => {
//       bar_1 ? bar_1.classList.toggle('item1') : '';
//       bar_3 ? bar_3.classList.toggle('item2') : '';
//     }, 400);
//   }
//   setActive(!active);
//   setVisibility(!visibility);
// };

// export default openMenu;
