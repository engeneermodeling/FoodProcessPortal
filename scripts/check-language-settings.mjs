import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, copyFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { getEnabledLocales } from '../src/utils/language-settings.mjs';

const all = { uk: true, en: true, ru: true, de: true };
assert.deepEqual(getEnabledLocales(all), ['uk', 'en', 'ru', 'de']);
assert.deepEqual(getEnabledLocales({ ...all, ru: false, de: false }), ['uk', 'en']);
assert.throws(() => getEnabledLocales({ ...all, uk: false }), /основна/);
assert.throws(() => getEnabledLocales({ ...all, en: 'false' }), /true або false/);
assert.throws(() => getEnabledLocales({ ...all, fr: true }), /Невідома/);
assert.throws(() => getEnabledLocales({ uk: true }), /true або false/);

// Exercise real CLI writes in an isolated directory, leaving portal settings intact.
const sandbox = mkdtempSync(join(tmpdir(), 'foodprocess-languages-'));
try {
  mkdirSync(join(sandbox, 'scripts'));
  mkdirSync(join(sandbox, 'src/utils'), { recursive: true });
  copyFileSync(new URL('./manage-languages.mjs', import.meta.url), join(sandbox, 'scripts/manage-languages.mjs'));
  copyFileSync(new URL('../src/utils/language-settings.mjs', import.meta.url), join(sandbox, 'src/utils/language-settings.mjs'));
  const settingsPath = join(sandbox, 'src/language-settings.json');
  writeFileSync(settingsPath, JSON.stringify(all));
  const run = (...args) => spawnSync(process.execPath, [join(sandbox, 'scripts/manage-languages.mjs'), ...args], { encoding: 'utf8' });
  assert.equal(run('disable', 'ru').status, 0);
  assert.equal(JSON.parse(readFileSync(settingsPath, 'utf8')).ru, false);
  assert.equal(run('enable', 'ru').status, 0);
  assert.deepEqual(JSON.parse(readFileSync(settingsPath, 'utf8')), all);
  const before = readFileSync(settingsPath, 'utf8');
  for (const args of [['disable', 'uk'], ['enable', 'fr'], ['disable', 'ru', 'extra']]) {
    assert.equal(run(...args).status, 1);
    assert.equal(readFileSync(settingsPath, 'utf8'), before);
  }
  assert.match(run('list').stdout, /uk:/);
} finally {
  rmSync(sandbox, { recursive: true, force: true });
}
console.log('Language settings checks passed: toggles, validation, CLI writes and protection of the default language.');
