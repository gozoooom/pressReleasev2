/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3758F9",     // your blue brand color
        secondary: "#8899A8",   // example gray
        light: "#FFFFFF",       // used in bg-light
        dark: "#637381",        // used in text-dark
      },
    },
  },
  plugins: [],
};
