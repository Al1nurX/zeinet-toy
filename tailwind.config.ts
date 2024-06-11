import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
        georgia: ["Georgia", "serif"],
        xxx: ["xxx", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        'spin-slowly': 'spin-slow 10s linear infinite',
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;