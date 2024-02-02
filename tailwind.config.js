/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "bg-primary": "#111315",
      "bg-secondary": "#1B1D1F",
      "text-primary": "#FEF7EE",
      "text-secondary": " #6F757C",
      accent: "#BEE3CC",
      tag: "#F6C768",
      alert: "#ED735D",
    },
    fontFamily: {
      "DM-Sans": ['"DM Sans"', "sans-serif"],
    },
    fontSize: {
      Head: "2rem",
      Body: "1rem",
      Small: "0.625rem",
      Price: "0.75rem",
    },
  },
  plugins: [],
};
