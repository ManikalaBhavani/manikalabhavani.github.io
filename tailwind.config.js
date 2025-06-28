/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f7f8f5',
          100: '#eef1e8',
          200: '#dde3d1',
          300: '#c4d0b0',
          400: '#a8b888',
          500: '#8fa066',
          600: '#758650',
          700: '#5d6b40',
          800: '#4a5535',
          900: '#3d462c',
        },
        beige: {
          50: '#fefdfb',
          100: '#fcf9f4',
          200: '#f8f2e6',
          300: '#f2e8d3',
          400: '#e9d7b8',
          500: '#ddc299',
          600: '#cca876',
          700: '#b8925c',
          800: '#9a7a4c',
          900: '#7f6540',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};