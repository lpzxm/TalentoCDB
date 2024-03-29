/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      '1920': '1920px',
      '1800': '1800px',
      '1280': '1280px',
      '1370': '1370px',
      '1080': '1080px',
      '880': '880px',
      '800': '800px',
      '500': '500px',
      '550': '550px',
      '450': '450px',
      '400': '400px',
      'lg': '1024px',
      'md': "720px",
      'lgv': {'raw': '(orientation: portrait) and (min-height: 500px)'},
    },
    extend: {
      fontFamily: {
        playFair: ["Playfair Display", "serif"]
      },
      backgroundImage: {
        'welcomeImage': "url('/assets/thb.png')",
        'backLogin': "url('/assets/bg-form.jpg')",
      }
    },
  },
  plugins: [],
}

