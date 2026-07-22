/**
 * FluidsCalc.jsx
 * Довідник теплофізичних властивостей теплоносіїв харчових виробництв
 * Повітря, пропіленгліколь, етиленгліколь, мінеральне масло, аміак
 */

import { useState, useMemo, useEffect } from 'react';
import './fluids-calc.css';

// ─── Дані ─────────────────────────────────────────────────────────────────

// Повітря (Engineering ToolBox / ASHRAE, 1 атм)
// T °C | ρ кг/м³ | cp Дж/(кг·К) | λ Вт/(м·К) | μ мкПа·с | ν м²/с×10⁶ | Pr
const AIR_DATA = [
  [-50, 1.582, 1006, 0.02036, 14.58, 9.22, 0.720],
  [-40, 1.514, 1006, 0.02117, 15.20, 10.04, 0.718],
  [-30, 1.451, 1006, 0.02198, 15.82, 10.90, 0.716],
  [-20, 1.394, 1006, 0.02278, 16.43, 11.79, 0.715],
  [-10, 1.341, 1006, 0.02357, 17.03, 12.70, 0.714],
  [0,   1.292, 1006, 0.02436, 17.23, 13.32, 0.713],
  [10,  1.247, 1006, 0.02512, 17.83, 14.30, 0.712],
  [20,  1.204, 1007, 0.02587, 18.43, 15.31, 0.711],
  [30,  1.164, 1007, 0.02662, 19.01, 16.34, 0.710],
  [40,  1.127, 1007, 0.02736, 19.59, 17.38, 0.710],
  [50,  1.093, 1007, 0.02808, 20.16, 18.44, 0.709],
  [60,  1.060, 1008, 0.02881, 20.73, 19.56, 0.709],
  [70,  1.029, 1008, 0.02953, 21.29, 20.69, 0.708],
  [80,  1.000, 1008, 0.03024, 21.85, 21.84, 0.708],
  [90,  0.973, 1008, 0.03095, 22.39, 23.01, 0.707],
  [100, 0.946, 1009, 0.03165, 21.94, 23.19, 0.703],
  [120, 0.898, 1010, 0.03303, 23.01, 25.63, 0.700],
  [140, 0.854, 1013, 0.03439, 24.07, 28.19, 0.700],
  [160, 0.815, 1016, 0.03571, 25.10, 30.81, 0.696],
  [180, 0.779, 1019, 0.03699, 26.10, 33.50, 0.693],
  [200, 0.746, 1023, 0.03826, 27.09, 36.31, 0.690],
];

// Пропіленгліколь 30% (харчовий, ASHRAE 2021)
// T °C | ρ кг/м³ | cp Дж/(кг·К) | λ Вт/(м·К) | μ мПа·с | Pr
const PG30_DATA = [
  [-30, 1042, 3810, 0.448, 28.5, 243],
  [-20, 1038, 3840, 0.452, 14.6, 124],
  [-10, 1033, 3870, 0.456, 8.12, 68.8],
  [0,   1028, 3900, 0.460, 4.89, 41.4],
  [10,  1023, 3930, 0.462, 3.16, 26.9],
  [20,  1017, 3960, 0.464, 2.17, 18.5],
  [30,  1011, 3990, 0.465, 1.57, 13.5],
  [40,  1005, 4010, 0.466, 1.18, 10.2],
  [50,   998, 4040, 0.466, 0.916, 7.94],
  [60,   991, 4060, 0.466, 0.730, 6.36],
];

// Пропіленгліколь 50% (харчовий, ASHRAE 2021)
const PG50_DATA = [
  [-40, 1063, 3570, 0.408, 160,  1402],
  [-30, 1058, 3600, 0.412, 60.1, 526],
  [-20, 1053, 3640, 0.416, 26.8, 234],
  [-10, 1047, 3680, 0.419, 13.4, 118],
  [0,   1041, 3720, 0.422, 7.40, 65.2],
  [10,  1035, 3750, 0.424, 4.44, 39.3],
  [20,  1028, 3790, 0.425, 2.87, 25.6],
  [30,  1021, 3820, 0.426, 1.97, 17.7],
  [40,  1014, 3850, 0.427, 1.42, 12.8],
  [50,  1006, 3880, 0.427, 1.06,  9.64],
];

