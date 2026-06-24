import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://foodprocessportal.com", // Заміни на свій домен, коли буде
  i18n: {
    defaultLocale: "uk", // Українська за замовчуванням
    locales: ["uk", "ru", "en", "de"], // 4 мови
    routing: {
      prefixDefaultLocale: true, // Додавати /uk/ навіть для української
    },
  },

  build: {
    inlineStylesheets: "always", // Inline всі CSS в HTML
  },
});
