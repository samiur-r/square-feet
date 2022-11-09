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
        secondary: '#F66F4A',
        primaryGlassEffect: '#608fbf'
      },
      fontFamily: {
        sans: ['Droid Arabic Kufi', 'sans-serif']
      },
      maxHeight: {
        128: '32rem',
        256: '64rem',
        384: '96rem'
      },
      transitionDuration: {
        2000: '2000ms'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
