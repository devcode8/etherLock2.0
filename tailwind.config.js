/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        login:'linear-gradient(92deg, #0E488C -6.3%, #3A4567 114.47%)',
        button:' linear-gradient(102deg, #A3AEF2 30.33%, rgba(0, 108, 233, 0.75) 92.44%)'
      },
      fontFamily:{
        kanit:'kanit'
      },
      colors:{
        icon:'rgba(217, 217, 217, 0.08)',
        signUp:'rgba(0, 108, 233, 0.69)'
      },
    },
  },
  plugins: [],
}