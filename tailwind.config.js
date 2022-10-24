/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        primary: '#6598CB',
        secondary: '#F66F4A'
      },
      fontFamily: {
        sans: ['Droid Arabic Kufi', 'sans-serif']
      }
    }
  },
  plugins: []
}
