import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { unified } from "@astrojs/markdown-remark";
import rehypeExternalLinks from "./scripts/rehype-external-links.mjs";
import rehypeLocalizedLectureImages from "./scripts/rehype-localized-lecture-images.mjs";

// Імпортуємо список активних мов з централізованого конфігу
import { ENABLED_LOCALES, DEFAULT_LOCALE } from "./src/locales.config.ts";
import { siteConfig } from "./src/config.ts";

export default defineConfig({
  integrations: [react()],
  markdown: {
    processor: unified({
      rehypePlugins: [rehypeLocalizedLectureImages, rehypeExternalLinks],
    }),
  },
  site: siteConfig.url,
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: [...ENABLED_LOCALES],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  output: "static",
  compressHTML: true,
  build: {
    inlineStylesheets: "always",
  },
});
