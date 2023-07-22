/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FCFCFC",
          200: "#CCCCCC",
          300: "#3F3F41",
          400: "#0A0A0A",
        },
        secondary: {
          cyan: "#0AE6FD",
          blue: "#2F3EFD",
          purple: "#C003FF",
          pink: "#FF4EDA",
        },
      },
      fontFamily: {
        krona: ["Krona One", "sans"],
        montserrat: ["Montserrat", "sans"],
        lato: ["Lato", "sans"],
      },
    },
  },
  plugins: [],
};
