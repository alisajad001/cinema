/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#01b4e4',
        secondary: '#F22D2D',
        white: '#ECF0FC',
        dark: '#032541',
        lightDark: '#2C2A39',
      },

      padding: {
        section: '1em',
      },

      backgroundImage: {
        hero: "linear-gradient(rgba(0, 20, 50, 0.9), rgba(0, 0, 20, 1)) , url('./assets/bg-hero.webp')",
        gradientPrimary:
          'linear-gradient(rgba(0, 20, 50, 0), rgba(0, 0, 20, 0.4))',
      },
    },
  },
  plugins: [],
};
