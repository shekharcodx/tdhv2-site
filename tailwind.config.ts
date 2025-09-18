import type { Config } from "tailwindcss";
import { Poppins } from "next/font/google";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"], // ✅ register Poppins
      },
    },
  },
  plugins: [
    require("tw-animate-css"), // ✅ add plugin here
  ],
};

export default config;
