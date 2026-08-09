/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vrinda: {
          cream: '#FAF7F2',
          ivory: '#FFFDF9',
          gold: '#C5A059',
          'gold-dark': '#A4813C',
          rose: '#9E4770',
          charcoal: '#2C2A29',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
