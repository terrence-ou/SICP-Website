import { defineConfig } from "astro/config";
import astroExpressiveCode from "astro-expressive-code";
import tailwind from "@astrojs/tailwind";
// import mdx from "@astrojs/mdx";
import rehypeKatex from "rehype-katex"; // relevant
import remarkMath from "remark-math"; // relevant

// https://astro.build/config
export default defineConfig({
  integrations: [
    // mdx(),
    tailwind(),
    astroExpressiveCode({
      themes: ["vitesse-dark", "github-light"],
      themeCssSelector(theme, { styleVariants }) {
        // If one dark and one light theme are available
        // generate theme CSS selectors compatible with cactus-theme dark mode switch
        if (styleVariants.length >= 2) {
          const baseTheme = styleVariants[0]?.theme;
          const altTheme = styleVariants.find(
            (v) => v.theme.type !== baseTheme?.type
          )?.theme;
          if (theme === baseTheme || theme === altTheme)
            return `[data-theme='${theme.type}']`;
        }
        // return default selector
        return `[data-theme="${theme.name}"]`;
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      // Alternatively, provide multiple themes
      // https://shiki.style/guide/dual-themes
      // themes: {
      //   light: "github-light",
      //   dark: "dracula",
      // },
      // defaultColor: "light",
      // cssVariablePrefix: "--shiki--",
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://shiki.style/languages
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Add custom transformers: https://shiki.style/guide/transformers
      // Find common transformers: https://shiki.style/packages/transformers
      transformers: [],
    },
    remarkPlugins: [remarkMath], // relevant
    rehypePlugins: [rehypeKatex], // relevant
  },
});
