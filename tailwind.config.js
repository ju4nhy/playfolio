/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Black Ops One']
    },
    extend: {
      animation: {
        'pulse': 'pulse 1.5s cubic-bezier(0.25, 0.1, 0.25, 1) infinite',
      }
    },
  },
  plugins: [],
}