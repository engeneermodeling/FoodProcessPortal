/** Food group: Морозиво */
export const icecream = {
  id: "icecream",
  icon: "🍦",
  color: "#F8BBD9",
  name: {
    uk: "Морозиво",
    en: "Ice Cream",
    de: "Speiseeis",
  },
  products: [
    {
      id: "icecream_density",
      name: {
        uk: "Морозиво — густина vs взбитість",
        en: "Ice cream density vs overrun",
        de: "Speiseeis Dichte vs Aufschlag",
      },
      type: "vs_both",
      source: "Чубик і Маслов, 1970, Табл. 214",
      note: {
        uk: "ρ суміші, кг/м³ / взбитість, %",
        en: "Mix density kg/m³ / overrun %",
        de: "Mischungsdichte kg/m³ / Aufschlag %",
      },
      cols: ["ρ суміші, кг/м³", "0%", "50%", "60%", "70%", "80%", "90%", "100%", "110%"],
      digits: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      data: [
        [1050, 750, 700, 656, 618, 583, 553, 525, 500],
        [1080, 771, 720, 675, 635, 600, 568, 540, 514],
        [1100, 785, 733, 688, 647, 611, 578, 550, 524],
        [1110, 793, 740, 694, 653, 617, 584, 555, 529],
      ],
    },
    {
      id: "icecream_cp",
      name: {
        uk: "Морозиво — cₚ vs склад і T",
        en: "Ice cream cp vs composition and T",
        de: "Speiseeis cp vs Zusammensetzung und T",
      },
      type: "static",
      source: "Чубик і Маслов, 1970, Табл. 215–216",
      cols: ["Вид морозива", "W, %", "Жир, %", "T, °C", "cₚ, Дж/(кг·К)"],
      digits: [null, 1, 1, 0, 0],
      data: [
        ["Вершкове", 63.1, 10, 20, 3350],
        ["Вершкове", 63.1, 10, -10, 1760],
        ["Вершкове", 63.1, 10, -20, 1680],
        ["Пломбір", 57.8, 15, 20, 3140],
        ["Пломбір", 57.8, 15, -10, 1720],
        ["Молочне", 69.7, 3.5, 20, 3560],
        ["Молочне", 69.7, 3.5, -10, 1810],
        ["Фруктове", 74.4, 0, 20, 3680],
        ["Фруктове", 74.4, 0, -10, 1840],
      ],
    },
    {
      id: "icecream_lambda",
      name: {
        uk: "Морозиво — λ vs T і склад",
        en: "Ice cream λ vs T and composition",
        de: "Speiseeis λ vs T und Zusammensetzung",
      },
      type: "static",
      source: "Чубик і Маслов, 1970, Табл. 217",
      cols: ["Вид морозива", "W, %", "T = −10°C, Вт/(м·К)", "T = −20°C, Вт/(м·К)", "T = −30°C, Вт/(м·К)"],
      digits: [null, 1, 3, 3, 3],
      data: [
        ["Вершкове", 63.1, 0.94, 1.09, 1.2],
        ["Пломбір", 57.8, 0.89, 1.03, 1.13],
        ["Молочне", 69.7, 1.01, 1.16, 1.27],
        ["Фруктове", 74.4, 1.07, 1.22, 1.34],
      ],
    },
  ],
};
