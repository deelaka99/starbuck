/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'green':'#00DD00',
      'darkGreen':'#01532C',
      'white': '#ffffff',
      'black':'#000000',
      'grey':'#333333',
      'darkGrey':'#282828',
      'blue':'#6EB6FF',
      'red' :'#FF0000',
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      jomhuria: ["Jomhuria", "cursive"]
    },
    screens:{
      'tablet':'640px',
      'laptop':'1024px',
      'desktop':'1280px',
    },
  },
  plugins: [],
}

