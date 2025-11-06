import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#faf7f3",
          100: "#f3ece3",
          200: "#e6d9c7",
          300: "#d5c1a3",
          400: "#c4a882",
          500: "#b28f65",
          600: "#93724d",
          700: "#735739",
          800: "#52402a",
          900: "#3a2d1e",
        },
        forest: {
          50: "#eef7f1",
          100: "#d5ebdd",
          200: "#a9d7bd",
          300: "#79c09a",
          400: "#4aa679",
          500: "#2b8b61",
          600: "#1e6f4e",
          700: "#185841",
          800: "#134535",
          900: "#0f372b",
        },
        river: {
          50: "#f0f7fb",
          100: "#daecf6",
          200: "#b8d9ec",
          300: "#8cc2df",
          400: "#63a9d0",
          500: "#448dbb",
          600: "#336f98",
          700: "#2a5879",
          800: "#254863",
          900: "#1f3b51",
        },
      },
      fontFamily: {
        display: ["ui-serif", "Georgia", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
      },
    },
  },
  plugins: [],
};

export default config;
