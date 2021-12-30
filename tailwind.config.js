const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        sunflower: ["MADE Sunflower Regular"],
      },
      colors: {
        "light-yellow": "#F1D78E",
        "dark-yellow": "#EBC761",
        "light-green": "#03F182",
        "dark-green": "#028F4D",
        "light-purple": "#8648BA",
        "dark-purple": "#2E1145",
      },
      backgroundImage: {
        grain: "url('/assets/grain.svg')",
      },
      screens: {
        'maxmd': { 'raw': '(max-width: 768px)' },
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
