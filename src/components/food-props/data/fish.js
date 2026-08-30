/** Food group: Риба і рибні продукти */
import { linearTempEquation } from "./approximationNotes.js";

export const fish = {
  id: "fish",
  icon: "🐟",
  color: "#80DEEA",
  name: {
    uk: "Риба і рибні продукти",
    en: "Fish & Fish Products",
    de: "Fisch & Fischprodukte",
  },
  products: [
    {
      id: "fish_lambda",
      name: {
        uk: "Теплопровідність риби, Вт/(м·К)",
        en: "Fish thermal conductivity, W/(m·K)",
        de: "Wärmeleitfähigkeit Fisch, W/(m·K)",
      },
      type: "static",
      source: "Чубик і Маслов, 1970, Табл. 155–156",
      cols: ["Риба", "λ, Вт/(м·К)", "Примітка"],
      digits: [null, 3, null],
      data: [
        ["Лящ", 0.471, "при кімн. температурі"],
        ["Судак", 0.433, "при кімн. температурі"],
        ["Тріска", 0.46, "при кімн. температурі"],
      ],
    },
    {
      id: "pike_perch_frozen",
      name: {
        uk: "λ м'язів судака vs температура",
        en: "Pike-perch muscle λ vs temperature",
        de: "Zander-Muskel λ vs Temperatur",
      },
      type: "static",
      source: "Чубик і Маслов, 1970, Табл. 156",
      note: {
        uk: "При від'ємних температурах — заморожена риба",
        en: "At negative temperatures — frozen fish",
        de: "Bei negativen Temperaturen — gefrorener Fisch",
      },
      equations: [linearTempEquation],
      cols: ["T, °C", "λ, Вт/(м·К)", "T, °C", "λ, Вт/(м·К)"],
      digits: [1, 3, 1, 3],
      data: [
        [-1, 0.432, -6.2, 1.08],
        [-3, 0.907, -8.1, 1.091],
        [-3.1, 0.985, -14, 1.099],
      ],
    },
    {
      id: "fish_cp",
      name: {
        uk: "cₚ і T замерзання риби",
        en: "Fish heat capacity and freezing point",
        de: "Fisch Wärmekapazität und Gefrierpunkt",
      },
      type: "static",
      source: "Чубик і Маслов, 1970, Табл. 157",
      cols: ["Риба", "W, %", "cₚ вище Tзам, Дж/(кг·К)", "cₚ нижче Tзам, Дж/(кг·К)", "Tзам, °C"],
      digits: [null, 0, 0, 0, 1],
      data: [
        ["Заморожена (загально)", "62–85", 3349, 1675, null],
        ["Мерланг", 82, 3601, 1842, -2.2],
        ["Морський окунь", 80, 3517, 1842, -2.2],
        ["Сайра", 79, 3475, 1842, -2.2],
        ["Скумбрія", 57, 2763, 1549, -2.2],
        ["Тріска", 80, 3517, 1842, -2.2],
      ],
    },
    {
      id: "fish_enthalpy",
      name: {
        uk: "Ентальпія і cₚ риби (пікша, тріска) vs T",
        en: "Enthalpy and cp of fish (haddock, cod) vs T",
        de: "Enthalpie und cp Fisch vs T",
      },
      type: "static",
      source: "Чубик і Маслов, 1970, Табл. 158",
      note: {
        uk: "h — ентальпія кДж/кг (відл. від −40°C); cₚ — Дж/(кг·К)",
        en: "h — enthalpy kJ/kg (ref. −40°C); cp — J/(kg·K)",
        de: "h — Enthalpie kJ/kg (Ref. −40°C); cp — J/(kg·K)",
      },
      equations: [
        linearTempEquation,
        {
          label: { uk: "Середня теплоємність з ентальпії", en: "Mean heat capacity from enthalpy", de: "Mittlere Wärmekapazität aus Enthalpie" },
          formula: "cₚ,сер=(h2-h1)·1000/(T2-T1)",
          description: { uk: "Використовуйте сусідні точки h(T); h у кДж/кг, T у °C, cₚ у Дж/(кг·К).", en: "Use neighboring h(T) points; h in kJ/kg, T in °C, cₚ in J/(kg·K).", de: "Benachbarte h(T)-Punkte verwenden; h in kJ/kg, T in °C, cₚ in J/(kg·K)." },
          range: "−40–20°C",
        },
      ],
      cols: ["T, °C", "h пікша, кДж/кг", "cₚ пікша, Дж/(кг·К)", "h тріска, кДж/кг", "cₚ тріска, Дж/(кг·К)"],
      digits: [0, 1, 0, 1, 0],
      data: [
        [-40, 0, 1842, 0, 1842],
        [-30, 19.4, 2093, 19.1, 2051],
        [-20, 42, 2596, 41.9, 2596],
        [-10, 73.1, 4019, 74.2, 4229],
        [-5, 103.7, 10425, 105.2, 10258],
        [-3, 136, 27130, 136.9, 26544],
        [-2, 176.6, 69124, 176.5, 65649],
        [-1, 307.2, 114551, 297.9, 102744],
        [0, 337.7, 3977, 323.1, 4145],
        [5, null, null, null, null],
        [10, 374.8, 3726, 359.6, 3684],
        [20, 411.9, 3726, 396.3, 3684],
      ],
    },
  ],
};
