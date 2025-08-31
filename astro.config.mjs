// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://nithyaruban.github.io", //For Github Pages
  integrations: [tailwind()],
});
