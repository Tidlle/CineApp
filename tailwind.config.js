/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-thompson': '#034562',
        'secondary-thompson': '#a10027',
        'tertiary-thompson' : '#EBEBEB',
        'quarternary-thompson' : '#DADADA',
        'pentenary-thompson' : '#383838'
      }
    },
  },
  plugins: [],
}
