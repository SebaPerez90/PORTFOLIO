'use client';

import { useStore } from '@/store';

export default function Home() {
  const { darkThemeActive } = useStore();
  return (
    <main
      className={
        darkThemeActive ? 'bg-black text-white  m-x-[auto]' : 'm-x-[auto]'
      }>
      <div>
        <h1 className='text-center'>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugiat
          consequatur quia totam provident quod, quam consectetur? Nihil, eos
          molestias obcaecati corporis nobis magnam iure porro dolores est,
          molestiae possimus! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Eos atque ratione suscipit non, dolor nam ea
          adipisci? Quam, nemo. Nostrum natus autem quae repudiandae neque optio
          et sequi esse odit. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Maxime tempore placeat earum, illum in sapiente sed consequatur
          dolores dolore. Debitis nostrum eum laboriosam non vitae ratione earum
          nam voluptates fugiat.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugiat
          consequatur quia totam provident quod, quam consectetur? Nihil, eos
          molestias obcaecati corporis nobis magnam iure porro dolores est,
          molestiae possimus! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Eos atque ratione suscipit non, dolor nam ea
          adipisci? Quam, nemo. Nostrum natus autem quae repudiandae neque optio
          et sequi esse odit. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Maxime tempore placeat earum, illum in sapiente sed consequatur
          dolores dolore. Debitis nostrum eum laboriosam non vitae ratione earum
          nam voluptates fugiat.
        </p>
      </div>
    </main>
  );
}
