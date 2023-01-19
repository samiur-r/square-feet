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
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#242424',
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      orange: colors.orange,
      green: colors.green,
      red: colors.red,
      rose: colors.rose
    },
    extend: {
      minHeight: (theme) => ({
        ...theme('spacing')
      }),
      colors: {
        primary: '#6598CB',
        'primary-lighter': '#E8F0F7',
        'primary-light': '#83ACD5',
        'primary-dark': '#608FBF',
        secondary: '#F88C6E',
        'custom-green': '#4CAF50',
        'custom-red': '#E54B66',
        'custom-red-light': '#EBA2AE',
        'custom-red-lighter': '#FCF2F2',
        'custom-white-lighter': '#FDFEFF',
        'custom-white-light': '#F9FAFB',
        'custom-gray': '#8996A6',
        'custom-gray-1': '#7d8b9b',
        'custom-gray-2': '#EFF3F7',
        'custom-gray-3': '#f9f9f9',
        'custom-gray-4': '#9C9C9C',
        'custom-gray-border': '#DCDCDC'
      },
      fontFamily: {
        DroidArabicKufiRegular: ['Droid Arabic Kufi Regular', 'sans-serif'],
        DroidArabicKufiBold: ['Droid Arabic Kufi Bold', 'sans-serif']
      },
      maxHeight: {
        128: '32rem',
        256: '64rem',
        384: '96rem'
      },
      transitionDuration: {
        2000: '2000ms'
      },
      screens: {
        '3xl': '2000px',
        '4xl': '2600px'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
