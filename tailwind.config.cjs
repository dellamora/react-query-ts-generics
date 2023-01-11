/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#181818",
      secondary: "#131313",
      primaryRed: "#C20000",
      TextWhite: "#F1F1F1",
      textGray: "#D9D9D9",
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        cards: "repeat(auto-fit, minmax(60px, 1fr))",
      },
    },
  },
  plugins: [],
};
