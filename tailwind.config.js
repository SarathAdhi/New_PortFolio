module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "loading-pattern": "url('/assets/loading.gif')",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
