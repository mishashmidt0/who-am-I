/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

const colors = {
  black: "#000",
  white: "#fff",
  gray: "#616473",
  gray2: "#72747D",
  green: "#264743",
  greenLight: "#025959",
  red: "#6f2825",
  brownLight: "#d8c0b5",
  brownDark: "#ac7961",
};

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    plugins: [require("@tailwindcss/line-clamp")],
    colors,
    fontFamily: {
      sans: ['"Montserrat"', ...fontFamily.sans],
    },
    corePlugins: {
      container: false,
    },
    future: {
      hoverOnlyWhenSupported: true,
    },
    screens: {
      m392: "392px",
      m512: "512px",
      m600: "600px",
      m744: "744px",
      m920: "920px",
      m1096: "1096px",

      m320: "320px",
      m375: "375px",
      m475: "475px",
      m576: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      backgroundImage: {
        'mainPageBg': "url('../image/img/bgMain.webp')",
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "8rem",
        xl: "12rem",
      },
    },
  },
  plugins: [],
};
