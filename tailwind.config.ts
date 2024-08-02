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
          '800': '#3cc259',
          '900': '#AC87C5',
        },
        dark: {
          secondary: '#1e293b',
          tertiary: '#334155',
          pink: '#f472b6',
          sky: '#38bdf8',
          main: '#0f172a',
        },
      },
    },
  },
  plugins: [],
};
export default config;
