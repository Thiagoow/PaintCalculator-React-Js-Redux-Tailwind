/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './public/**/*.html', './src/**/*.{vue,jsx,ts,js}'],
  theme: {
    extend: {
      colors: {
        bodyColor: 'var(--body-color)',
        txtColor: 'var(--txt-color)',
        pinkColor: 'var(--pink-color)',
        blueColor: 'var(--blue-color)',
        inactiveColor: 'var(--inactive-color)',
        containerColor: 'var(--container-color)',

        scrollBarColor: 'var(--scroll-bar-color)',
        scrollThumbColor: 'var(--scroll-thumb-color)',
        scrollHoverColor: 'var(--scroll-hover-color)'
      },
      screens: {
        xs: '500px',
        '2xs': '300px'
      }
    }
  },
  plugins: []
};
