/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EDF9F1',
          100: '#D6F1E0',
          200: '#AEE3C4',
          300: '#7CCFA1',
          400: '#4CB87E',
          500: '#2F9E5F',
          600: '#268049',
          700: '#1F6B3D',
          800: '#1A5532',
          900: '#143D25',
        },
        accent: {
          DEFAULT: '#F4A62A',
          dark: '#D98A12',
          light: '#FCE3B5',
        },
        cream: '#FFF9EF',
        ink: '#33312E',
      },
      fontFamily: {
        sans: ['"Noto Sans Arabic"', 'Nunito', 'system-ui', 'sans-serif'],
        display: ['Nunito', '"Noto Sans Arabic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
