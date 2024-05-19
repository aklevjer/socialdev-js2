/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./register/*.html",
    "./feed/*.html",
    "./profile/*.html",
    "./post/*.html",
    "./src/js/**/*.mjs",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          400: "#77b5df",
          600: "#2978ad",
        },
        gray: {
          100: "#e3e3e3",
          200: "#dadada",
          300: "#888888",
          400: "#515151",
          500: "#333333",
          600: "#2e2e2e",
          700: "#232323",
          800: "#171717",
          900: "#0d0d0d",
        },
      },
      fontFamily: {
        sans: ["Kumbh Sans", "Helvetica", "Verdana", "sans-serif"],
        mono: ["Source Code Pro", "Courier New", "Courier", "monospace"],
      },
      fontSize: {
        m: "0.9375rem",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1150px",
        },
      },
    },
  },
  plugins: [],
};
