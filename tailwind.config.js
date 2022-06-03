const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js,marko}"],
  theme: {
    extend: {
      fontFamily: {
        'sans-serif': ['Kumbh Sans'],
      },
    },
  },
  plugins: [],
}
