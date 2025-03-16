/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Mode
        "Dark-Blue": "#2b3945", /*(Dark Mode Elements)*/
        "Very-Dark-Blue": "#202c37", /*(Dark Mode Background)*/
        //Light Mode
        "Very-Dark-Blue": "#111517", /*(Light Mode Text)*/
        "Dark-Gray": "#858585", /*(Light Mode Input)*/
        "Very-Light-Gray": "#fafafa", /*(Light Mode Background)*/
        // "White": "#ffffff", /*(Light Mode Top Background)*/
      },
      fontFamily: {
        "Nunito": ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

