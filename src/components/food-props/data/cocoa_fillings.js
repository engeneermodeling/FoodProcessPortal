/** Food group: Какао-масло і начинки */
import { linearTempEquation, logTempEquation } from "./approximationNotes.js";

export const cocoa_fillings = {
  id: "cocoa_fillings",
  icon: "🍯",
  color: "#BCAAA4",
  name: {
    uk: "Какао-масло і начинки",
    en: "Cocoa Butter & Fillings",
    de: "Kakaobutter & Füllungen",
  },
  products: [
    {
      id: "cocoa_butter",
      name: {
        uk: "Масло какао — теплофізичні властивості",
        en: "Cocoa butter — thermophysical properties",
        de: "Kakaobutter — thermophysikalische Eigenschaften",
      },
      type: "vs_temp",
      source: "Чубик і Маслов, 1970, Табл. 69",
      note: {
        uk: "T плавлення 31–34°C, T застигання 23–28°C",
        en: "Melting point 31–34°C, solidification 23–28°C",
        de: "Schmelzpunkt 31–34°C, Erstarrung 23–28°C",
      },
      equations: [linearTempEquation],
      cols: ["T, °C", "ρ, кг/м³", "λ, Вт/(м·К)", "cₚ, Дж/(кг·К)", "a×10⁸, м²/с"],
      digits: [0, 0, 3, 0, 1],
      data: [
        [10, 927, 0.291, 2512, 125],
        [30, 910, 0.325, 2512, 144.4],
        [50, 895, 0.372, 2512, 166.7],
        [70, 880, 0.43, 2512, 194.4],
      ],
    },
    {
      id: "cocoa_butter_visc",
      name: {
        uk: "В'язкість масла какао vs T",
        en: "Cocoa butter viscosity vs T",
        de: "Kakaobutter Viskosität vs T",
      },
      type: "static",
      source: "Чубик і Маслов, 1970, Табл. 70",
      equations: [logTempEquation],
      cols: ["T, °C", "μ, мПа·с", "T, °C", "μ, мПа·с", "T, °C", "μ, мПа·с"],
      digits: [0, 1, 0, 1, 0, 1],
      data: [
        [35, 52, 50, 27.8, 65, 19.2],
        [40, 38.3, 55, 24.9, 70, 15.8],
        [45, 34.9, 60, 20.6, 75, 15.4],
      ],
    },
    {
      id: "fruit_puree_visc",
      name: {
        uk: "В'язкість фруктових мас і пюре при 70°C",
        en: "Viscosity of fruit masses and purees at 70°C",
        de: "Viskosität Fruchtmassen und Pürees bei 70°C",
      },
      type: "static",
      source: "Чубик і Маслов, 1970, Табл. 62–63",
      cols: ["Продукт", "W, %", "μ, мПа·с"],
      digits: [null, 0, 0],
      data: [
        ["Аличове пюре з цукром (1:1)", 32, 390],
        ["Аличове пюре з цукром (1:1)", 20, 786],
        ["Яблучне пюре з цукром (1:1)", 32, 1950],
        ["Желейна маса з агароїдом", 27, 282],
      ],
    },
    {
      id: "fruit_fillings_visc",
      name: {
        uk: "В'язкість фруктово-ягідних начинок vs T",
        en: "Viscosity of fruit-berry fillings vs T",
        de: "Viskosität Fruchtfüllungen vs T",
      },
      type: "static",
      source: "Чубик і Маслов, 1970, Табл. 68",
      equations: [logTempEquation],
      cols: ["Начинка", "T, °C", "μ, мПа·с"],
      digits: [null, 0, 0],
      data: [
        ["Брусниця", 24, 2245],
        ["Брусниця", 36, 711],
        ["Брусниця", 51, 232],
        ["Брусниця", 62, 131],
        ["Вишнева", 21, 4004],
        ["Вишнева", 55, 144],
        ["Кизилова", 20, 3852],
        ["Кизилова", 32, 1063],
        ["Кизилова", 47, 313],
        ["Кизилова", 62, 60],
        ["Яблучна", 23, 5030],
        ["Яблучна", 50, 570],
      ],
    },
  ],
};
