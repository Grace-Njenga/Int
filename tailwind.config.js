/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      // Primary color 
      cacao: "#4F483F",
      // Secondary color 
      beige: "#E2D3C4",
      // ACCENT COLOR 
      burnt: "#B5977F",
      // white 
      white: "#FFF7EA",
      // black 
      noir: "#504538",
      //orange
      orangey: "#C98100",
      //black
      noir: "#1f1f1f"
    },
    extend: {
      fontFamily: {
        // titles 
        'Copse': ['Copse', 'serif'],
        // sub titles 
        // italic
        'Delius': ['Delius Swash Caps', 'cursive'],
        // paragraph
        'Mukta': ['Mukta Vaani', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
