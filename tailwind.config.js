const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      light_black: "#1c1c1e",
      white: "#f3f3f3",
      black: "#19191b",
      blue: "#5179ff",
      grey: "#565657",
      gray: colors.gray,
      yellow: colors.yellow,
    },
    extend: {},
  },
  plugins: [],
};
