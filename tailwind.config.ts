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
        ime: "#DCDC28",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        custom: ["Zilla Slab Highlight", "serif"],
      },
      fontSize: {
        textXxxs: "6px",
        textXxs: "8px",
        textXs: "12px",
        textMd: "14px",
        textLg: "16px",
        textXl: "18px",
        textXxl: "20px",
        textXss: "10px",
      },
      transitionDuration: {
        "400": "400ms",
        "2000": "2000ms",
      },
      transitionTimingFunction: {
        "custom-ease": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      screens: {
        xxxxxsm: "360px",
        xxxxsm: "375px",
        xxxsm: "390px",
        xxsm: "414px",
        xsm: "430px",
        xxxmd: "768px",
        xxmd: "820px",
        xmd: "1024px",
        phone: { max: "767px" },
        web: { min: "1025px" },
        air: "820px",
      },
      backgroundImage: {
        "grid-pattern": "url('/1.png')",
      },
      boxShadow: {
        "card-shadow": "rgba(0, 0, 0, 0.16) 0px 4px 6px",
      },
    },
  },
  plugins: [],
};
export default config;
