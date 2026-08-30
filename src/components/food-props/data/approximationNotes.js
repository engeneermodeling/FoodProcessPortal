export const linearTempEquation = {
  label: {
    uk: "Лінійна інтерполяція за температурою",
    en: "Linear interpolation by temperature",
    de: "Lineare Interpolation nach Temperatur",
  },
  formula: "y(T)=y1+(y2-y1)(T-T1)/(T2-T1)",
  description: {
    uk: "Використовуйте дві сусідні табличні точки, між якими лежить потрібна температура.",
    en: "Use the two neighboring table points that bracket the required temperature.",
    de: "Verwenden Sie die zwei benachbarten Tabellenpunkte, zwischen denen die gesuchte Temperatur liegt.",
  },
  variables: {
    uk: "y — потрібна властивість у табличних одиницях; T, T1, T2 — температури.",
    en: "y is the required property in the table units; T, T1, T2 are temperatures.",
    de: "y ist die gesuchte Eigenschaft in Tabelleneinheiten; T, T1, T2 sind Temperaturen.",
  },
  range: {
    uk: "тільки в межах табличного діапазону",
    en: "only within the table range",
    de: "nur innerhalb des Tabellenbereichs",
  },
};

export const logTempEquation = {
  label: {
    uk: "Логарифмічна інтерполяція в'язкості",
    en: "Logarithmic viscosity interpolation",
    de: "Logarithmische Viskositätsinterpolation",
  },
  formula: "μ(T)=exp(ln(μ1)+(ln(μ2)-ln(μ1))(T-T1)/(T2-T1))",
  description: {
    uk: "Для в'язкості зазвичай точніше інтерполювати ln(μ), а не саму μ.",
    en: "For viscosity it is usually more accurate to interpolate ln(μ), not μ itself.",
    de: "Für die Viskosität ist meist die Interpolation von ln(μ) genauer als von μ.",
  },
  variables: {
    uk: "μ беріть у тих самих одиницях, що в таблиці.",
    en: "Use μ in the same units as in the table.",
    de: "μ in denselben Einheiten wie in der Tabelle verwenden.",
  },
  range: {
    uk: "тільки між сусідніми табличними точками",
    en: "only between neighboring table points",
    de: "nur zwischen benachbarten Tabellenpunkten",
  },
};

export const linearCompositionEquation = {
  label: {
    uk: "Лінійна інтерполяція за концентрацією",
    en: "Linear interpolation by concentration",
    de: "Lineare Interpolation nach Konzentration",
  },
  formula: "y(x)=y1+(y2-y1)(x-x1)/(x2-x1)",
  description: {
    uk: "Використовуйте дві сусідні концентрації або вологості з таблиці.",
    en: "Use the two neighboring concentrations or moisture values from the table.",
    de: "Verwenden Sie zwei benachbarte Konzentrations- oder Feuchtewerte aus der Tabelle.",
  },
  variables: {
    uk: "x — концентрація, сухі речовини або вологість; y — властивість.",
    en: "x is concentration, dry matter, or moisture; y is the property.",
    de: "x ist Konzentration, Trockenmasse oder Feuchte; y ist die Eigenschaft.",
  },
  range: {
    uk: "тільки в межах табличного діапазону",
    en: "only within the table range",
    de: "nur innerhalb des Tabellenbereichs",
  },
};

export const bilinearEquation = {
  label: {
    uk: "Білінійна інтерполяція за двома змінними",
    en: "Bilinear interpolation by two variables",
    de: "Bilineare Interpolation nach zwei Variablen",
  },
  formula: "y(x,T)=(1-u)(1-v)y11+u(1-v)y21+(1-u)v y12+uv y22; u=(x-x1)/(x2-x1), v=(T-T1)/(T2-T1)",
  description: {
    uk: "Оберіть чотири сусідні клітинки таблиці навколо потрібних x і T.",
    en: "Choose the four neighboring table cells around the required x and T.",
    de: "Wählen Sie die vier benachbarten Tabellenzellen um die gesuchten x- und T-Werte.",
  },
  variables: {
    uk: "x — концентрація, сухі речовини, спирт або вологість; T — температура.",
    en: "x is concentration, dry matter, alcohol, or moisture; T is temperature.",
    de: "x ist Konzentration, Trockenmasse, Alkoholgehalt oder Feuchte; T ist Temperatur.",
  },
  range: {
    uk: "без екстраполяції за межі таблиці",
    en: "without extrapolation outside the table",
    de: "ohne Extrapolation außerhalb der Tabelle",
  },
};
