/**
 * WaterCalc.jsx
 * Повний перенос calc_water у FoodProcessPortal
 * Оригінальний дизайн збережено повністю
 */

import { useState, useMemo, useCallback, useEffect, createContext, useContext } from 'react';
import './water-calc.css';

// ─── Утиліти ──────────────────────────────────────────────────────────────
const P_ATM_MPA = 0.101325;
const KAPPA_T = 4.5e-10;

function toCelsius(val, unit) {
  if (unit === 'K') return val - 273.15;
  if (unit === 'F') return (val - 32) * 5 / 9;
  return val;
}

function toMPa(val, unit) {
  switch (unit) {
    case 'kPa': return val / 1000;
    case 'bar': return val / 10;
    case 'atm': return val * P_ATM_MPA;
    default: return val;
  }
}

function saturationTemp(pMPa) {
  if (pMPa <= 0) return 0;
  const PmmHg = (pMPa * 1000) / 0.133322;
  const denom = 8.07131 - Math.log10(PmmHg);
  if (denom <= 0) return 374;
  return 1730.63 / denom - 233.426;
}

function saturationPressureMPa(T) {
  return Math.pow(10, 8.07131 - 1730.63 / (233.426 + T)) * 0.133322 / 1000;
}

function phase(T, pMPa) {
  if (pMPa == null) pMPa = P_ATM_MPA;
  if (T < 0.01) return 'ice';
  const Tsat = saturationTemp(pMPa);
  if (T > Tsat) return 'steam';
  return 'water';
}

function latentHeat(Tcels) {
  const Tc = 647.1;
  const Tk = Tcels + 273.15;
  if (Tk >= Tc) return 0;
  return 262.1 * Math.pow(Tc - Tk, 0.38);
}

function computeSteam(T, pMPa) {
  const Tk = T + 273.15;
  const Pa = pMPa * 1e6;
  const R_s = 461.5;
  const rho = Pa / (R_s * Tk);
  const v = 1 / rho;
  const cp = 2073 - 0.86 * T + 3.4e-3 * T * T;
  const cv = cp - R_s;
  const gamma = cp / cv;
  const sound = Math.sqrt(gamma * R_s * Tk);
  const lambda = 0.0163 + 8.4e-5 * T;
  const mu = 7.9e-6 + 4.13e-8 * T;
  const nu = mu / rho;
  const a = lambda / (rho * cp);
  const Pr = mu * cp / lambda;
  const beta = 1 / Tk;
  const Tsat = saturationTemp(pMPa);
  const h_f = 4.1868 * Tsat * (1 + 0.00055 * Tsat);
  const h_fg = latentHeat(Tsat);
  const dT = Math.max(0, T - Tsat);
  const h = h_f + h_fg + (cp / 1000) * dT;
  return { rho, v, cp, gamma, sound, lambda, mu, nu, a, Pr, beta, h, h_fg };
}

function compute(T, pMPa) {
  if (pMPa == null) pMPa = P_ATM_MPA;
  const t = T;
  const Tk = T + 273.15;
  const rho0 = (999.83952 + 16.945176 * t - 7.9870401e-3 * t ** 2
    - 46.170461e-6 * t ** 3 + 105.56302e-9 * t ** 4 - 280.54253e-12 * t ** 5)
    / (1 + 16.879850e-3 * t);
  const dP_Pa = (pMPa - P_ATM_MPA) * 1e6;
  const rho = rho0 * (1 + KAPPA_T * dP_Pa);
  const cp = 4215.9 - 3.7254 * t + 1.4979e-2 * t ** 2 - 1.5421e-5 * t ** 3 + 5.9260e-9 * t ** 4;
  const lambda = 0.5650 + 1.796e-3 * t - 5.90e-6 * t ** 2;
  const mu = 2.414e-5 * Math.pow(10, 247.8 / (Tk - 140));
  const nu = mu / rho;
  const a = lambda / (rho * cp);
  const Pr = mu * cp / lambda;
  const Tc = 647.096;
  const tau = 1 - Tk / Tc;
  const sigma = tau > 0 ? 0.2358 * Math.pow(tau, 1.256) * (1 - 0.625 * tau) : 0;
  const beta = Math.max(0, -6.800e-5 + 9.109e-6 * t - 1.00e-7 * t ** 2 + 1.21e-9 * t ** 3);
  const Pv = saturationPressureMPa(t) * 1000;
  const h = 4.1868 * t * (1 + 0.00055 * t);
  const Tsat = saturationTemp(pMPa);
  const h_fg = latentHeat(Tsat);
  return { rho, cp, lambda, mu, nu, a, Pr, sigma, beta, Pv, h, h_fg };
}

