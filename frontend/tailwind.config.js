/** @type {import('tailwindcss').Config} */


module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
     
    },
    colors: {
      "primary": '#221518',
      "secondary": '#221518',
      "accent": '#54372B',
      "white": "#fff"
    },
  },
  variants: {},
  plugins: [],
};