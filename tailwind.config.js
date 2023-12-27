/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        md: '785px',
      },
      colors: {
        primary: '#51C8D4',
        accent: '#91d6eb',
        secondary: '#002d3a',
        dark: '#3a3e4a',
        light: '#fafafa',
        light2: '#edf3f4',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        tourney: ['Tourney', 'sans-serif'],
      },
    },
    plugins: [],
  },
};
