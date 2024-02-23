import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          '50': '#e8f1ff',
          '100': '#d5e6ff',
          '200': '#A6BCFF',
          '300': '#D3DEFF',
          '400': '#3655B3',
          '500': '#4D4DFF',
        },
      },
    },
  },
  plugins: [],
};
export default config;
