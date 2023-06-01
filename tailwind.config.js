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
        'lgreen': '#5EBC8C',
        'lgrey': '#F7F7F7',
        'dgrey': '#9B9C9F',
      },

      screens: {
        'sm': '500px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1920'
      },

      backgroundImage: {
        'banner-1': 'url("./wonder-img/banner-img1.jpg")',
        'banner-2': 'url("./wonder-img/banner-img2.jpg")',
        'banner-3': 'url("./wonder-img/banner-img3.jpg")',
        // 'card-1': 'url("./wonder-img/1-3.jpg")',
        // 'card-2': 'url("./wonder-img/2-3.jpg")',
        // 'card-3': 'url("./wonder-img/3-3.jpg")',
      }
    },
  },
  plugins: [],
}

