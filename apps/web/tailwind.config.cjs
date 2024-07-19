/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      screens: {
        '2xl': '1400px',
      },
    },
    fontFamily: {
      Homenaje: ['Homenaje'],
      Inter: ['Inter'],
      Roboto: ['Roboto'],
    },
  },
  plugins: [require('tailwindcss-animate')],
};
