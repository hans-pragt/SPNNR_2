/** @type {import('tailwindcss').Config} */
export default {
  content: ['./source/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        handwriting: ['"Shadows Into Light"', 'sans-serif'],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
};