// Етиленгліколь 30% (тільки промислове застосування, Engineering ToolBox)
const EG30_DATA = [
  [-20, 1052, 3800, 0.458, 6.52, 54.1],
  [-10, 1048, 3830, 0.461, 4.14, 34.4],
  [0,   1043, 3860, 0.464, 2.78, 23.1],
  [10,  1037, 3890, 0.467, 1.97, 16.4],
  [20,  1031, 3920, 0.469, 1.46, 12.2],
  [30,  1025, 3940, 0.471, 1.12,  9.36],
  [40,  1018, 3960, 0.473, 0.883, 7.39],
  [50,  1011, 3980, 0.474, 0.710, 5.96],
  [60,  1004, 4000, 0.475, 0.583, 4.91],
  [70,   996, 4010, 0.475, 0.487, 4.11],
  [80,   988, 4020, 0.475, 0.415, 3.52],
];

// Мінеральне масло (трансформаторне/холодильне, Engineering ToolBox)
const OIL_DATA = [
  [-20, 910, 1750, 0.139, 2100, 26400],
  [-10, 905, 1780, 0.140, 480,  6110],
  [0,   900, 1800, 0.141, 150,  1930],
  [10,  895, 1830, 0.141, 56.5, 730],
  [20,  890, 1860, 0.142, 24.0, 314],
  [30,  885, 1890, 0.143, 11.6, 153],
  [40,  880, 1920, 0.143, 6.25, 83.8],
  [50,  875, 1950, 0.143, 3.67, 50.0],
  [60,  870, 1970, 0.144, 2.32, 31.8],
  [70,  864, 2000, 0.144, 1.58, 21.9],
  [80,  859, 2030, 0.144, 1.13, 15.9],
  [100, 848, 2080, 0.145, 0.660, 9.47],
];

// Аміак рідкий (NIST/ASHRAE)
const NH3_DATA = [
  [-50, 703, 4560, 0.620, 0.255, 1.87],
  [-40, 690, 4590, 0.594, 0.220, 1.70],
  [-30, 677, 4620, 0.566, 0.192, 1.57],
  [-20, 665, 4650, 0.539, 0.170, 1.46],
  [-10, 652, 4680, 0.511, 0.152, 1.39],
  [0,   638, 4720, 0.484, 0.138, 1.34],
  [10,  625, 4760, 0.456, 0.126, 1.32],
  [20,  611, 4820, 0.429, 0.116, 1.30],
  [30,  596, 4890, 0.401, 0.108, 1.31],
  [40,  581, 4980, 0.374, 0.101, 1.34],
  [50,  565, 5090, 0.345, 0.095, 1.40],
];

// Насичений розсіл NaCl 23% (Engineering ToolBox)
const BRINE_DATA = [
  [-20, 1183, 3400, 0.524, 5.18, 33.6],
  [-15, 1179, 3420, 0.521, 4.00, 26.3],
  [-10, 1175, 3440, 0.518, 3.20, 21.3],
  [-5,  1171, 3460, 0.515, 2.62, 17.6],
  [0,   1167, 3480, 0.512, 2.19, 14.9],
  [5,   1162, 3500, 0.509, 1.87, 12.8],
  [10,  1158, 3520, 0.506, 1.62, 11.3],
  [15,  1153, 3540, 0.503, 1.42, 9.99],
  [20,  1148, 3560, 0.500, 1.26, 8.96],
  [25,  1143, 3580, 0.497, 1.13, 8.13],
];

