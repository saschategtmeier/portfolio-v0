/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
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
