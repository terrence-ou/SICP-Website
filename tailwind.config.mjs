/** @type {import('tailwindcss').Config} */

// import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-sky": "#0891b2",
      },
    },
  },
  plugins: [],
};
