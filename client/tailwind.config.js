module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      zomato:{
        100: "#fabac0",
        400: "#e23744",
        50:"#f8eff0",

      },
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
