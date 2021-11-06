module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        red: "#ED4C4C",
        "dark-red": "#8B0000",
        orange: "#DF9539",
        green: "#53D27A",
        transparent: "#00000000"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
