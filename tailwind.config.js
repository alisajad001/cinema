/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2192E7',
        secondary: '#F22D2D',
        white: '#ECF0FC',
        dark: '#141319',
        lightDark: '#2C2A39',
      },

      padding: {
        section: '1em',
      },
    },
  },
  plugins: [],
};
