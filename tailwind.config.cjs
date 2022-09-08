/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        chat: "auto minmax(300px,1fr) auto",
      },
    },
  },
  plugins: [],
};
