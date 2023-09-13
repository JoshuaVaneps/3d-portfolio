/** @type {import('tailwindcss').Config} */
/* eslint-env node */

export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        superPrimary: "#054895",
        superPrimaryDark: "#0B3768",
        superPrimaryLight: "#0251B6",
        superSecondary: "#D03D56",
        superHighlight: "#4B8CE1",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "hero-pattern2": "url('/src/assets/jherobg.png')",
        "hero-pattern3": "url('/src/assets/hero-swirl.png')",
        "hero-pattern4": "url('/src/assets/bhero.png')",
        circularlight:
          "repeating-radial-gradient(rgba(170,166,195,0.4) 2px, #054895 5px, #054895 100px)",
      },
    },
  },
  plugins: [],
};
