/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', cursive",
        raleway: "'Raleway', sans-serif",
        "open-sans": "'Open Sans', sans-serif",
        nunito: "'Nunito', sans-serif;",
      },
      colors: {
        primary: "#000000",
        secondary: "#ACACAC",
      },
      backgroundImage: {
        mountain: "url('./assets/images/mountain.png')",
      },
    },
  },
  plugins: [],
}