const FLUIDS = {
  air: {
    id: 'air',
    icon: '💨',
    color: '#64B5F6',
    colorDark: '#1565C0',
    name: { uk: 'Сухе повітря', en: 'Dry Air', de: 'Trockene Luft', ru: 'Сухой воздух' },
    desc: { uk: '1 атм, −50…200°C', en: '1 atm, −50…200°C', de: '1 atm, −50…200°C', ru: '1 атм, −50…200°C' },
    use: { uk: 'Сушарки, печі, вентиляція', en: 'Dryers, ovens, ventilation', de: 'Trockner, Öfen, Lüftung', ru: 'Сушилки, печи, вентиляция' },
    cols: ['T, °C', 'ρ, кг/м³', 'cₚ, Дж/(кг·К)', 'λ, Вт/(м·К)', 'μ, мкПа·с', 'ν×10⁶, м²/с', 'Pr'],
    data: AIR_DATA,
    digits: [0, 3, 0, 5, 2, 2, 3],
  },
  pg30: {
    id: 'pg30',
    icon: '🟢',
    color: '#66BB6A',
    colorDark: '#1B5E20',
    name: { uk: 'Пропіленгліколь 30%', en: 'Propylene Glycol 30%', de: 'Propylenglykol 30%', ru: 'Пропиленгликоль 30%' },
    desc: { uk: 'Харчовий, −30…60°C', en: 'Food-grade, −30…60°C', de: 'Lebensmittelqualität, −30…60°C', ru: 'Пищевой, −30…60°C' },
    use: { uk: 'Холодильні системи, кріогенне охолодження харчових продуктів', en: 'Refrigeration, food cooling systems', de: 'Kälteanlagen, Lebensmittelkühlung', ru: 'Холодильные системы, охлаждение продуктов' },
    cols: ['T, °C', 'ρ, кг/м³', 'cₚ, Дж/(кг·К)', 'λ, Вт/(м·К)', 'μ, мПа·с', 'Pr'],
    data: PG30_DATA,
    digits: [0, 0, 0, 3, 2, 0],
  },
  pg50: {
    id: 'pg50',
    icon: '🟩',
    color: '#26A69A',
    colorDark: '#004D40',
    name: { uk: 'Пропіленгліколь 50%', en: 'Propylene Glycol 50%', de: 'Propylenglykol 50%', ru: 'Пропиленгликоль 50%' },
    desc: { uk: 'Харчовий, −40…50°C', en: 'Food-grade, −40…50°C', de: 'Lebensmittelqualität, −40…50°C', ru: 'Пищевой, −40…50°C' },
    use: { uk: 'Глибоке заморожування, морозиво, шокове охолодження', en: 'Deep freezing, ice cream, blast chilling', de: 'Tiefgefrieren, Speiseeis, Schockfrierung', ru: 'Глубокая заморозка, мороженое, шоковое охлаждение' },
    cols: ['T, °C', 'ρ, кг/м³', 'cₚ, Дж/(кг·К)', 'λ, Вт/(м·К)', 'μ, мПа·с', 'Pr'],
    data: PG50_DATA,
    digits: [0, 0, 0, 3, 1, 0],
  },
  eg30: {
    id: 'eg30',
    icon: '⚠️',
    color: '#FFA726',
    colorDark: '#E65100',
    name: { uk: 'Етиленгліколь 30%', en: 'Ethylene Glycol 30%', de: 'Ethylenglykol 30%', ru: 'Этиленгликоль 30%' },
    desc: { uk: 'Тільки пром., −20…80°C', en: 'Industrial only, −20…80°C', de: 'Nur Industrie, −20…80°C', ru: 'Только пром., −20…80°C' },
    use: { uk: 'Промислове охолодження, УВАГА: токсичний — не для контакту з продуктом', en: 'Industrial cooling — WARNING: toxic, not for food contact', de: 'Industriekühlung — ACHTUNG: giftig, kein Lebensmittelkontakt', ru: 'Промышленное охлаждение — ВНИМАНИЕ: токсичен' },
    cols: ['T, °C', 'ρ, кг/м³', 'cₚ, Дж/(кг·К)', 'λ, Вт/(м·К)', 'μ, мПа·с', 'Pr'],
    data: EG30_DATA,
    digits: [0, 0, 0, 3, 3, 2],
    warning: true,
  },
  oil: {
    id: 'oil',
    icon: '🛢️',
    color: '#8D6E63',
    colorDark: '#3E2723',
    name: { uk: 'Мінеральне масло', en: 'Mineral Oil', de: 'Mineralöl', ru: 'Минеральное масло' },
    desc: { uk: 'Холодильне/трансф., −20…100°C', en: 'Refrigeration/transformer, −20…100°C', de: 'Kälteöl/Transformatoröl, −20…100°C', ru: 'Холодильное/трансф., −20…100°C' },
    use: { uk: 'Холодильні компресори, теплообмінники з нагріванням до 100°C', en: 'Refrigeration compressors, heat exchangers up to 100°C', de: 'Kältekompressoren, Wärmetauscher bis 100°C', ru: 'Холодильные компрессоры, теплообменники до 100°C' },
    cols: ['T, °C', 'ρ, кг/м³', 'cₚ, Дж/(кг·К)', 'λ, Вт/(м·К)', 'μ, мПа·с', 'Pr'],
    data: OIL_DATA,
    digits: [0, 0, 0, 3, 1, 0],
  },
  nh3: {
    id: 'nh3',
    icon: '🔵',
    color: '#7E57C2',
    colorDark: '#311B92',
    name: { uk: 'Аміак (рідкий)', en: 'Ammonia (liquid)', de: 'Ammoniak (flüssig)', ru: 'Аммиак (жидкий)' },
    desc: { uk: 'Холодоагент, −50…50°C', en: 'Refrigerant, −50…50°C', de: 'Kältemittel, −50…50°C', ru: 'Хладагент, −50…50°C' },
    use: { uk: "Великі промислові холодильні установки, м'ясна і рибна галузь", en: "Large industrial refrigeration, meat and fish processing", de: "Großkälteanlagen, Fleisch- und Fischverarbeitung", ru: "Крупные холодильные установки, мясная и рыбная отрасль" },
    cols: ['T, °C', 'ρ, кг/м³', 'cₚ, Дж/(кг·К)', 'λ, Вт/(м·К)', 'μ, мПа·с', 'Pr'],
    data: NH3_DATA,
    digits: [0, 0, 0, 3, 3, 2],
    warning: true,
  },
  brine: {
    id: 'brine',
    icon: '🧂',
    color: '#78909C',
    colorDark: '#263238',
    name: { uk: 'Розсіл NaCl 23%', en: 'NaCl Brine 23%', de: 'NaCl-Sole 23%', ru: 'Рассол NaCl 23%' },
    desc: { uk: 'Насичений, −20…25°C', en: 'Saturated, −20…25°C', de: 'Gesättigt, −20…25°C', ru: 'Насыщенный, −20…25°C' },
    use: { uk: "Охолодження в рибній, м'ясній галузі, виробництво сиру", en: 'Cooling in fish, meat processing, cheese production', de: 'Kühlung in Fisch-, Fleischverarbeitung, Käseproduktion', ru: "Охлаждение в рыбной, мясной отрасли, производство сыра" },
    cols: ['T, °C', 'ρ, кг/м³', 'cₚ, Дж/(кг·К)', 'λ, Вт/(м·К)', 'μ, мПа·с', 'Pr'],
    data: BRINE_DATA,
    digits: [0, 0, 0, 3, 2, 1],
  },
};

