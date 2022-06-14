module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "loading-pattern": "url('/assets/loading2.gif')",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
