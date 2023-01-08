/** @type {import('tailwindcss').Config} */

const colors = require('./colors');

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors,
      ring: colors,
      fill: colors,
      fontFamily:  {
        sans: ['Poppins']
      }
    },
  },
  plugins: [],
};
