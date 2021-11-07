module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        red: "#ED4C4C",
        "dark-red": "#8B0000",
        orange: "#DF9539",
        green: "#53D27A",
        transparent: "#00000000",
        "neumorphism-black": "#1F1F1F",
        "neumorphism-white": "#F5F5F5",
        "neumorphism-white-secondary": "#F4F4F4",
        "neumorphism-black-secondary": "#1D1D1D",
        "candle-green-50": "#D9ED92",
        "candle-green-100": "#b5e48c",
        "candle-green-200": "#99d98c",
        "candle-green-300": "#76c893",
        "candle-green-400": "#52b69a",
        "candle-green-500": "#34a0a4",
        "candle-green-600": "#168aad",
        "candle-green-700": "#1a759f",
        "candle-green-800": "#1e6091",
        "candle-green-900": "#184e77"
      },
      boxShadow: {
        neumorphism: "12px 12px 24px #E9E9E9, -12px -12px 24px #FFFFFF;",
        darkNeumorphism: "5px 5px 10px #1B1B1B, -5px -5px 10px #232323;"
      },
      fontFamily: {
        poppins: ["Poppins"]
      },
      scale: {
        0: "0",
        25: ".25",
        50: ".5",
        75: ".75",
        90: ".9",
        95: ".95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
        200: "2"
      },
      borderRadius: {
        "4xl": "5rem"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
