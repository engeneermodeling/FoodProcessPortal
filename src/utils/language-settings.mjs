/** @type {readonly ['uk', 'en', 'ru', 'de']} */
export const SUPPORTED_LOCALES = ['uk', 'en', 'ru', 'de'];

/** @param {unknown} settings */
export function getEnabledLocales(settings) {
  if (!settings || typeof settings !== 'object' || Array.isArray(settings)) {
    throw new Error('Налаштування мов мають бути об’єктом із перемикачами true/false.');
  }
  const values = /** @type {Record<string, unknown>} */ (settings);
  for (const code of Object.keys(values)) {
    if (!SUPPORTED_LOCALES.some(locale => locale === code)) {
      throw new Error(`Невідома мова: ${code}.`);
    }
  }
  for (const code of SUPPORTED_LOCALES) {
    if (typeof values[code] !== 'boolean') {
      throw new Error(`Для мови ${code} потрібно вказати true або false.`);
    }
  }
  // Ukrainian is the default locale and hosts the portal's fixed Ukrainian routes.
  if (values.uk !== true) {
    throw new Error('Українська — основна мова порталу й має залишатися увімкненою.');
  }
  return SUPPORTED_LOCALES.filter(code => values[code]);
}
