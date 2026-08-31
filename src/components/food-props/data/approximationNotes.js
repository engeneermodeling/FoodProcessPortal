export const linearTempEquation = {
  label: {
    uk: "Лінійна інтерполяція за температурою",
    en: "Linear interpolation by temperature",
    de: "Lineare Interpolation nach Temperatur",
  },
  formula: "y(T)=y1+(y2-y1)(T-T1)/(T2-T1)",
  katex: "y(T)=y_1+\\frac{y_2-y_1}{T_2-T_1}\\,(T-T_1)",
  description: {
    uk: "Оберіть у цьому ж рядку дві сусідні температури T₁ і T₂, між якими лежить потрібна T, та підставте відповідні табличні значення y₁ і y₂.",
    en: "In the same row, choose neighboring temperatures T1 and T2 that bracket T, then substitute the corresponding table values y1 and y2.",
    de: "In derselben Zeile zwei benachbarte Temperaturen T1 und T2 wählen, die T einschließen, dann die Tabellenwerte y1 und y2 einsetzen.",
  },
  variables: {
    uk: "T, T₁, T₂ — °C, якщо в таблиці не вказано K; y — потрібна властивість.",
    en: "T, T1, T2 are in °C unless the table uses K; y is the required property.",
    de: "T, T1, T2 in °C, sofern die Tabelle nicht K angibt; y ist die gesuchte Eigenschaft.",
  },
  units: {
    uk: "результат має ті самі одиниці, що й відповідна колонка таблиці: ρ, λ, cₚ, a тощо",
    en: "the result uses the same units as the table column: density, λ, cp, a, etc.",
    de: "Ergebnis in denselben Einheiten wie die Tabellenspalte: Dichte, λ, cp, a usw.",
  },
  range: {
    uk: "тільки між сусідніми табличними температурами; без екстраполяції",
    en: "only within the table range",
    de: "nur innerhalb des Tabellenbereichs",
  },
  error: {
    uk: "орієнтовно 1–3% для плавних ділянок; 5–10% біля фазових переходів або різких перегинів",
    en: "about 1-3% on smooth intervals; 5-10% near phase changes or sharp curvature",
    de: "etwa 1-3% in glatten Bereichen; 5-10% nahe Phasenwechseln oder starker Krümmung",
  },
};

export const logTempEquation = {
  label: {
    uk: "Логарифмічна інтерполяція в'язкості",
    en: "Logarithmic viscosity interpolation",
    de: "Logarithmische Viskositätsinterpolation",
  },
  formula: "μ(T)=exp(ln(μ1)+(ln(μ2)-ln(μ1))(T-T1)/(T2-T1))",
  katex: "\\mu(T)=\\exp\\!\\left[\\ln \\mu_1+\\frac{\\ln \\mu_2-\\ln \\mu_1}{T_2-T_1}\\,(T-T_1)\\right]",
  description: {
    uk: "Для в'язкості беріть дві сусідні температурні точки і інтерполюйте ln(μ), бо μ часто змінюється майже експоненційно.",
    en: "For viscosity, use two neighboring temperature points and interpolate ln(mu), because viscosity often changes almost exponentially.",
    de: "Für Viskosität zwei benachbarte Temperaturpunkte verwenden und ln(mu) interpolieren, da sie oft fast exponentiell variiert.",
  },
  variables: {
    uk: "T, T₁, T₂ — температура; μ₁ і μ₂ — таблична в'язкість у вибраних сусідніх точках.",
    en: "T, T1, T2 are temperatures; mu1 and mu2 are table viscosities at the chosen neighboring points.",
    de: "T, T1, T2 sind Temperaturen; mu1 und mu2 sind Tabellenviskositäten an den Nachbarpunkten.",
  },
  units: {
    uk: "μ підставляйте й отримуйте в одиницях таблиці: Па·с, мПа·с або ν×10⁶ м²/с",
    en: "substitute and obtain mu in the table units: Pa·s, mPa·s, or nu×10⁶ m²/s",
    de: "mu in Tabelleneinheiten einsetzen und erhalten: Pa·s, mPa·s oder nu×10⁶ m²/s",
  },
  range: {
    uk: "тільки між сусідніми табличними точками",
    en: "only between neighboring table points",
    de: "nur zwischen benachbarten Tabellenpunkten",
  },
  error: {
    uk: "орієнтовно 3–8%; для дуже густих сиропів/мас може бути 10–15%",
    en: "about 3-8%; for very viscous syrups or masses it may reach 10-15%",
    de: "etwa 3-8%; bei sehr viskosen Sirupen oder Massen bis 10-15%",
  },
};

