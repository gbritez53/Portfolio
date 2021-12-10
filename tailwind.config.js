const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray: colors.slate,
        coolGray: colors.gray,
        lime: colors.lime,
        orange: colors.orange,
        amber: colors.amber,
        rose: colors.rose,
        pink: colors.pink,
        teal: colors.teal,
        sky: colors.sky,
        fuchsia: colors.fuchsia,
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
