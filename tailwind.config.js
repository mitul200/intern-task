/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        dm: ['"DM Sans"', "sans-serif"],
        rethink: ['"Rethink Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
