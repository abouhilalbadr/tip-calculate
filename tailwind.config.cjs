/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      red: 'hsl(7deg 47% 66%)',
      cyan: 'hsl(172, 67%, 45%)',
      lightCyan: 'hsl(173deg 61% 77%)',
      neutral: {
        darkCyan: 'hsl(183, 100%, 15%)',
        darkGrayCyan: 'hsl(186, 14%, 43%)',
        grayishCyan: 'hsl(184, 14%, 56%)',
        lightGrayCyan: 'hsl(185, 41%, 84%)',
        lighterGrayishCyan: 'hsl(189, 41%, 97%)',
      }

    },
    fontFamily: {
      'space': ['Space Mono', 'monospace'],
    },
    container: {
      padding: "1rem",
      center: true,
      default: "1rem",
      sm: "2rem",
      lg: "3rem",
      xl: "4rem",
    },
  },
  plugins: [],
}
