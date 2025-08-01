/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}",
    ],
    theme: {
      extend: {
        colors: {
          'lemonade-pink': '#006bde',
          'lemonade-pink-hover': '#003f82',
          'lemonade-gray': '#ecfbff',
          'lemonade-dark': '#1F2937',
        },
        fontFamily: {
          'script': ['Dancing Script', 'cursive'],
          'sans': ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  