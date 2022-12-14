/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
    extend: {},
    fontFamily: {
      mainfont: ["Barlow", "sans-serif"],
      namefont: ["Philosopher", "cursive"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [ require("tailwind-scrollbar-hide")],
  
};
