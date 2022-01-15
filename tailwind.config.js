const defaultTheme = require('tailwindcss/defaulttheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '900px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'violet': '#664EFC',
        'beige': '#FDFCF9'
      }
    },
  },
  plugins: [],
}
