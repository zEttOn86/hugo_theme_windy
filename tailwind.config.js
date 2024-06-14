const themeDir = __dirname
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    themeDir + '/layouts/**/*.{html,js}',
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        "mono": ['"Noto Sans JP"', '"Noto Sans"', defaultTheme.fontFamily.mono]
      },
      colors: {
        'link-blue': '#87cefa'
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

