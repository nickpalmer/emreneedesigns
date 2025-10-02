/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'olive-dark': '#3D441E',
        'brown-light': '#B86125',
        'brown-dark': '#833921',
        'green-dark': '#286140',
        'olive-light': '#4E5B31',
        'blue-dark': '#012169',
      },
    },
  },
  plugins: [],
}
