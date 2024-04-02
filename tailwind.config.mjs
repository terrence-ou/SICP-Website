/** @type {import('tailwindcss').Config} */

// import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        "dark-sky": "#0891b2",
        bgColor: "hsl(var(--theme-bg) / <alpha-value>)",
        textColor: "hsl(var(--theme-text) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
