/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      main: "2.8rem",
      "headline-1": "2.2rem",
      "headline-2": "1.8rem",
      body: "1.6rem",
      caption: "1.2rem",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      primary: {
        light: "#94fdf5",
        default: "#66fcf1",
        dark: "#52cac1",
      },
      background: {
        light: "#1C2A50",
        default: "#0f172a",
        dark: "#0c1222",
      },
      text: {
        main: "#e2e8f0",
        paragraph: "#94A3B8",
        "color-1": "#66fcf1",
        "color-2": "#A5B4FC",
      },
    },
    extend: {
      spacing: {
        136: "136rem",
      },
    },
    screens: {
      "md-min": { min: "810px" },
      "md-max": { max: "810px" },
      "sm-min": { min: "620px" },
      "sm-max": { max: "620px" },
      "xl-min": { min: "1360px" },
      "xl-max": { max: "1360px" },
    },
    borderWidth: {
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
  },
  plugins: [],
};
