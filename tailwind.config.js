/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["'Poppins', sans-serif"],
        Roboto: ["'Roboto', sans-serif"],
      },
      backgroundImage: {
        "card-gradient": "linear-gradient(180deg, #091E26 0%, #00131C 100%);",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
