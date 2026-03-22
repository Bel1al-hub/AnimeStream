/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        russo: ['"Russo One"', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#8B5CF6',
        secondary: '#EC4899',
        dark: '#0F0F23',
        darker: '#050510',
      },
    },
  },
  plugins: [],
}
