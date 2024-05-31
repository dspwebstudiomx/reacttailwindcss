/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        navbar: "0 10px 5px 0px rgba(0, 0, 0, 0.4)",
      },
      grayscale: {
        95: "95%",
        90: "90%",
        50: "50%",
        10: "10%",
      },
      aspect: {
        1: "1/1",
      },
    },
  },
  plugins: [],
};
