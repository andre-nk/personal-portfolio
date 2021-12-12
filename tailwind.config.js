module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-black": "#191B1D",
        "hover-white": "#F1EFEC"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    styled: false,
    themes: false,
  },
}
