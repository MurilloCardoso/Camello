/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },  
      colors: {
        dark: {
          DEFAULT: '#121212',
          50: '#1a1a1a',
          100: '#1e1e1e',
          200: '#2d2d2d',
          300: '#3d3d3d',
          400: '#4d4d4d',
          500: '#5c5c5c',
          600: '#6c6c6c',
          700: '#7b7b7b',
          800: '#8b8b8b',
          900: '#9a9a9a',
        },
      },
    },
  },
  plugins: [],
};
