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
        myGray: {
          100 : '#a4a4a4',
          200 : '#a4a4a4'
        },
        myWhite: '#f2f2f2'
      },
      fontFamily: {
        'poppins': ['"Poppins"','sans-serif']
      }
    },
  },
  plugins: [],
}

