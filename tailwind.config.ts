import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nav-bg": "#d5d5d5",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        textXxs: "8px",
        textXs: "12px",
        textMd: "14px",
        textLg: "16px",
        textXl: "118px",
        textXxl: "20px",
      },
    },
  },
  plugins: [],
};
export default config;
