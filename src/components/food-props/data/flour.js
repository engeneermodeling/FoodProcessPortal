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

flour.products.push(
  {
    id: "starch_milk_visc",
    name: { uk: "В'язкість крохмального молока vs T і густина", en: "Starch milk viscosity vs T and density", de: "Stärkemilch Viskosität vs T" },
    type: "static",
    source: "Чубик і Маслов, 1970, Табл. 36–37",
    cols: ["Крохмаль", "Густина, °Бр", "T, °C", "μ×10², Па·с"],
    digits: [null, 1, 0, 4],
    data: [
      ["Кукурудзяний",  8.0, 20, 0.1025],
      ["Кукурудзяний",  8.0, 30, 0.1008],
      ["Кукурудзяний", 11.0, 20, 0.1060],
      ["Картопляний",   8.9, 20, 0.1007],
      ["Картопляний",  30.0, 20, 0.1263],
      ["Картопляний",  37.1, 20, 0.2120],
    ],
  },
  {
    id: "nuts_density",
    name: { uk: "Густина горіхів сирих і смажених, кг/м³", en: "Density of raw and roasted nuts, kg/m³", de: "Dichte roher und gerösteter Nüsse, kg/m³" },
    type: "static",
    source: "Чубик і Маслов, 1970, Табл. 44",
    cols: ["Горіх", "Сирий, кг/м³", "Смажений, кг/м³"],
    digits: [null, 1, 1],
    data: [
      ["Арахіс",  915.4, 914.6],
      ["Мигдаль", 916.5, 916.2],
      ["Кеш'ю",   917.2, 912.7],
    ],
  }
);