// ─── Інтерполяція ─────────────────────────────────────────────────────────
function interpolate(data, T) {
  if (T <= data[0][0]) return data[0];
  if (T >= data[data.length - 1][0]) return data[data.length - 1];
  for (let i = 0; i < data.length - 1; i++) {
    if (T >= data[i][0] && T <= data[i + 1][0]) {
      const t = (T - data[i][0]) / (data[i + 1][0] - data[i][0]);
      return data[i].map((v, j) => j === 0 ? T : v + t * (data[i + 1][j] - v));
    }
  }
  return data[0];
}

function fmt(val, digits) {
  if (val === undefined || val === null || isNaN(val)) return '—';
  if (digits === 0) return Math.round(val).toString();
  return val.toFixed(digits);
}

// ─── Компоненти ────────────────────────────────────────────────────────────

function FluidCard({ fluid, locale, selected, onClick }) {
  const name = fluid.name[locale] || fluid.name.uk;
  const desc = fluid.desc[locale] || fluid.desc.uk;
  return (
    <button
      className={`fluid-card ${selected ? 'selected' : ''} ${fluid.warning ? 'warning' : ''}`}
      onClick={onClick}
      style={{ '--fluid-color': fluid.color, '--fluid-color-dark': fluid.colorDark }}
    >
      <span className="fluid-icon">{fluid.icon}</span>
      <span className="fluid-name">{name}</span>
      <span className="fluid-desc">{desc}</span>
    </button>
  );
}

