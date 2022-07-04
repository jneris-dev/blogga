/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.tsx'
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: 'Fira Sans, sans-serif',
        },
        colors: {
          blue: {
            300: '#EBF2FE',
            400: '#394363',
            500: '#232E52'
          },
          green: {
            500: '#8CEEAD',
          }
        }
      },
    },
    plugins: [],
  }