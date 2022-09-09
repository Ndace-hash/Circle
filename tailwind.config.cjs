/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,jsx,ts,tsx}"],
  darkmode: "class",
  theme: {
    extend: {
      gridTemplateRows: {
        chat: "auto minmax(300px,1fr) auto",
      },
    },
    colors: {
      transparent: "transparent",
      white: "white",
      black: "black",
      brand: "#60A5FA",
      dark: "#152D73",
      mid: "#D4D4D8",
      light: "#F8FAFC",
    },
  },
  plugins: [],
};
