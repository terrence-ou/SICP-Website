import { defineConfig } from "astro/config";
import astroExpressiveCode from "astro-expressive-code";
import tailwind from "@astrojs/tailwind";
import rehypeKatex from "rehype-katex"; // relevant
import remarkMath from "remark-math"; // relevant
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

// https://astro.build/config
export default defineConfig({
  size: "https://terrence-ou.github.io",
  base: "/SICP-Website",
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
      useThemedScrollbars: false,
      plugins: [pluginLineNumbers()],
      defaultProps: {
        showLineNumbers: false,
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      langs: [],
      wrap: true,
      transformers: [],
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, { strict: false }]],
  },
});
