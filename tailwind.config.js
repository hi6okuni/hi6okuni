module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        "hi6okuni-bg": "#242120",
        "hi6okuni-highlight": "#f8f6f5",
        "hi6okuni-default": "#bab6b1",
        "hi6okuni-dim": "#797673",
      },
    },
  },
  plugins: [],
};
