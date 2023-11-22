/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF4F",
        secondary: "#F5F7FA",
        tertiary: "#4D4D4D",
        tertiaryGray: "#717171"
      },
      keyframes: {
        'open-menu': {
          '0%': {
            transform: 'scaleY(0)'
          },
          '80%': {
            transform: 'scaleY(1.2)'
          },
          '100%': {
            transform: 'scaleY(1)'
          },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },

  },
  plugins: [],
}