function computeIce(T, pMPa) {
  if (pMPa == null) pMPa = P_ATM_MPA;
  const Tk = T + 273.15;
  const rho = 916.7 - 0.1403 * T;
  const cp = 2096.6 + 6.49 * T;
  const lambda = 632 / Tk + 0.38 - 0.00197 * Tk;
  const a = lambda / (rho * cp);
  const beta = 3 * (53e-6 + 0.36e-6 * T);
  const h_sf = 333.55;
  const h = -h_sf + (2.0966 * T + (6.49 / 2) * T * T / 1000);
  const sound = 3840 + 4 * T;
  return { T, pMPa, rho, cp, lambda, a, beta, h_sf, h, sound };
}

function meltingTemp(pMPa) {
  if (pMPa == null) pMPa = P_ATM_MPA;
  if (pMPa <= 611.657e-6) return 0.01;
  const pn = 611.657e-6;
  const Tn = 273.16;
  const pi = pMPa / pn;
  let theta = 1.0;
  for (let i = 0; i < 80; i++) {
    const t_neg3 = Math.pow(theta, -3);
    const t_21 = Math.pow(theta, 21.2);
    const F = 1 - 0.626e6 * (1 - t_neg3) + 0.197135e6 * (1 - t_21) - pi;
    const Fp = -0.626e6 * (3 * Math.pow(theta, -4)) + 0.197135e6 * (-21.2 * Math.pow(theta, 20.2));
    const dx = F / Fp;
    theta -= dx;
    if (!isFinite(theta) || theta <= 0) { theta = 1; break; }
    if (Math.abs(dx) < 1e-12) break;
  }
  return theta * Tn - 273.15;
}

function saturatedSteamByPressure(pMPa) {
  const TsatC = saturationTemp(pMPa);
  const steam = computeSteam(TsatC, pMPa);
  const water = compute(TsatC, pMPa);
  const h_fg = latentHeat(TsatC);
  const h_g = water.h + h_fg;
  return { mode: 'saturated_steam', x: 1, TsatC, pMPa, rho_g: steam.rho, v_g: steam.v, h_g, h_fg, cp_g: steam.cp, mu_g: steam.mu, lambda_g: steam.lambda };
}

function saturatedSteamByTemp(TsatC) {
  return saturatedSteamByPressure(saturationPressureMPa(TsatC));
}

function fmt(val, digits = 4) {
  if (val === undefined || val === null || isNaN(val)) return '—';
  const abs = Math.abs(val);
  if (abs === 0) return '0';
  if (abs < 1e-4 || abs >= 1e6) return val.toExponential(3);
  return val.toFixed(digits);
}

