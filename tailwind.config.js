/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#01B3A7',
        'light': '#FEFEFE',
        'dark': '#151515',
        'lblue': '#162E44',
        'dblue': '#11263A',
        'grey': '#d7d7d7',
        'lgreen': '#5EBC8C'
      },

      screens: {
        'sm': '500px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1920'
      },
    },
  },
  plugins: [],
}

