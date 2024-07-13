/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateX(-10%)' },
          '50%': { transform: 'translateX(10%)' },
        },
      },
      animation: {
        bounce: 'bounce 1s infinite',
      },
    },
    fontFamily:{
      Vollkorn:["Vollkorn SC"],
      Montserrat:["Montserrat"]
    }
  },
  plugins: [require('tailwind-scrollbar'),],
}