export const linearCompositionEquation = {
  label: {
    uk: "Лінійна інтерполяція за концентрацією",
    en: "Linear interpolation by concentration",
    de: "Lineare Interpolation nach Konzentration",
  },
  formula: "y(x)=y1+(y2-y1)(x-x1)/(x2-x1)",
  katex: "y(x)=y_1+\\frac{y_2-y_1}{x_2-x_1}\\,(x-x_1)",
  description: {
    uk: "Оберіть два сусідні значення концентрації, вологості або сухих речовин x₁ і x₂ та відповідні табличні y₁ і y₂.",
    en: "Choose neighboring concentration, moisture, or dry-matter values x1 and x2 and the corresponding table values y1 and y2.",
    de: "Benachbarte Konzentrations-, Feuchte- oder Trockenmassewerte x1 und x2 sowie die passenden Tabellenwerte y1 und y2 wählen.",
  },
  variables: {
    uk: "x, x₁, x₂ — % мас., % сухих речовин, % вологості або інша шкала з заголовка таблиці.",
    en: "x, x1, x2 are mass %, dry matter %, moisture %, or another scale from the table header.",
    de: "x, x1, x2 sind Massen-%, Trockenmasse-%, Feuchte-% oder die Skala aus der Tabellenüberschrift.",
  },
  units: {
    uk: "результат y має одиниці тієї колонки/рядка, яку інтерполюєте",
    en: "the result y uses the units of the interpolated column or row",
    de: "Ergebnis y in den Einheiten der interpolierten Spalte oder Zeile",
  },
  range: {
    uk: "тільки між сусідніми значеннями x у таблиці; без екстраполяції",
    en: "only within the table range",
    de: "nur innerhalb des Tabellenbereichs",
  },
  error: {
    uk: "орієнтовно 1–5%; для в'язкості краще поєднувати з логарифмічною інтерполяцією",
    en: "about 1-5%; for viscosity, combine with logarithmic interpolation when possible",
    de: "etwa 1-5%; für Viskosität möglichst mit logarithmischer Interpolation kombinieren",
  },
};

export const bilinearEquation = {
  label: {
    uk: "Білінійна інтерполяція за двома змінними",
    en: "Bilinear interpolation by two variables",
    de: "Bilineare Interpolation nach zwei Variablen",
  },
  formula: "y(x,T)=(1-u)(1-v)y11+u(1-v)y21+(1-u)v y12+uv y22; u=(x-x1)/(x2-x1), v=(T-T1)/(T2-T1)",
  katex: "\\begin{aligned}y(x,T)&=(1-u)(1-v)y_{11}+u(1-v)y_{21}+(1-u)v y_{12}+uvy_{22}\\\\u&=\\frac{x-x_1}{x_2-x_1},\\quad v=\\frac{T-T_1}{T_2-T_1}\\end{aligned}",
  description: {
    uk: "Оберіть прямокутник із чотирьох сусідніх клітинок навколо потрібних x і T: y₁₁, y₂₁, y₁₂, y₂₂.",
    en: "Choose the rectangle of four neighboring cells around x and T: y11, y21, y12, y22.",
    de: "Das Rechteck aus vier Nachbarzellen um x und T wählen: y11, y21, y12, y22.",
  },
  variables: {
    uk: "x — концентрація/сухі речовини/вологість/спирт; T — температура; u і v — частки положення всередині табличного прямокутника.",
    en: "x is concentration/dry matter/moisture/alcohol; T is temperature; u and v are position fractions inside the table rectangle.",
    de: "x ist Konzentration/Trockenmasse/Feuchte/Alkohol; T ist Temperatur; u und v sind Lageanteile im Tabellenrechteck.",
  },
  units: {
    uk: "y має одиниці клітинок таблиці; x і T беріть точно в одиницях заголовків",
    en: "y uses the units of the table cells; take x and T exactly in the header units",
    de: "y in Einheiten der Tabellenzellen; x und T genau in den Einheiten der Überschriften",
  },
  range: {
    uk: "без екстраполяції за межі таблиці",
    en: "without extrapolation outside the table",
    de: "ohne Extrapolation außerhalb der Tabelle",
  },
  error: {
    uk: "орієнтовно 2–6%; для в'язкості краще інтерполювати ln(μ) у температурному напрямку",
    en: "about 2-6%; for viscosity, interpolate ln(mu) in the temperature direction when possible",
    de: "etwa 2-6%; für Viskosität in Temperaturrichtung möglichst ln(mu) interpolieren",
  },
};
