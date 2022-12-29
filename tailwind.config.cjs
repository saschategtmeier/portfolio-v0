/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        enter: 'enter 200ms ease-out',
        leave: 'leave 150ms ease-in forwards',
      },
      keyframes: {
        enter: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        leave: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0.9)', opacity: 0 },
        },
      },
    },
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '1536px',
        '2xl': '2048px',
      },
      // padding: {
      // add values
      // },
    },
    screens: {
      tablet: '640px',
      desktop: '1280px',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
