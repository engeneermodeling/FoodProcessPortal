import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// Імпортуємо список активних мов з централізованого конфігу
import { ENABLED_LOCALES, DEFAULT_LOCALE } from "./src/locales.config.ts";

export default defineConfig({
  integrations: [react()],
  site: "https://foodprocessportal.com",
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
