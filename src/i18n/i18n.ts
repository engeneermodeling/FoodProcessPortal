// Типи для перекладів
export type Translations = {
  'site.title': string;
  'site.description': string;
  'nav.home': string;
  'nav.topics': string;
  'nav.practice': string;
  'nav.courses': string;
  'nav.videos': string;
  'lang.choose': string;
  'lang.ua': string;
  'lang.ru': string;
  'lang.en': string;
  'lang.de': string;
  'theme.toggle': string;
};

// Завантаження перекладів
export async function getTranslations(locale: string): Promise<Translations> {
  const response = await import(`../i18n/${locale}.json`);
  return response.default;
}

// Тип для локалей
export type Locale = 'uk' | 'ru' | 'en' | 'de';

// Список доступних мов
export const locales: Locale[] = ['uk', 'ru', 'en', 'de'];

// Мова за замовчуванням
export const defaultLocale: Locale = 'uk';