/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins"],
      },
      screens: {
        phone: "640px",
        tablet: "768px",
      },
    },
  },
  plugins: [],
};
