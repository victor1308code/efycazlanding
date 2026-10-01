import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#45B3A9",
          "primary-hover": "#3CA096",
          "primary-dark": "#328E84",
          "primary-deep": "#1E7068",
          dark: "#444756", // The logo gray
          deep: "#2C2F3A", // Darker gray for cards
          darker: "#1A1C23", // Deep dark for main bg
        },
      },
    },
  },
  plugins: [],
};

export default config;
