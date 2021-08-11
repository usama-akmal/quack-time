const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    fontSize: {
      'xxxs': '.50rem',
      'xxs': '.625rem',
      ...defaultTheme.fontSize
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