function PropRow({ row, cols, digits, highlight }) {
  return (
    <tr className={highlight ? 'highlight-row' : ''}>
      {row.map((val, i) => (
        <td key={i} className={i === 0 ? 'col-temp' : ''}>
          {fmt(val, digits[i])}
        </td>
      ))}
    </tr>
  );
}

function InterpolatedResult({ fluid, T, locale }) {
  const row = useMemo(() => interpolate(fluid.data, T), [fluid, T]);
  const labels = {
    uk: ['Температура', 'Густина', 'Теплоємність', 'Теплопровідність', 'В\'язкість', 'Число Прандтля'],
    en: ['Temperature', 'Density', 'Heat capacity', 'Thermal conductivity', 'Viscosity', 'Prandtl number'],
    de: ['Temperatur', 'Dichte', 'Wärmekapazität', 'Wärmeleitfähigkeit', 'Viskosität', 'Prandtl-Zahl'],
    ru: ['Температура', 'Плотность', 'Теплоёмкость', 'Теплопроводность', 'Вязкость', 'Число Прандтля'],
  };
  const L = labels[locale] || labels.uk;

  // Для повітря — 7 стовпців, інші — 6
  const isAir = fluid.id === 'air';
  const props = isAir
    ? [
        { label: L[0], value: fmt(row[0], 1), unit: '°C', idx: 0 },
        { label: L[1], value: fmt(row[1], 3), unit: 'кг/м³', idx: 1 },
        { label: L[2], value: fmt(row[2], 0), unit: 'Дж/(кг·К)', idx: 2 },
        { label: L[3], value: fmt(row[3], 5), unit: 'Вт/(м·К)', idx: 3 },
        { label: 'Динам. в\'язкість', value: fmt(row[4], 2), unit: 'мкПа·с', idx: 4 },
        { label: 'Кінем. в\'язкість', value: fmt(row[5], 2), unit: '×10⁻⁶ м²/с', idx: 5 },
        { label: L[5], value: fmt(row[6], 3), unit: '—', idx: 6 },
      ]
    : [
        { label: L[0], value: fmt(row[0], 1), unit: '°C', idx: 0 },
        { label: L[1], value: fmt(row[1], 0), unit: 'кг/м³', idx: 1 },
        { label: L[2], value: fmt(row[2], 0), unit: 'Дж/(кг·К)', idx: 2 },
        { label: L[3], value: fmt(row[3], 3), unit: 'Вт/(м·К)', idx: 3 },
        { label: L[4], value: fmt(row[4], fluid.digits[4] || 3), unit: 'мПа·с', idx: 4 },
        { label: L[5], value: fmt(row[5], fluid.digits[5] || 1), unit: '—', idx: 5 },
      ];

  return (
    <div className="interp-grid">
      {props.map((p, i) => (
        <div key={i} className="interp-cell">
          <div className="interp-label">{p.label}</div>
          <div className="interp-value">{p.value}</div>
          <div className="interp-unit">{p.unit}</div>
        </div>
      ))}
    </div>
  );
}

