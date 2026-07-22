/** Food group: Борошно і зернові */
export const flour = {
  id: "flour",
  icon: "🌾",
  color: "#D7CCC8",
  name: {
    uk: "Борошно і зернові",
    en: "Flour & Grains",
    de: "Mehl & Getreide",
  },
  products: [
    {
      id: "wheat_flour",
      name: {
        uk: "Пшеничне борошно",
        en: "Wheat flour",
        de: "Weizenmehl",
      },
      type: "static",
      source: "НУХТ 2012, Табл. 2.1, 2.2",
      cols: ["Сорт", "W, %", "ρ, кг/м³", "cₚ, Дж/(кг·К)", "λ, Вт/(м·К)", "a×10⁸, м²/с"],
      digits: [null, 1, 0, 0, 3, 1],
      data: [
        ["Вищий сорт", 20, 595, 1175, 0.168, 24.1],
        ["I сорт", 20, 580, 1035, 0.143, 23.9],
        ["II сорт", 20, 506, 1203, 0.147, 24.3],
      ],
    },
    {
      id: "rye_flour",
      name: {
        uk: "Житнє борошно",
        en: "Rye flour",
        de: "Roggenmehl",
      },
      type: "static",
      source: "НУХТ 2012, Табл. 2.2",
      cols: ["Сорт", "ρ, кг/м³", "cₚ, Дж/(кг·К)", "λ, Вт/(м·К)", "a×10⁸, м²/с"],
      digits: [null, 0, 0, 3, 1],
      data: [
        ["Обдирна", 542, 1355, 0.164, 22.4],
        ["Обойна", 547, 1342, 0.164, 22.4],
      ],
    },
  ],
};
