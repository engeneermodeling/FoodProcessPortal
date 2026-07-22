/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           КЕРУВАННЯ МОВАМИ FOODPROCESSPORTAL                ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║  Щоб вимкнути мову — закоментуй або видали рядок зі списку  ║
 * ║  Щоб увімкнути — розкоментуй або додай рядок назад          ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export const ENABLED_LOCALES = [
  "uk",   // 🇺🇦 Українська     — основна мова
  "en",   // 🇬🇧 English         — англійська
  // "ru",   // 🇷🇺 Русский         — вимкнено
  "de",   // 🇩🇪 Deutsch         — німецька
] as const;

// ─── Не чіпати нижче ──────────────────────────────────────────
export type Locale = (typeof ENABLED_LOCALES)[number];
export const DEFAULT_LOCALE = "uk" as const;

// Назви мов для відображення у перемикачі
export const LOCALE_NAMES: Record<string, { name: string; flag: string; native: string; code: string ; path: string}> = {
  uk: { name: "Ukrainian", flag: "🇺🇦", native: "Українська", code: "UA" , path: "uk"},
  en: { name: "English",   flag: "🇬🇧", native: "English",    code: "EN" , path: "en"},
  ru: { name: "Russian",   flag: "🇷🇺", native: "Русский",    code: "RU" , path: "ru"},
  de: { name: "German",    flag: "🇩🇪", native: "Deutsch",    code: "DE" , path: "de"},
};

// ─── Загальні UI переклади (навігація, хлібні крихти, тощо) ───
// Всі мови тут — навіть вимкнені, щоб fallback завжди працював
export const UI_TRANSLATIONS: Record<string, Record<string, string>> = {
  // Навігація / breadcrumbs
  "nav.home":      { uk: "Головна",    en: "Home",       de: "Startseite",  ru: "Главная"     },
  "nav.topics":    { uk: "Теми",       en: "Topics",     de: "Themen",      ru: "Темы"        },
  "nav.reference": { uk: "Довідник",   en: "Reference",  de: "Referenz",    ru: "Справочник"  },
  "nav.problems":  { uk: "Задачник",   en: "Problems",   de: "Aufgaben",    ru: "Задачник"    },
  "nav.practice":  { uk: "Практикум",  en: "Practice",   de: "Praktikum",   ru: "Практикум"   },
  "nav.courses":   { uk: "Курсові",    en: "Courses",    de: "Kurse",       ru: "Курсовые"    },
  "nav.videos":    { uk: "Відео",      en: "Videos",     de: "Videos",      ru: "Видео"       },

  // Довідник / reference
  "ref.water":     { uk: "Властивості води",       en: "Water properties",           de: "Wassereigenschaften",         ru: "Свойства воды"           },
  // Сторінки довідника
  "page.water.title": { uk: "Властивості води та пари — Довідник", en: "Water & Steam Properties — Reference",  de: "Wasser- und Dampfeigenschaften — Referenz", ru: "Свойства воды и пара — Справочник"  },
  "page.water.desc":  { uk: "Теплофізичні властивості води та водяної пари: розрахунок за температурою і тиском (IAPWS-IF97).", en: "Thermophysical properties of water and steam: calculation by temperature and pressure (IAPWS-IF97).", de: "Thermophysikalische Eigenschaften von Wasser und Dampf: Berechnung nach Temperatur und Druck (IAPWS-IF97).", ru: "Теплофизические свойства воды и пара: расчёт по температуре и давлению (IAPWS-IF97)." },

  "ref.steam":     { uk: "Властивості пари",       en: "Steam properties",           de: "Dampfeigenschaften",          ru: "Свойства пара"           },

  // Загальне
  "back":          { uk: "Назад",      en: "Back",       de: "Zurück",      ru: "Назад"       },
  "goTo":          { uk: "Перейти",    en: "Go to",      de: "Weiter",      ru: "Перейти"     },
  "loading":       { uk: "Завантаження...", en: "Loading...", de: "Laden...", ru: "Загрузка..."  },
};

/**
 * Утиліта для отримання перекладу з автоматичним fallback:
 * 1. Шукає переклад для поточної мови
 * 2. Якщо немає — бере DEFAULT_LOCALE (uk)
 * 3. Якщо немає — бере перший доступний переклад
 * 4. Якщо зовсім нічого — повертає key
 *
 * Використання:
 *   import { t, UI_TRANSLATIONS } from "../locales.config";
 *   t(UI_TRANSLATIONS, "nav.home", locale)  // → "Головна" / "Home" / "Startseite"
 */
export function t(
  dict: Record<string, Record<string, string>>,
  key: string,
  locale: string
): string {
  const entry = dict[key];
  if (!entry) return key;
  return (
    entry[locale] ||
    entry[DEFAULT_LOCALE] ||
    Object.values(entry)[0] ||
    key
  );
}

/**
 * Скорочена версія для UI_TRANSLATIONS:
 *   import { ui } from "../locales.config";
 *   ui("nav.home", locale)
 */
export const ui = (key: string, locale: string): string =>
  t(UI_TRANSLATIONS, key, locale);
