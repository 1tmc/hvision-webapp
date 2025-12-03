/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{ts,tsx,js,jsx}",
      "./components/**/*.{ts,tsx,js,jsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: '#f59234',
          luxuryBlack: '#0b0b0b',
          luxuryWhite: '#ffffff',
        },
        fontFamily: {
          sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        },
      },
    },
    plugins: [],
  }
  