/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#0C97C2",
        yellow: "#FD9C24",
        "text-color": "#333333",
        "light": "#E7F5F9",
        "blue-active": "#B4DFEC",
        "accents": "#F3F8F9"
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
