module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      zomato:{
        400: "#e23744",

      },
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
