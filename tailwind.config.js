/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--primary)', 'sans-serif'],
        secondary: ['var(--secondary)', 'sans-serif'],
      },
      colors: {
        primary: '#101110',
        secondary: '#E42F2F',
        tertiary: '#F3994C',
        highlight: '#101110',
      }
    },
  },
  plugins: [],
};
