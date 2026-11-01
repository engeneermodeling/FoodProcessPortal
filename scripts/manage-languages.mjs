#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
import { getEnabledLocales, SUPPORTED_LOCALES } from '../src/utils/language-settings.mjs';

const settingsPath = new URL('../src/language-settings.json', import.meta.url);
const [action = 'list', code, ...extra] = process.argv.slice(2);
const help = 'Команди: node scripts/manage-languages.mjs list | enable <en|ru|de> | disable <en|ru|de>';
try {
  if (action === '--help' || action === '-h') {
    console.log(help);
  } else {
    const settings = JSON.parse(readFileSync(settingsPath, 'utf8').replace(/^\uFEFF/, ''));
    getEnabledLocales(settings);
    if (action === 'list' && !code && !extra.length) {
      for (const locale of SUPPORTED_LOCALES) {
        console.log(`${locale}: ${settings[locale] ? 'увімкнено' : 'вимкнено'}${locale === 'uk' ? ' (основна мова)' : ''}`);
      }
    } else if (['enable', 'disable'].includes(action) && SUPPORTED_LOCALES.includes(code) && !extra.length) {
      settings[code] = action === 'enable';
      getEnabledLocales(settings);
      writeFileSync(settingsPath, `${JSON.stringify(settings, null, 2)}\n`, 'utf8');
      console.log(`Мова ${code}: ${settings[code] ? 'увімкнено' : 'вимкнено'}. Виконайте збірку порталу; для локального перегляду перезапустіть dev-сервер.`);
    } else {
      throw new Error(help);
    }
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
