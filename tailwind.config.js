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

      backgroundImage: {
        hero: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 20, 1)) , url('./assets/main.bg.webp')",
      },
    },
  },
  plugins: [],
};
