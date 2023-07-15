/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'freehand': ['Freehand', 'cursive'],
      'monoton':  ['Monoton', 'cursive'],
      'fasthand': ['Fasthand', 'cursive'],
      'dancing': ['Dancing Script', 'cursive']
    },
    extend: {
      blur:{
        xs: '5px'
      },
      colors:{
        custom:{
          nblack: '#191919',
          nred: '#DF5452',
          nredbac: '#362422',
          nwhite: '#D4D4D4',
          nblue: '#5585A7',
          ngreenbac: '#243D30',
          nyellow: '#CA9849',
          norange: '#C77D48',
        }
      }
    },
  },
  plugins: [],
}

