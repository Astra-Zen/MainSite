/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
      },
      animation: {
        blob: 'blob 7s infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1) rotate(0deg)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1) rotate(120deg)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9) rotate(240deg)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1) rotate(360deg)',
          },
        },
        float: {
          '0%': {
            transform: 'translateY(0px) translateZ(0)',
          },
          '50%': {
            transform: 'translateY(-20px) translateZ(50px)',
          },
          '100%': {
            transform: 'translateY(0px) translateZ(0)',
          },
        },
      },
    },
  },
  plugins: [],
};