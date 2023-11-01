/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'navigate-bar': '#7dd4a7',
        'main-text-color': '#236719',
        'primary-text-color': '#90a88c',
        'base-color': '#e6e8e6',
        'form-color': '#b2d3c2',
      },
      height: {
        '124': '35rem',
      }
    },
  },
  plugins: [],
}