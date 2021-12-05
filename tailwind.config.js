const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        lime: colors.lime,
        orange: colors.orange,
        amber: colors.amber,
        rose: colors.rose,
        sky: colors.sky,
      },
      fontFamily: {
        fredoka: ['Fredoka One', 'serif'],
      },
      animation: {
        bounce: 'bounce 1.6s ease-in infinite',
      },
      backdropGrayscale: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
}