// ─── i18n ─────────────────────────────────────────────────────────────────
const dict = {
  uk: {
    'input.cardTitle': 'Параметри розрахунку',
    'input.tempLabel': 'Температура',
    'input.pressureLabel': 'Тиск',
    'input.unitsLabel': 'Одиниці',
    'input.calcBtn': 'Розрахувати',
    'input.rangeNote': 'Допустимі діапазони: 0 — 800 °C · 0,001 — 100 МПа · авто: рідина / пара',
    'err.notNumber': 'Будь ласка, введіть числове значення.',
    'err.outOfRange': 'Значення {val} виходить за межи допустимого діапазону ({range}).',
    'err.outOfPressure': 'Тиск {val} виходить за межі (0.001 — 100 МПа).',
    'results.pressureLabel': 'Тиск',
    'results.tsatLabel': 'T насичення',
    'results.tsatHint': 'Натисніть, щоб підставити',
    'results.tmeltLabel': 'T замерзання',
    'results.tmeltHint': 'Натисніть, щоб підставити',
    'phase.water': 'Рідка вода', 'phase.steam': 'Перегріта пара', 'phase.ice': 'Лід',
    'history.title': 'Історія', 'history.clear': 'Очистити', 'history.empty': 'Немає збережених розрахунків.',
    'tabs.main': 'Властивості за T і P', 'tabs.sat': 'Насичена пара',
    'sat.title': 'Насичена пара', 'sat.tabByTemp': 'За температурою', 'sat.tabByPressure': 'За тиском',
    'sat.inputTemp': 'T насичення', 'sat.inputPressure': 'P насичення',
    'sat.calcByTemp': 'За T', 'sat.calcByPressure': 'За P',
    'sat.err.tempRange': 'T у межах 0.01 — 370 °C', 'sat.err.pressureRange': 'P у межах 0.001 — 22.064 MPa',
    'sat.rho_g': 'Густина ρg', 'sat.v_g': 'Питомий об\'єм vg', 'sat.h_g': 'Ентальпія hg',
    'sat.h_fg': 'Теплота пароутворення', 'sat.cp_g': 'Теплоємність cpg',
    'sat.mu_g': 'В\'язкість μg', 'sat.lambda_g': 'Теплопровідність λg', 'sat.x': 'Ступінь сухості x',
    'prop.density': 'Густина', 'prop.cp': 'Теплоємність', 'prop.lambda': 'Теплопровідність',
    'prop.a': 'Температуропровідність', 'prop.mu': 'Динам. в\'язкість', 'prop.nu': 'Кінем. в\'язкість',
    'prop.Pr': 'Число Прандтля', 'prop.sigma': 'Поверхневий натяг', 'prop.beta': 'Коеф. розширення',
    'prop.Pv': 'Тиск насичення', 'prop.h': 'Ентальпія', 'prop.hfg': 'Теплота пароутворення',
    'prop.hsf': 'Теплота плавлення', 'prop.v': 'Питомий об\'єм', 'prop.gamma': 'Показник адіабати',
    'prop.sound': 'Швидкість звуку',
    'unit.density': 'кг/м³', 'unit.cp': 'Дж/(кг·К)', 'unit.lambda': 'Вт/(м·К)',
    'unit.a': 'м²/с', 'unit.mu': 'Па·с', 'unit.nu': 'м²/с', 'unit.Pr': '—',
    'unit.sigma': 'Н/м', 'unit.beta': '1/К', 'unit.Pv': 'кПа', 'unit.h': 'кДж/кг',
    'unit.hfg': 'кДж/кг', 'unit.hsf': 'кДж/кг', 'unit.v': 'м³/кг', 'unit.gamma': '—', 'unit.sound': 'м/с',
    'footer.note': 'Розраховано за апроксимаційними формулами стандарту IAPWS-IF97. Похибка < 1%.',
  },
  en: {
    'input.cardTitle': 'Calculation parameters',
    'input.tempLabel': 'Temperature', 'input.pressureLabel': 'Pressure',
    'input.unitsLabel': 'Units', 'input.calcBtn': 'Calculate',
    'input.rangeNote': 'Valid ranges: 0 — 800 °C · 0.001 — 100 MPa · auto: liquid / steam',
    'err.notNumber': 'Please enter a numeric value.',
    'err.outOfRange': 'Value {val} is outside the range ({range}).',
    'err.outOfPressure': 'Pressure {val} is outside range (0.001 — 100 MPa).',
    'results.pressureLabel': 'Pressure', 'results.tsatLabel': 'Saturation T',
    'results.tsatHint': 'Click to use', 'results.tmeltLabel': 'Melting T', 'results.tmeltHint': 'Click to use',
    'phase.water': 'Liquid water', 'phase.steam': 'Superheated steam', 'phase.ice': 'Ice',
    'history.title': 'History', 'history.clear': 'Clear', 'history.empty': 'No saved calculations.',
    'tabs.main': 'Properties by T and P', 'tabs.sat': 'Saturated steam',
    'sat.title': 'Saturated steam', 'sat.tabByTemp': 'By temperature', 'sat.tabByPressure': 'By pressure',
    'sat.inputTemp': 'Saturation T', 'sat.inputPressure': 'Saturation P',
    'sat.calcByTemp': 'By T', 'sat.calcByPressure': 'By P',
    'sat.err.tempRange': 'T range: 0.01 — 370 °C', 'sat.err.pressureRange': 'P range: 0.001 — 22.064 MPa',
    'sat.rho_g': 'Steam density ρg', 'sat.v_g': 'Specific volume vg', 'sat.h_g': 'Enthalpy hg',
    'sat.h_fg': 'Latent heat hfg', 'sat.cp_g': 'Heat capacity cpg',
    'sat.mu_g': 'Viscosity μg', 'sat.lambda_g': 'Conductivity λg', 'sat.x': 'Dryness fraction x',
    'prop.density': 'Density', 'prop.cp': 'Heat capacity', 'prop.lambda': 'Thermal conductivity',
    'prop.a': 'Thermal diffusivity', 'prop.mu': 'Dynamic viscosity', 'prop.nu': 'Kinematic viscosity',
    'prop.Pr': 'Prandtl number', 'prop.sigma': 'Surface tension', 'prop.beta': 'Expansion coeff.',
    'prop.Pv': 'Saturation pressure', 'prop.h': 'Enthalpy', 'prop.hfg': 'Latent heat',
    'prop.hsf': 'Fusion heat', 'prop.v': 'Specific volume', 'prop.gamma': 'Adiabatic index',
    'prop.sound': 'Speed of sound',
    'unit.density': 'kg/m³', 'unit.cp': 'J/(kg·K)', 'unit.lambda': 'W/(m·K)',
    'unit.a': 'm²/s', 'unit.mu': 'Pa·s', 'unit.nu': 'm²/s', 'unit.Pr': '—',
    'unit.sigma': 'N/m', 'unit.beta': '1/K', 'unit.Pv': 'kPa', 'unit.h': 'kJ/kg',
    'unit.hfg': 'kJ/kg', 'unit.hsf': 'kJ/kg', 'unit.v': 'm³/kg', 'unit.gamma': '—', 'unit.sound': 'm/s',
    'footer.note': 'Computed using IAPWS-IF97 approximation formulas. Error < 1%.',
  },
};
dict.ru = { ...dict.uk,
  'input.cardTitle': 'Параметры расчёта', 'input.tempLabel': 'Температура',
  'input.pressureLabel': 'Давление', 'input.unitsLabel': 'Единицы', 'input.calcBtn': 'Рассчитать',
  'input.rangeNote': 'Допустимые диапазоны: 0 — 800 °C · 0,001 — 100 МПа · авто: жидкость / пар',
  'phase.water': 'Жидкая вода', 'phase.steam': 'Перегретый пар', 'phase.ice': 'Лёд',
  'history.title': 'История', 'history.clear': 'Очистить', 'history.empty': 'Нет сохранённых расчётов.',
  'tabs.main': 'Свойства по T и P', 'tabs.sat': 'Насыщенный пар',
  'footer.note': 'Рассчитано по аппроксимационным формулам стандарта IAPWS-IF97. Погрешность < 1%.',
};
dict.de = { ...dict.en,
  'input.cardTitle': 'Berechnungsparameter', 'input.tempLabel': 'Temperatur',
  'input.pressureLabel': 'Druck', 'input.unitsLabel': 'Einheiten', 'input.calcBtn': 'Berechnen',
  'tabs.main': 'Eigenschaften nach T und P', 'tabs.sat': 'Sattdampf',
  'footer.note': 'Berechnet nach IAPWS-IF97-Näherungsformeln. Fehler < 1%.',
};

