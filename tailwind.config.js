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
        radio:
          "background-image: url('data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e');",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
