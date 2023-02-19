/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "920px",
      // => @media (min-width: 640px) { ... }

      md: "1120px",
      // => @media (min-width: 768px) { ... }

      lg: "1400px",
      // => @media (min-width: 1024px) { ... }

      xl: "1665px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
