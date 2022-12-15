/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        disabled: "lightgray",
        primary: "#00dd6d",
        secondary: "red",
      },
      textColor: {
        disabled: "lightgray",
        primary: "#00dd6d",
        secondary: "red",
      },
    },
  },
  plugins: [],
};
