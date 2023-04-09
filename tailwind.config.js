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
    },
  },
  plugins: [],
};
