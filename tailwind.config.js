/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        myGold: '#ffa500',
        myGray: '#a4a4a4'
      },
      fontFamily: {
        'poppins': ['"Poppins"','sans-serif']
      }
    },
  },
  plugins: [],
}

