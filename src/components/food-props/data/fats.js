/** Food group: Жири, олії та масло */
import { linearTempEquation } from "./approximationNotes.js";

export const fats = {
  id: "fats",
  icon: "🫙",
  color: "#FFF176",
  name: {
    uk: "Жири, олії та масло",
    en: "Fats, Oils & Butter",
    de: "Fette, Öle & Butter",
  },
  products: [
    {
      id: "margarine",
      name: {
        uk: "Маргарин столовий",
        en: "Table margarine",
        de: "Tafelmargarine",
      },
      type: "vs_temp",
      source: "НУХТ 2012, Табл. 6.1",
      equations: [linearTempEquation],
      cols: ["T, °C", "ρ, кг/м³", "cₚ, Дж/(кг·К)", "λ, Вт/(м·К)", "a×10⁸, м²/с"],
      digits: [0, 0, 0, 3, 2],
      data: [
        [15, 930, 3182, 0.205, 6.94],
        [35, 910, 3328, 0.207, 6.8],
        [60, 902, 3337, 0.207, 6.8],
      ],
    },
    {
      id: "margarine_cream",
      name: {
        uk: "Маргарин вершковий",
        en: "Cream margarine",
        de: "Cremige Margarine",
      },
      type: "static",
      source: "НУХТ 2012, Табл. 6.2",
      equations: [linearTempEquation],
      cols: ["T, °C", "ρ, кг/м³", "cₚ, Дж/(кг·К)", "λ, Вт/(м·К)", "a×10⁸, м²/с"],
      digits: [0, 1, 0, 3, 2],
      data: [
        [22, 920.4, 2114, 0.165, 7.33],
        [26, 917.2, 2227, 0.172, 7.05],
        [30, 914, 2328, 0.173, 6.83],
      ],
    },
    {
      id: "margarine_emulsion",
      name: {
        uk: "Рідкі емульсії маргарину",
        en: "Liquid margarine emulsions",
        de: "Flüssige Margarineemulsionen",
      },
      type: "static",
      source: "НУХТ 2012, Табл. 6.3",
      equations: [linearTempEquation],
      cols: ["Тип емульсії", "T, °C", "ρ, кг/м³", "cₚ, Дж/(кг·К)", "λ, Вт/(м·К)", "a×10⁸, м²/с"],
      digits: [null, 0, 0, 0, 3, 1],
      data: [
        ["Тваринна", 40, 909, 2052, 0.2, 10.9],
        ["Тваринна", 50, 904, 2052, 0.197, 10.7],
        ["Безмолочна", 40, 920, 1842, 0.186, 10.9],
        ["Безмолочна", 50, 914, 1842, 0.174, 10.3],
        ["Вершкова", 40, 928, 1633, 0.209, 13.5],
        ["Вершкова", 50, 920, 1633, 0.209, 13.6],
      ],
    },
    {
      id: "hydrogenated_fat_props",
      name: {
        uk: "Гідрожир — теплофізичні характеристики",
        en: "Hydrogenated fat — thermophysical properties",
        de: "Hydriertes Fett — thermophysikalische Eigenschaften",
      },
      type: "static",
      source: "Чубик і Маслов, 1970, Табл. 22",
      equations: [
        {
          label: { uk: "Теплопровідність гідрожиру", en: "Hydrogenated fat thermal conductivity", de: "Wärmeleitfähigkeit von hydriertem Fett" },
          formula: "λ=1,163(0,155+0,0004(t-20))",
          katex: "\\lambda=1{,}163\\,[0{,}155+0{,}0004(t-20)]",
          description: { uk: "Підставте температуру гідрожиру t; формула описує плавну ділянку таблиці.", en: "Substitute hydrogenated-fat temperature t; the formula describes the smooth table interval.", de: "Temperatur t des hydrierten Fetts einsetzen; die Formel beschreibt den glatten Tabellenbereich." },
          units: { uk: "t — °C; λ — Вт/(м·К)", en: "t in °C; lambda in W/(m·K)", de: "t in °C; lambda in W/(m·K)" },
          range: "−5–35°C",
          error: { uk: "орієнтовно 2–4% у межах діапазону", en: "about 2-4% within the range", de: "etwa 2-4% im Bereich" },
        },
        {
          label: { uk: "Температуропровідність гідрожиру", en: "Hydrogenated fat thermal diffusivity", de: "Temperaturleitfähigkeit von hydriertem Fett" },
          formula: "a×10⁸=2,7778(2,2+0,015(t-20))",
          katex: "a\\cdot10^8=2{,}7778\\,[2{,}2+0{,}015(t-20)]",
          description: { uk: "Підставте t; результат є числом для колонки a×10⁸, фактичне a = результат·10⁻⁸ м²/с.", en: "Substitute t; the result is the number for the a×10⁸ column, actual a = result·10^-8 m²/s.", de: "t einsetzen; Ergebnis ist die Zahl für a×10⁸, tatsächliches a = Ergebnis·10^-8 m²/s." },
          units: { uk: "t — °C; a×10⁸ — м²/с", en: "t in °C; a×10⁸ in m²/s", de: "t in °C; a×10⁸ in m²/s" },
          range: "−5–35°C",
          error: { uk: "орієнтовно 3–6% у межах діапазону", en: "about 3-6% within the range", de: "etwa 3-6% im Bereich" },
        },
        linearTempEquation,
      ],
      cols: ["T, °C", "ρ, кг/м³", "λ, Вт/(м·К)", "cₚ, Дж/(кг·К)", "a×10⁸, м²/с"],
      digits: [0, 0, 3, 0, 2],
      data: [
        [-5, null, 0.174, 2973, 6.11],
        [15, 942, 0.177, 3069, 6.17],
        [35, 908, 0.181, 3324, 6.28],
      ],
    },
    {
      id: "butter",
      name: {
        uk: "Масло вершкове",
        en: "Butter",
        de: "Butter",
      },
      type: "static",
      source: "НУХТ 2012, Табл. 6.4",
      note: {
        uk: "Значення cₚ і λ при 5°C та 17°C",
        en: "cp and λ at 5°C and 17°C",
        de: "cp und λ bei 5°C und 17°C",
      },
      cols: ["Вид масла", "W, %", "cₚ(5°C), Дж/(кг·К)", "λ(5°C), Вт/(м·К)", "λ(17°C), Вт/(м·К)", "a×10⁸(17°C)"],
      digits: [null, 1, 0, 3, 3, 1],
      data: [
        ["Несолене (збивання)", 15.9, 3094, 0.202, 0.23, 4.7],
        ["Солене (збивання)", 15.9, 3266, 0.195, 0.506, 4.3],
        ["Любительське", 19.2, 3245, 0.162, 0.176, 4.4],
        ["Поточного виробн.", 16, 3153, 0.195, 0.23, 4.3],
      ],
    },
  ],
};
