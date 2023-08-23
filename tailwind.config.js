/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        'suit': ['SUIT Variable']
      },
      backgroundImage: {
        'hero':'url("/public/hero/hero.jpg")'
      }
    },
  },
  plugins: [],
};