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
          description: { uk: "t у °C; ρ у кг/м³.", en: "t in °C; ρ in kg/m³.", de: "t in °C; ρ in kg/m³." },
          range: "5–35°C",
        },
        {
          label: { uk: "Теплопровідність меду", en: "Honey thermal conductivity", de: "Wärmeleitfähigkeit von Honig" },
          formula: "λ=1,163(0,29+0,00075t)",
          description: { uk: "t у °C; λ у Вт/(м·К).", en: "t in °C; λ in W/(m·K).", de: "t in °C; λ in W/(m·K)." },
          range: "5–35°C",
        },
        {
          label: { uk: "Теплоємність меду", en: "Honey heat capacity", de: "Wärmekapazität von Honig" },
          formula: "cₚ=4186,8(0,54+0,0035t)",
          description: { uk: "t у °C; cₚ у Дж/(кг·К).", en: "t in °C; cₚ in J/(kg·K).", de: "t in °C; cₚ in J/(kg·K)." },
          range: "5–35°C",
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
