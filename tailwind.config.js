/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'roboto-slab': ['"Roboto Slab"', 'serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
        'mukta': ['"Mukta"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