function tr(key, lang, vars) {
  const d = dict[lang] || dict.uk;
  let s = d[key] || key;
  if (vars) Object.entries(vars).forEach(([k, v]) => { s = s.replace(`{${k}}`, v); });
  return s;
}

// ─── Контекст ──────────────────────────────────────────────────────────────
const LangCtx = createContext('uk');
function useLang() { return useContext(LangCtx); }
function useT() {
  const lang = useLang();
  return useCallback((key, vars) => tr(key, lang, vars), [lang]);
}

// ─── Компоненти ────────────────────────────────────────────────────────────
function PropCell({ id, symbol, name, value, unit, index }) {
  return (
    <div className="prop-cell" style={{ animationDelay: `${index * 30}ms` }}>
      <div className="prop-cell-top">
        <span className="prop-num">{id}</span>
        <span className="prop-symbol">{symbol}</span>
      </div>
      <div className="prop-name">{name}</div>
      <div className="prop-value-wrap">
        <div className="prop-value">{value}</div>
        <div className="prop-unit">{unit}</div>
      </div>
    </div>
  );
}

function PropsGrid({ T, pMPa }) {
  const t = useT();
  const properties = useMemo(() => {
    if (T == null || pMPa == null) return [];
    const ph = phase(T, pMPa);
    if (ph === 'ice') {
      const p = computeIce(T, pMPa);
      return [
        { id: '01', symbol: 'ρ', name: t('prop.density'), value: fmt(p.rho, 2), unit: t('unit.density') },
        { id: '02', symbol: 'cₚ', name: t('prop.cp'), value: fmt(p.cp, 1), unit: t('unit.cp') },
        { id: '03', symbol: 'λ', name: t('prop.lambda'), value: fmt(p.lambda, 3), unit: t('unit.lambda') },
        { id: '04', symbol: 'a', name: t('prop.a'), value: fmt(p.a, 4), unit: t('unit.a') },
        { id: '05', symbol: 'β', name: t('prop.beta'), value: fmt(p.beta, 6), unit: t('unit.beta') },
        { id: '06', symbol: 'c', name: t('prop.sound'), value: fmt(p.sound, 1), unit: t('unit.sound') },
        { id: '07', symbol: 'h', name: t('prop.h'), value: fmt(p.h, 2), unit: t('unit.h') },
        { id: '08', symbol: 'L_sf', name: t('prop.hsf'), value: fmt(p.h_sf, 2), unit: t('unit.hsf') },
      ];
    }
    const p = ph === 'steam' ? computeSteam(T, pMPa) : compute(T, pMPa);
    if (ph === 'steam') {
      return [
        { id: '01', symbol: 'ρ', name: t('prop.density'), value: fmt(p.rho, 4), unit: t('unit.density') },
        { id: '02', symbol: 'v', name: t('prop.v'), value: fmt(p.v, 4), unit: t('unit.v') },
        { id: '03', symbol: 'cₚ', name: t('prop.cp'), value: fmt(p.cp, 1), unit: t('unit.cp') },
        { id: '04', symbol: 'γ', name: t('prop.gamma'), value: fmt(p.gamma, 3), unit: t('unit.gamma') },
        { id: '05', symbol: 'λ', name: t('prop.lambda'), value: fmt(p.lambda, 4), unit: t('unit.lambda') },
        { id: '06', symbol: 'a', name: t('prop.a'), value: fmt(p.a, 4), unit: t('unit.a') },
        { id: '07', symbol: 'μ', name: t('prop.mu'), value: fmt(p.mu, 5), unit: t('unit.mu') },
        { id: '08', symbol: 'ν', name: t('prop.nu'), value: fmt(p.nu, 5), unit: t('unit.nu') },
        { id: '09', symbol: 'Pr', name: t('prop.Pr'), value: fmt(p.Pr, 3), unit: t('unit.Pr') },
        { id: '10', symbol: 'β', name: t('prop.beta'), value: fmt(p.beta, 5), unit: t('unit.beta') },
        { id: '11', symbol: 'c', name: t('prop.sound'), value: fmt(p.sound, 1), unit: t('unit.sound') },
        { id: '12', symbol: 'h', name: t('prop.h'), value: fmt(p.h, 2), unit: t('unit.h') },
        { id: '13', symbol: 'r', name: t('prop.hfg'), value: fmt(p.h_fg, 2), unit: t('unit.hfg') },
      ];
    }
    return [
      { id: '01', symbol: 'ρ', name: t('prop.density'), value: fmt(p.rho, 3), unit: t('unit.density') },
      { id: '02', symbol: 'cₚ', name: t('prop.cp'), value: fmt(p.cp, 1), unit: t('unit.cp') },
      { id: '03', symbol: 'λ', name: t('prop.lambda'), value: fmt(p.lambda, 4), unit: t('unit.lambda') },
      { id: '04', symbol: 'a', name: t('prop.a'), value: fmt(p.a, 4), unit: t('unit.a') },
      { id: '05', symbol: 'μ', name: t('prop.mu'), value: fmt(p.mu, 5), unit: t('unit.mu') },
      { id: '06', symbol: 'ν', name: t('prop.nu'), value: fmt(p.nu, 4), unit: t('unit.nu') },
      { id: '07', symbol: 'Pr', name: t('prop.Pr'), value: fmt(p.Pr, 3), unit: t('unit.Pr') },
      { id: '08', symbol: 'σ', name: t('prop.sigma'), value: fmt(p.sigma, 5), unit: t('unit.sigma') },
      { id: '09', symbol: 'β', name: t('prop.beta'), value: fmt(p.beta, 5), unit: t('unit.beta') },
      { id: '10', symbol: 'Pₛ', name: t('prop.Pv'), value: fmt(p.Pv, 4), unit: t('unit.Pv') },
      { id: '11', symbol: 'h', name: t('prop.h'), value: fmt(p.h, 2), unit: t('unit.h') },
      { id: '12', symbol: 'r', name: t('prop.hfg'), value: fmt(p.h_fg, 2), unit: t('unit.hfg') },
    ];
  }, [T, pMPa, t]);
  return (
    <div className="props-grid">
      {properties.map((prop, i) => <PropCell key={prop.id} {...prop} index={i} />)}
    </div>
  );
}

