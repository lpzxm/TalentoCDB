/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
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

