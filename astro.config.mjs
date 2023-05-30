import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroI18next()],
  experimental: {
    assets: true,
  },
  output: "server",
  adapter: vercel(),
  compressHTML: true,
});
