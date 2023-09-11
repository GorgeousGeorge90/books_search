/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'sans-serif': ['Alegreya Sans SC', 'sans-serif'],
      },
      keyframes: {
        show_it: {
          '0%': { opacity: 0,
                  transform: 'translateX(800px)'
          },
          '100%': { opacity: 1,
                    transform: 'translateY(0)'}
        },

        open: {
          '0%': {opacity:0},
          '100%': {opacity:1},
        }
      },
      animation: {
        'show_it': 'show_it 1s ease-in',
        'open': 'open 0.5s ease-in',
      },
    },
  },
  plugins: [
      plugin(function({ addComponents }) {
        addComponents({
          '.base-container':{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
          }
        })
      })
  ],
}

