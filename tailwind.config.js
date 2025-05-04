/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myFont: ['nishu1'], // अपना कस्टम फ़ॉन्ट ऐड करें
      },
    },
  },
  plugins: [],
  
}

