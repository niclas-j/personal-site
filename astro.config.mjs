import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next(), icon()],
  output: "server",
  adapter: vercel(),
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