function InputCard({ onCalculate }) {
  const t = useT();
  const [tempInput, setTempInput] = useState('');
  const [pressureInput, setPressureInput] = useState('');
  const [tempUnit, setTempUnit] = useState('C');
  const [pressureUnit, setPressureUnit] = useState('MPa');
  const [error, setError] = useState('');

  const handleCalc = () => {
    setError('');
    const raw = parseFloat(tempInput.replace(',', '.'));
    if (isNaN(raw)) { setError(t('err.notNumber')); return; }
    const pRawStr = pressureInput.trim().replace(',', '.');
    let pRaw = pRawStr === '' ? null : parseFloat(pRawStr);
    let pMPa;
    if (pRaw === null) { pMPa = P_ATM_MPA; pRaw = pMPa; }
    else {
      if (isNaN(pRaw)) { setError(t('err.notNumber')); return; }
      pMPa = toMPa(pRaw, pressureUnit);
      if (pMPa < 0.001 || pMPa > 100) { setError(t('err.outOfPressure', { val: pRaw + ' ' + pressureUnit })); return; }
    }
    const T = toCelsius(raw, tempUnit);
    if (T < -100 || T > 800) {
      const range = tempUnit === 'C' ? '−100 – 800 °C' : tempUnit === 'K' ? '173.15 – 1073.15 K' : '−148 – 1472 °F';
      setError(t('err.outOfRange', { val: raw, range })); return;
    }
    onCalculate({ T, raw, pMPa, pRaw, tempUnit, pressureUnit, timestamp: Date.now() });
  };

  return (
    <div className="card input-card">
      <div className="input-card-title">{t('input.cardTitle')}</div>
      <div className="input-row">

        {/* ── Температура: поле + перемикач одиниць в одній групі ── */}
        <div className="field-group">
          <label className="field-label">{t('input.tempLabel')}</label>
          <div className="input-group">
            <input className="temp-input" type="number" value={tempInput}
              onChange={e => setTempInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleCalc()} />
            <span className="input-unit">{tempUnit === 'C' ? '°C' : tempUnit}</span>
          </div>
          <div className="unit-toggle">
            {['C', 'K', 'F'].map(u => (
              <button key={u} type="button" className={`unit-btn ${tempUnit === u ? 'active' : ''}`}
                onClick={() => setTempUnit(u)}>
                {u === 'C' ? '°C' : u === 'K' ? 'K' : '°F'}
              </button>
            ))}
          </div>
        </div>

        {/* ── Тиск: поле + перемикач одиниць в одній групі ── */}
        <div className="field-group">
          <label className="field-label">{t('input.pressureLabel')}</label>
          <div className="input-group">
            <input className="temp-input" type="number" value={pressureInput} placeholder="авто"
              onChange={e => setPressureInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleCalc()} />
            <span className="input-unit">{pressureUnit}</span>
          </div>
          <div className="unit-toggle">
            {['MPa', 'kPa', 'bar', 'atm'].map(u => (
              <button key={u} type="button" className={`punit-btn ${pressureUnit === u ? 'active' : ''}`}
                onClick={() => setPressureUnit(u)}>{u}
              </button>
            ))}
          </div>
        </div>

        {/* ── Кнопка розрахунку ── */}
        <div className="calc-btn-wrap">
          <button type="button" className="btn-calc" onClick={handleCalc}>{t('input.calcBtn')}</button>
        </div>

      </div>
      {error && <div className="error-banner">{error}</div>}
      <div className="range-note">{t('input.rangeNote')}</div>
    </div>
  );
}

