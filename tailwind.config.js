/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B4C46",
        primary5: "#398379",
        primary4: "#6BA29A",
        primary3: "#9CC1BC",
        primary1: "#DAF0ED",
        hero: "#39ADAD",
        orangeHover: "#C66D00",
      },
      fontFamily: {
        sans: ["Metropolis", "sans-serif"],
      },
      screens: {
        xs: "340px",
        mds: "600px",
      },
    },
  },
  plugins: [],
};
