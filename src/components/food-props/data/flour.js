/** Food group: Борошно і зернові */
import { linearCompositionEquation, linearTempEquation } from "./approximationNotes.js";

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
    equations: [linearTempEquation, linearCompositionEquation],
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
  },
  {
    id: "grain_bulk_layer_props",
    name: {
      uk: "Зерно — насипна маса і формули для нерухомого шару",
      en: "Grain — bulk density and fixed-bed formulas",
      de: "Getreide — Schüttdichte und Festbettformeln",
    },
    type: "static",
    source: "Чубик і Маслов, 1970, Табл. 28; формули стор. 23",
    note: {
      uk: "Формули наведено для вологості на суху масу Wc: пшениця 10–25%, кукурудза 10–30%.",
      en: "Formulas use moisture on dry basis Wc: wheat 10–25%, corn 10–30%.",
      de: "Die Formeln verwenden Feuchte auf Trockenbasis Wc: Weizen 10–25%, Mais 10–30%.",
    },
    equations: [
      {
        label: { uk: "Пшениця, нерухомий шар", en: "Wheat, fixed bed", de: "Weizen, Festbett" },
        formula: "λ=1,163(0,06+0,002Wc); cₚ=4186,8(0,25+0,01Wc); a×10⁴=2,5+0,05Wc",
        katex: "\\begin{aligned}\\lambda&=1{,}163(0{,}06+0{,}002W_c)\\\\c_p&=4186{,}8(0{,}25+0{,}01W_c)\\\\a\\cdot10^4&=2{,}5+0{,}05W_c\\end{aligned}",
        description: { uk: "Підставте вологість зерна на суху масу Wc; формули стосуються нерухомого шару пшениці.", en: "Substitute dry-basis grain moisture Wc; formulas apply to a fixed wheat bed.", de: "Feuchte Wc bezogen auf Trockenmasse einsetzen; Formeln gelten für ein ruhendes Weizenbett." },
        units: { uk: "Wc — %; λ — Вт/(м·К); cₚ — Дж/(кг·К); a — м²/год", en: "Wc in %; lambda in W/(m·K); cp in J/(kg·K); a in m²/h", de: "Wc in %; lambda in W/(m·K); cp in J/(kg·K); a in m²/h" },
        range: "Wc=10–25%",
        error: { uk: "орієнтовно 3–7% для шару з близькою насипною структурою", en: "about 3-7% for a bed with similar bulk structure", de: "etwa 3-7% bei ähnlicher Schüttstruktur" },
      },
      {
        label: { uk: "Кукурудза, нерухомий шар", en: "Corn, fixed bed", de: "Mais, Festbett" },
        formula: "λ=1,163(0,32+0,0053Wc); cₚ=4186,8(0,23+0,01Wc); a×10³=1,44-0,014Wc",
        katex: "\\begin{aligned}\\lambda&=1{,}163(0{,}32+0{,}0053W_c)\\\\c_p&=4186{,}8(0{,}23+0{,}01W_c)\\\\a\\cdot10^3&=1{,}44-0{,}014W_c\\end{aligned}",
        description: { uk: "Підставте вологість зерна на суху масу Wc; формули стосуються нерухомого шару кукурудзи.", en: "Substitute dry-basis grain moisture Wc; formulas apply to a fixed corn bed.", de: "Feuchte Wc bezogen auf Trockenmasse einsetzen; Formeln gelten für ein ruhendes Maisbett." },
        units: { uk: "Wc — %; λ — Вт/(м·К); cₚ — Дж/(кг·К); a — м²/год", en: "Wc in %; lambda in W/(m·K); cp in J/(kg·K); a in m²/h", de: "Wc in %; lambda in W/(m·K); cp in J/(kg·K); a in m²/h" },
        range: "Wc=10–30%",
        error: { uk: "орієнтовно 3–7% для шару з близькою насипною структурою", en: "about 3-7% for a bed with similar bulk structure", de: "etwa 3-7% bei ähnlicher Schüttstruktur" },
      },
    ],
    cols: ["Культура", "Насипна маса, кг/м³"],
    digits: [null, 0],
    data: [
      ["Кукурудза", 700],
      ["Овес", 500],
      ["Просо", 700],
      ["Пшениця", 760],
      ["Жито", 720],
      ["Ячмінь", 650],
    ],
  }
);