// ─── Головний компонент ────────────────────────────────────────────────────
export default function FluidsCalc({ locale = 'uk' }) {
  const [selectedId, setSelectedId] = useState('pg30');
  const [tempInput, setTempInput] = useState('');
  const [interpT, setInterpT] = useState(null);
  const [interpError, setInterpError] = useState('');
  const [view, setView] = useState('table'); // 'table' | 'interp'

  const fluid = FLUIDS[selectedId];

  const ui = (uk, en, de, ru) => ({ uk, en, de, ru }[locale] || uk);

  const handleInterp = () => {
    const val = parseFloat(tempInput.replace(',', '.'));
    if (isNaN(val)) {
      setInterpError(ui('Введіть числове значення', 'Enter a number', 'Zahl eingeben', 'Введите число'));
      return;
    }
    const Tmin = fluid.data[0][0];
    const Tmax = fluid.data[fluid.data.length - 1][0];
    if (val < Tmin || val > Tmax) {
      setInterpError(`${ui('Діапазон', 'Range', 'Bereich', 'Диапазон')}: ${Tmin}…${Tmax} °C`);
      return;
    }
    setInterpError('');
    setInterpT(val);
    setView('interp');
  };

  const fluidList = Object.values(FLUIDS);

  return (
    <div className="fc-wrapper">

      {/* ── Шапка ── */}
      <div className="fc-hero">
        <div className="fc-eyebrow">🌡️ {ui('Теплоносії харчових виробництв', 'Heat Transfer Fluids — Food Industry', 'Wärmeträger — Lebensmittelindustrie', 'Теплоносители пищевых производств')}</div>
        <h2 className="fc-title">{ui('Теплофізичні властивості теплоносіїв', 'Thermophysical Properties of Heat Transfer Fluids', 'Thermophysikalische Eigenschaften von Wärmeträgern', 'Теплофизические свойства теплоносителей')}</h2>
        <p className="fc-desc">{ui('Оберіть теплоносій — перегляньте таблицю або отримайте властивості для конкретної температури методом інтерполяції.', 'Select a fluid to view the table or interpolate properties at a specific temperature.', 'Fluid auswählen – Tabelle anzeigen oder Eigenschaften bei bestimmter Temperatur interpolieren.', 'Выберите теплоноситель — просмотрите таблицу или получите свойства для конкретной температуры.')}</p>
      </div>

      {/* ── Вибір теплоносія ── */}
      <div className="fc-fluid-grid">
        {fluidList.map(f => (
          <FluidCard
            key={f.id}
            fluid={f}
            locale={locale}
            selected={selectedId === f.id}
            onClick={() => { setSelectedId(f.id); setInterpT(null); setView('table'); }}
          />
        ))}
      </div>

      {/* ── Область даних ── */}
      <div className="fc-data-area">

        {/* Заголовок вибраного теплоносія */}
        <div className="fc-fluid-header" style={{ '--fluid-color': fluid.color }}>
          <div className="fc-fluid-title-wrap">
            <span className="fc-fluid-icon-lg">{fluid.icon}</span>
            <div>
              <h3 className="fc-fluid-title">{fluid.name[locale] || fluid.name.uk}</h3>
              <p className="fc-fluid-use">{fluid.use[locale] || fluid.use.uk}</p>
            </div>
          </div>

          {/* Застереження */}
          {fluid.warning && (
            <div className="fc-warning-badge">
              ⚠️ {ui('Небезпечно для харчового контакту', 'Not for food contact', 'Kein Lebensmittelkontakt', 'Не для контакта с продуктом')}
            </div>
          )}
        </div>

        {/* ── Калькулятор інтерполяції ── */}
        <div className="fc-interp-bar">
          <label className="fc-interp-label">{ui('Властивості при T =', 'Properties at T =', 'Eigenschaften bei T =', 'Свойства при T =')}</label>
          <div className="fc-interp-input-wrap">
            <input
              type="number"
              className="fc-interp-input"
              value={tempInput}
              onChange={e => setTempInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleInterp()}
              placeholder={`${fluid.data[0][0]}…${fluid.data[fluid.data.length-1][0]}`}
            />
            <span className="fc-interp-unit">°C</span>
          </div>
          <button className="fc-interp-btn" onClick={handleInterp}>
            {ui('Інтерполювати', 'Interpolate', 'Interpolieren', 'Интерполировать')}
          </button>
          <button className={`fc-view-btn ${view === 'table' ? 'active' : ''}`} onClick={() => setView('table')}>
            {ui('Таблиця', 'Table', 'Tabelle', 'Таблица')}
          </button>
          {interpError && <span className="fc-interp-error">{interpError}</span>}
        </div>

        {/* ── Результат інтерполяції ── */}
        {view === 'interp' && interpT !== null && (
          <div className="fc-interp-result animate-in">
            <div className="fc-interp-result-label">
              {ui('Інтерпольовані значення при', 'Interpolated values at', 'Interpolierte Werte bei', 'Интерполированные значения при')} <b>{interpT} °C</b>
            </div>
            <InterpolatedResult fluid={fluid} T={interpT} locale={locale} />
          </div>
        )}

        {/* ── Таблиця ── */}
        <div className="fc-table-wrap">
          <table className="fc-table">
            <thead>
              <tr>
                {fluid.cols.map((col, i) => <th key={i}>{col}</th>)}
              </tr>
            </thead>
            <tbody>
              {fluid.data.map((row, i) => (
                <PropRow
                  key={i}
                  row={row}
                  cols={fluid.cols}
                  digits={fluid.digits}
                  highlight={view === 'interp' && interpT !== null &&
                    ((i === 0 && interpT <= row[0]) ||
                     (i === fluid.data.length - 1 && interpT >= row[0]) ||
                     (i < fluid.data.length - 1 && interpT >= row[0] && interpT <= fluid.data[i+1][0]))}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Джерела ── */}
        <div className="fc-sources">
          <span className="fc-sources-label">{ui('Джерела:', 'Sources:', 'Quellen:', 'Источники:')}</span>
          {fluid.id === 'air' && <span>Engineering ToolBox (2003); Cengel &amp; Ghajar, Heat and Mass Transfer, 5th ed.</span>}
          {(fluid.id === 'pg30' || fluid.id === 'pg50') && <span>ASHRAE Handbook — Fundamentals (2021); Dow Chemical DOWFROST™ data</span>}
          {fluid.id === 'eg30' && <span>Engineering ToolBox; ASHRAE Handbook — Fundamentals (2021) — <b style={{color:'var(--fc-amber)'}}>тільки промислове застосування</b></span>}
          {fluid.id === 'oil' && <span>Engineering ToolBox; Perry's Chemical Engineers' Handbook, 8th ed.</span>}
          {fluid.id === 'nh3' && <span>NIST Webbook (NH3); ASHRAE Refrigeration Handbook (2022)</span>}
          {fluid.id === 'brine' && <span>Engineering ToolBox; Melinder Å., Thermophysical Properties of Aqueous Solutions, 2010</span>}
        </div>
      </div>

      {/* ── Підвал ── */}
      <footer className="fc-footer">
        <p>{ui('Дані наведено за стандартними довідковими джерелами. Для точних інженерних розрахунків рекомендується звіряти з оригінальними джерелами.', 'Data from standard reference sources. For precise engineering calculations, verify against original sources.', 'Daten aus Standardreferenzquellen. Für genaue Ingenieursberechnungen bitte Originalquellen prüfen.', 'Данные из стандартных справочных источников.')}</p>
      </footer>
    </div>
  );
}
