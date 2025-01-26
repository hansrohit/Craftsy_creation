/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'qwitcher': ['"Qwitcher Grypen"', 'cursive'],
        'd': ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}