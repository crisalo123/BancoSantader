/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './src/core/assets/global.css', // Agregar esta línea
  ],
  theme: {
    colors: {
      ...require('tailwindcss/colors'), // Colores predeterminados
      ...{
        primary: {
          DEFAULT: '#166D6B',
          50: ' #23B0AD',
          100: '#20A09D',
          200: '#1D918F',
          300: '#1A8482',
          400: '#187876',
          500: '#166D6B',
          600: '#146260',
          700: '#125856',
          800: '#104F4D',
          900: '#0E4745'
        },
        secondary: {
          DEFAULT: '#A2D033',
          50: '#EDF4D8',
          100: '#D9EBAB',
          200: '#C9E388',
          300: '#BBDC68',
          400: '#AED64C',
          500: '#A2D033',
          600: '#8FB92B',
          700: '#7EA326',
          800: '#6F8F21',
          900: '#627E1D'
        },
        tertiary: {
          DEFAULT: '#F9FBFB',
          50: '#FFFFFF',
          100: '#FDFEFE',
          200: '#FBFDFD',
          300: '#F9FBFB',
          400: '#F7F9F9',
          500: '#F5F7F7',
          600: '#F3F5F5',
          700: '#CCE6E3',
          800: '#A3D1CD',
          900: '#7BBDB7'
        },
        
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
