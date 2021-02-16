const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: false,
    content: ['src/**/*.svelte'],
  },
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          ...defaultTheme.fontFamily.sans,
        ]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
