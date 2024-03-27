import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        light: "linear-gradient(180deg, #F8FAFC 0%, #E5E7EB 100%)",
        dark: "linear-gradient(180deg, #18282A 0%, #221A2C 100%)",
      }),
    },
  },
  plugins: [],
};
export default config;
