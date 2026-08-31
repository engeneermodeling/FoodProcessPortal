/** Food group: Мед, яйця, желатин, какао-боби */
import { bilinearEquation, linearTempEquation, logTempEquation } from "./approximationNotes.js";

export const honey_eggs = {
  id: "honey_eggs",
  icon: "🍯",
  color: "#FFE082",
  name: {
    uk: "Мед, яйця, желатин, какао-боби",
    en: "Honey, Eggs, Gelatin, Cocoa Beans",
    de: "Honig, Eier, Gelatine, Kakaobohnen",
  },
  products: [
    {
      id: "honey_props",
      name: {
        uk: "Мед — теплофізичні властивості",
        en: "Honey — thermophysical properties",
        de: "Honig — thermophysikalische Eigenschaften",
      },
      type: "static",
      source: "Чубик і Маслов, 1970, Табл. 47",
      note: {
        uk: "Формули (5–35°C): ρ=1442−0,4t кг/м³; λ=1,163(0,29+0,00075t) Вт/(м·К); c=4186,8(0,54+0,0035t) Дж/(кг·К)",
        en: "Formulas (5–35°C): ρ=1442−0.4t kg/m³; λ=1.163(0.29+0.00075t) W/(m·K); c=4186.8(0.54+0.0035t) J/(kg·K)",
        de: "Formeln: ρ=1442−0,4t kg/m³",
      },
      equations: [
        {
          label: { uk: "Густина меду", en: "Honey density", de: "Honigdichte" },
          formula: "ρ=1442-0,4t",
          katex: "\\rho=1442-0{,}4t",
          description: { uk: "Підставте температуру меду t; склад меду має відповідати довідковій таблиці.", en: "Substitute honey temperature t; honey composition should match the reference table.", de: "Honigtemperatur t einsetzen; die Zusammensetzung sollte der Referenztabelle entsprechen." },
          units: { uk: "t — °C; ρ — кг/м³", en: "t in °C; rho in kg/m³", de: "t in °C; rho in kg/m³" },
          range: "5–35°C",
          error: { uk: "орієнтовно 1–3%; залежить від вологості меду", en: "about 1-3%; depends on honey moisture", de: "etwa 1-3%; abhängig von der Honigfeuchte" },
        },
        {
          label: { uk: "Теплопровідність меду", en: "Honey thermal conductivity", de: "Wärmeleitfähigkeit von Honig" },
          formula: "λ=1,163(0,29+0,00075t)",
          katex: "\\lambda=1{,}163\\,(0{,}29+0{,}00075t)",
          description: { uk: "Підставте t; множник 1,163 переводить довідкові ккал/(м·год·К) у Вт/(м·К).", en: "Substitute t; factor 1.163 converts reference kcal/(m·h·K) to W/(m·K).", de: "t einsetzen; Faktor 1,163 wandelt kcal/(m·h·K) in W/(m·K) um." },
          units: { uk: "t — °C; λ — Вт/(м·К)", en: "t in °C; lambda in W/(m·K)", de: "t in °C; lambda in W/(m·K)" },
          range: "5–35°C",
          error: { uk: "орієнтовно 2–5%; залежить від вологості меду", en: "about 2-5%; depends on honey moisture", de: "etwa 2-5%; abhängig von der Honigfeuchte" },
        },
        {
          label: { uk: "Теплоємність меду", en: "Honey heat capacity", de: "Wärmekapazität von Honig" },
          formula: "cₚ=4186,8(0,54+0,0035t)",
          katex: "c_p=4186{,}8\\,(0{,}54+0{,}0035t)",
          description: { uk: "Підставте t; коефіцієнт 4186,8 переводить ккал/(кг·К) у Дж/(кг·К).", en: "Substitute t; factor 4186.8 converts kcal/(kg·K) to J/(kg·K).", de: "t einsetzen; Faktor 4186,8 wandelt kcal/(kg·K) in J/(kg·K) um." },
          units: { uk: "t — °C; cₚ — Дж/(кг·К)", en: "t in °C; cp in J/(kg·K)", de: "t in °C; cp in J/(kg·K)" },
          range: "5–35°C",
          error: { uk: "орієнтовно 2–5%; залежить від вологості меду", en: "about 2-5%; depends on honey moisture", de: "etwa 2-5%; abhängig von der Honigfeuchte" },
        },
        linearTempEquation,
      ],
      cols: ["T, °C", "ρ, кг/м³", "λ, Вт/(м·К)", "cₚ, Дж/(кг·К)", "a×10⁸, м²/с"],
      digits: [0, 0, 3, 0, 0],
      data: [
        [-5, 1010, 0.654, 1821, 1250],
        [15, 1435, 0.349, 2307, 1055],
        [20, 1345, null, 2428, 1055],
        [35, 1345, 0.37, 2994, 867],
      ],
    },
    {
      id: "honey_viscosity",
      name: {
        uk: "В'язкість меду vs T і вологість",
        en: "Honey viscosity vs T and moisture",
        de: "Honig Viskosität vs T und Feuchte",
      },
      type: "static",
      source: "Чубик і Маслов, 1970, Табл. 48",
      equations: [bilinearEquation, logTempEquation],
      cols: ["W, %", "μ(10°C), Па·с", "μ(20°C), Па·с", "μ(30°C), Па·с", "μ(40°C), Па·с", "μ(60°C), Па·с", "μ(80°C), Па·с"],
      digits: [0, 1, 1, 2, 2, 2, 2],
      data: [
        [14, null, 59.2, 14.4, 4.6, 1, 0.25],
        [16, null, 22.8, 5.9, 2.1, 0.6, 0.15],
        [19, 28, 6.5, 2.7, 1, 0.3, 0.1],
        [24, 4.52, 1.3, 0.5, 0.4, 0.1, 0.03],
      ],
    },
    {
      id: "egg_props",
      name: {
        uk: "Яйця і складові",
        en: "Eggs and components",
        de: "Eier und Bestandteile",
      },
      type: "static",
      source: "Чубик і Маслов, 1970, Табл. 46",
      note: {
        uk: "Температура коагуляції: білок — 61°C, жовток — 65°C",
        en: "Coagulation temperature: white — 61°C, yolk — 65°C",
        de: "Koagulationstemperatur: Eiweiß — 61°C, Eigelb — 65°C",
      },
      cols: ["Продукт", "W, %", "ρ, кг/м³", "cₚ, Дж/(кг·К)", "Tзам, °C"],
      digits: [null, 1, 0, 0, 3],
      data: [
        ["Білок курячий", null, 1045, 3768, -0.424],
        ["Жовток курячий", null, 1028, 2765, -0.587],
        ["Меланж", null, 1095, null, null],
      ],
    },
    {
      id: "cocoa_beans",
      name: {
        uk: "Какао-боби — теплофізичні властивості",
        en: "Cocoa beans — thermophysical properties",
        de: "Kakaobohnen — thermophysikalische Eigenschaften",
      },
      type: "vs_temp",
      source: "Чубик і Маслов, 1970, Табл. 47",
      equations: [linearTempEquation],
      cols: ["T, °C", "ρ, кг/м³", "λ, Вт/(м·К)", "cₚ, Дж/(кг·К)", "a×10⁸, м²/с"],
      digits: [0, 0, 3, 0, 0],
      data: [
        [20, 560, 0.105, 2261, 819],
        [50, null, 0.099, 2261, 777],
        [70, null, 0.093, 2261, 763],
        [110, null, 0.093, 2261, 750],
      ],
    },
  ],
};
