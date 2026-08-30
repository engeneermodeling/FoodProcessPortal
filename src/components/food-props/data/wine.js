/** Food group: Вино і виноматеріали */
import { linearTempEquation, logTempEquation } from "./approximationNotes.js";

export const wine = {
  id: "wine",
  icon: "🍷",
  color: "#CE93D8",
  name: {
    uk: "Вино і виноматеріали",
    en: "Wine & Wine Materials",
    de: "Wein & Weinmaterialien",
  },
  products: [
    {
      id: "wine_viscosity",
      name: {
        uk: "В'язкість вина при 18–20°C",
        en: "Wine viscosity at 18–20°C",
        de: "Weinviskosität bei 18–20°C",
      },
      type: "static",
      source: "Чубик і Маслов, 1970, Табл. 112",
      cols: ["Вино", "Спирт, %", "Екстракт, %", "μ, мПа·с"],
      digits: [null, 3, 3, 3],
      data: [
        ["Аліготе", 7.975, 1.894, 1.53],
        ["Рислінг", 8.468, 1.014, 1.49],
        ["Мадера", 13.896, 6.424, 2.14],
        ["Портвейн білий", 11.431, 11.431, 2.5],
        ["Кагор", 11.616, 16.451, 2.77],
        ["Портвейн червоний", 12.895, 12.869, 2.54],
        ["Десертне рожеве", 11.191, 16.591, 2.78],
        ["Каберне", 8.84, 2.684, 1.58],
        ["Саперавіі", 8.27, 2.857, 1.55],
      ],
    },
    {
      id: "champagne_visc",
      name: {
        uk: "В'язкість шампанських вин vs T",
        en: "Champagne viscosity vs T",
        de: "Schaumwein Viskosität vs T",
      },
      type: "static",
      source: "Чубик і Маслов, 1970, Табл. 111",
      equations: [linearTempEquation, logTempEquation],
      cols: ["T, °C", "Солодке, мПа·с", "Напівсухе, мПа·с"],
      digits: [1, 2, 2],
      data: [
        [-2.5, 67.5, 45],
        [0, 38, 32],
        [5, 28, 24.5],
        [10, 24.5, 21],
        [15, 21.5, 18.5],
        [18, 20, 17],
      ],
    },
    {
      id: "wine_freezing",
      name: {
        uk: "Температура замерзання і ρ вин при 20°C",
        en: "Wine freezing point and density at 20°C",
        de: "Weingefrierpoint und Dichte bei 20°C",
      },
      type: "static",
      source: "Чубик і Маслов, 1970, Табл. 113",
      cols: ["Вино", "Tзам, °C", "ρ, кг/м³"],
      digits: [null, 1, 0],
      data: [
        ["Рислінг анапський", -5.1, 992],
        ["Рислінг Абрау", -4.8, 993],
        ["Каберне Абрау", -5.4, 994],
        ["Столове біле купажне", -3.95, 996],
        ["Портвейн рожевий", -10.1, 1016],
        ["Портвейн білий", -11.4, 1017],
        ["Портвейн червоний", -11.6, 1010],
        ["Мадера стара", -12.15, 1006],
        ["Мускат", -13.5, 1064],
        ["Кагор", -12.2, 1050],
        ["Каберне столове", -6.2, 994],
      ],
    },
  ],
};
