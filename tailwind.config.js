/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#FF385C',
        text: {
          main: '#222222',
          secondary: '#717171',
        },
        bg: {
          light: '#fff',
          dark: '#000',
        },
        divider: '#DDDDDD',
      },
      fontFamily: {
        cereal: ['cereal-regular', 'sans-serif'],
        'cereal-bold': ['cereal-bold', 'sans-serif'],
        'cereal-medium': ['cereal-medium', 'sans-serif'],
        'cereal-xbold': ['cereal-xbold', 'sans-serif'],
        'cereal-black': ['cereal-black', 'sans-serif'],
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '419px' },
      'min-2xl': { max: '1536px' },
      'min-xl': { min: '1280px' },
      'min-lg': { min: '1024px' },
      'min-md': { min: '768px' },
      'min-sm': { min: '640px' },
      'min-xs': { min: '419px' },
    },
  },
  plugins: [],
}
