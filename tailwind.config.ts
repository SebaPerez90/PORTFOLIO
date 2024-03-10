import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
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
          '600': '#c8ffd4',
          '700': '#dcbfff',
          '800': '#4df672',
          '900': '#AC87C5',
        },
        theme_dark: {
          'font-secon': '#94a3b8',
          'box-prim': '#2b303b80',
          'box-second': '#1e293b',
          'box-thir': '#334155',
          'sup-pink': '#f472b6',
          'sup-sky': '#38bdf8',
          'main-bg': '#0f172a',
        },
      },
    },
  },
  plugins: [],
};
export default config;
