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
      gridTemplateColumns: {
        'airbnb-5': 'repeat(5, minmax(287px, 460px))',
        'airbnb-4': 'repeat(4, minmax(255px, 355px))',
        'airbnb-3': 'repeat(3, minmax(290px, 335px))',
        'airbnb-2': 'repeat(2, minmax(254px, 426px))',
        'airbnb-1': 'repeat(1, minmax(170px, 50px))',
      },
      gridTemplateRows: {
        'airbnb-5': 'repeat(auto-fill, minmax(275px, 440px))',
        'airbnb-4': 'repeat(auto-fill, minmax(240px, 340px))',
        'airbnb-3': 'repeat(auto-fill, minmax(290px, 335px))',
        'airbnb-2': 'repeat(auto-fill, minmax(250px, 405px))',
        'airbnb-1': 'repeat(auto-fill, minmax(140px, 478px))',
      },
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

      // Airbnb breakpoint
      'airbnb-4-col': { max: '1640px' },
      'airbnb-3-col': { max: '1130px' },
      'airbnb-2-col': { max: '945px' },
      'airbnb-1-col': { max: '600px' },
    },
  },
  plugins: [],
}
