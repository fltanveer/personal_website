import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://artanveer.design",
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    preact(),
    image(),
  ],
});
