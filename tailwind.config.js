/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      background: {
        light: "#35363a",
        default: "#171717",
      },
      primary: {
        light: "#589acd",
        default: "#116fb7",
        dark: "#0c4e80",
      },
      text: {
        white: "#ffffff",
        active: "#ba2150",
      },
    },
  },
  plugins: [],
};