function SaturatedSteamPanel() {
  const t = useT();
  const [tempInput, setTempInput] = useState('100');
  const [pressureInput, setPressureInput] = useState('0.101325');
  const [tempUnit, setTempUnit] = useState('C');
  const [pressureUnit, setPressureUnit] = useState('MPa');
  const [mode, setMode] = useState('temp');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const calcByTemp = () => {
    setError('');
    const raw = parseFloat(tempInput.replace(',', '.'));
    if (isNaN(raw)) { setError(t('err.notNumber')); return; }
    const T = toCelsius(raw, tempUnit);
    if (T < 0.01 || T > 370) { setError(t('sat.err.tempRange')); return; }
    setResult(saturatedSteamByTemp(T));
  };

  const calcByPressure = () => {
    setError('');
    const raw = parseFloat(pressureInput.replace(',', '.'));
    if (isNaN(raw)) { setError(t('err.notNumber')); return; }
    const pMPa = toMPa(raw, pressureUnit);
    if (pMPa < 0.001 || pMPa > 22.064) { setError(t('sat.err.pressureRange')); return; }
    setResult(saturatedSteamByPressure(pMPa));
  };

  const cards = result ? [
    { id: '01', symbol: 'T', name: t('results.tsatLabel'), value: fmt(result.TsatC, 3), unit: '°C' },
    { id: '02', symbol: 'p', name: t('results.pressureLabel'), value: fmt(result.pMPa, 6), unit: 'MPa' },
    { id: '03', symbol: 'ρg', name: t('sat.rho_g'), value: fmt(result.rho_g, 5), unit: t('unit.density') },
    { id: '04', symbol: 'vg', name: t('sat.v_g'), value: fmt(result.v_g, 5), unit: t('unit.v') },
    { id: '05', symbol: 'hg', name: t('sat.h_g'), value: fmt(result.h_g, 3), unit: t('unit.h') },
    { id: '06', symbol: 'hfg', name: t('sat.h_fg'), value: fmt(result.h_fg, 3), unit: t('unit.hfg') },
    { id: '07', symbol: 'cpg', name: t('sat.cp_g'), value: fmt(result.cp_g, 2), unit: t('unit.cp') },
    { id: '08', symbol: 'μg', name: t('sat.mu_g'), value: fmt(result.mu_g, 7), unit: t('unit.mu') },
    { id: '09', symbol: 'λg', name: t('sat.lambda_g'), value: fmt(result.lambda_g, 5), unit: t('unit.lambda') },
    { id: '10', symbol: 'x', name: t('sat.x'), value: fmt(result.x, 3), unit: '—' },
  ] : [];

  return (
    <>
      <section className="sat-card animate-in">
        <div className="sat-head">
          <h3 className="sat-title">{t('sat.title')}</h3>
          <div className="sat-mode">
            <button type="button" className={`sat-mode-btn ${mode === 'temp' ? 'active' : ''}`} onClick={() => setMode('temp')}>{t('sat.tabByTemp')}</button>
            <button type="button" className={`sat-mode-btn ${mode === 'pressure' ? 'active' : ''}`} onClick={() => setMode('pressure')}>{t('sat.tabByPressure')}</button>
          </div>
        </div>
        <div className="sat-body">
          {mode === 'temp' ? (
            <div className="input-row sat-input-row">
              <div>
                <label className="field-label">{t('sat.inputTemp')}</label>
                <div className="input-group">
                  <input className="temp-input" type="number" step="0.1" value={tempInput}
                    onChange={e => setTempInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && calcByTemp()} />
                  <span className="input-unit">{tempUnit === 'C' ? '°C' : tempUnit}</span>
                </div>
              </div>
              <div>
                <label className="field-label">{t('input.unitsLabel')}</label>
                <div className="unit-toggle">
                  {['C', 'K', 'F'].map(u => (
                    <button key={u} type="button" className={`unit-btn ${tempUnit === u ? 'active' : ''}`} onClick={() => setTempUnit(u)}>
                      {u === 'C' ? '°C' : u}
                    </button>
                  ))}
                </div>
              </div>
              <div><label className="field-label">&nbsp;</label><button type="button" className="btn-calc" onClick={calcByTemp}>{t('sat.calcByTemp')}</button></div>
            </div>
          ) : (
            <div className="input-row sat-input-row">
              <div>
                <label className="field-label">{t('sat.inputPressure')}</label>
                <div className="input-group">
                  <input className="temp-input" type="number" step="0.001" value={pressureInput}
                    onChange={e => setPressureInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && calcByPressure()} />
                  <span className="input-unit">{pressureUnit}</span>
                </div>
              </div>
              <div>
                <label className="field-label">{t('input.unitsLabel')}</label>
                <div className="unit-toggle">
                  {['MPa', 'kPa', 'bar', 'atm'].map(u => (
                    <button key={u} type="button" className={`punit-btn ${pressureUnit === u ? 'active' : ''}`} onClick={() => setPressureUnit(u)}>{u}</button>
                  ))}
                </div>
              </div>
              <div><label className="field-label">&nbsp;</label><button type="button" className="btn-calc" onClick={calcByPressure}>{t('sat.calcByPressure')}</button></div>
            </div>
          )}
        </div>
        {error && <div className="error-banner">{error}</div>}
      </section>
      {result && (
        <div className="props-grid sat-props-grid">
          {cards.map((c, i) => <PropCell key={c.id} {...c} index={i} />)}
        </div>
      )}
    </>
  );
}

