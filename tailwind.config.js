/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'medical-blue': '#EBF2FB',
        'weird-green' : '#4fb898ff',
        'gray-dark' : '#f5f3ff',
      },
      fontFamily: {
        'playwrite': ['Playwrite DE SAS', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'playfair': ['Playfair', 'serif'],
      }
    },
  },
  plugins: [],
}