/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      height: {
        screen: ["100vh", "100dvh"],
        "sm-screen": ["100vh", "100svh"],
      },
      colors: {
        primary: {
          100: "#FCFCFC",
          200: "#CCCCCC",
          300: "#3F3F41",
          400: "#0f0f11",
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
  plugins: [require("tailwind-scrollbar-hide")],
};