// ─── Головний компонент ────────────────────────────────────────────────────
export default function WaterCalc({ locale = 'uk' }) {
  const [result, setResult] = useState(null);
  const [activeTab, setActiveTab] = useState('main');
  // SSR-safe: порожній масив на сервері, localStorage читаємо після монтування
  const [history, setHistory] = useState([]);

  useEffect(() => {
    try {
      const r = localStorage.getItem('h2o.history');
      if (r) setHistory(JSON.parse(r));
    } catch {}
  }, []);

  const t = (key, vars) => tr(key, locale, vars);

  const phaseClass = useMemo(() => {
    if (!result) return '';
    if (result.phase === 'steam') return 'phase-steam';
    if (result.phase === 'ice') return 'phase-ice';
    return 'phase-water';
  }, [result]);

  const handleCalculate = (payload) => {
    const ph = phase(payload.T, payload.pMPa);
    const next = { ...payload, phase: ph, tsat: saturationTemp(payload.pMPa), tmelt: meltingTemp(payload.pMPa) };
    setResult(next);
    setHistory(prev => {
      const updated = [{ raw: payload.raw, unit: payload.tempUnit, pRaw: payload.pRaw, pUnit: payload.pressureUnit, T: payload.T, pMPa: payload.pMPa, timestamp: payload.timestamp }, ...prev.slice(0, 9)];
      try { localStorage.setItem('h2o.history', JSON.stringify(updated)); } catch {}
      return updated;
    });
  };

  const clearHistory = () => {
    setHistory([]);
    try { localStorage.removeItem('h2o.history'); } catch {}
  };

  return (
    <LangCtx.Provider value={locale}>
      <div className="wc-wrapper">
        {/* Шапка калькулятора */}
        <div className="wc-hero">
          <div className="wc-eyebrow">💧 {locale === 'uk' ? 'Термодинамічний калькулятор' : locale === 'de' ? 'Thermodynamischer Rechner' : 'Thermodynamic calculator'}</div>
          <h2 className="wc-title">
            {locale === 'uk' ? 'Теплофізичні властивості води' :
             locale === 'de' ? 'Thermophysikalische Eigenschaften des Wassers' :
             locale === 'ru' ? 'Теплофизические свойства воды' :
             'Thermophysical properties of water'}
          </h2>
          <p className="wc-desc">
            {locale === 'uk' ? 'Введіть температуру і тиск — отримайте густину, теплоємність, теплопровідність, в\'язкість та інші властивості.' :
             locale === 'ru' ? 'Введите температуру и давление — получите плотность, теплоёмкость, теплопроводность, вязкость и другие свойства.' :
             locale === 'de' ? 'Geben Sie Temperatur und Druck ein — erhalten Sie Dichte, Wärmekapazität, Wärmeleitfähigkeit, Viskosität und mehr.' :
             'Enter temperature and pressure — get density, heat capacity, thermal conductivity, viscosity and more.'}
          </p>
          <div className="wc-badge">IAPWS-IF97</div>
        </div>

        {/* Табулятор */}
        <div className="calc-tabs" role="tablist">
          <button type="button" role="tab" className={`calc-tab-btn ${activeTab === 'main' ? 'active' : ''}`} onClick={() => setActiveTab('main')}>
            {t('tabs.main')}
          </button>
          <button type="button" role="tab" className={`calc-tab-btn ${activeTab === 'sat' ? 'active' : ''}`} onClick={() => setActiveTab('sat')}>
            {t('tabs.sat')}
          </button>
        </div>

        {/* Вкладка: властивості за T і P */}
        {activeTab === 'main' && (
          <>
            <InputCard onCalculate={handleCalculate} />
            {result && (
              <section className="results-section animate-in">
                <div className="results-meta">
                  <div>
                    <div className="results-temp">T = <b>{fmt(result.T, 2)}</b> <span>°C</span></div>
                    <div className="results-pressure">
                      <span className="rp-label">{t('results.pressureLabel')} </span>
                      <b>{fmt(result.pRaw, 4)} {result.pressureUnit}</b>
                      <span className="rp-aux"> ({fmt(result.pMPa, 6)} MPa)</span>
                    </div>
                    <div className="results-tsat">
                      <span className="rp-label">{t('results.tsatLabel')} </span>
                      <span className="tsat-value" title={t('results.tsatHint')}>{fmt(result.tsat, 2)} °C</span>
                    </div>
                    <div className="results-tmelt">
                      <span className="rp-label">{t('results.tmeltLabel')} </span>
                      <span className="tmelt-value" title={t('results.tmeltHint')}>{fmt(result.tmelt, 3)} °C</span>
                    </div>
                  </div>
                  <span className={`phase-tag ${phaseClass}`}>{t(`phase.${result.phase}`)}</span>
                </div>
                <PropsGrid T={result.T} pMPa={result.pMPa} />
              </section>
            )}
            <section className="history-card">
              <div className="history-head">
                <div className="history-title">{t('history.title')}</div>
                {history.length > 0 && <button className="history-clear" onClick={clearHistory}>{t('history.clear')}</button>}
              </div>
              <div className="history-list">
                {history.length === 0
                  ? <span className="hc-unit">{t('history.empty')}</span>
                  : history.map((item, idx) => (
                    <button key={`${item.timestamp}-${idx}`} className="history-chip"
                      onClick={() => setResult({ ...item, phase: phase(item.T, item.pMPa), tsat: saturationTemp(item.pMPa), tmelt: meltingTemp(item.pMPa), tempUnit: item.unit, pressureUnit: item.pUnit })}>
                      <span className="hc-val">{fmt(item.raw, 2)} {item.unit}</span>
                      <span className="hc-sep">·</span>
                      <span className="hc-unit">{fmt(item.pRaw, 4)} {item.pUnit}</span>
                    </button>
                  ))
                }
              </div>
            </section>
          </>
        )}

        {/* Вкладка: насичена пара */}
        {activeTab === 'sat' && <SaturatedSteamPanel />}

        {/* Підвал */}
        <footer className="wc-footer">
          <p>{t('footer.note')}</p>
          <a href="https://github.com/TarasMysiuraTutor/calc_water" target="_blank" rel="noopener" className="wc-source-link">
            calc_water on GitHub ↗
          </a>
        </footer>
      </div>
    </LangCtx.Provider>
  );
}
