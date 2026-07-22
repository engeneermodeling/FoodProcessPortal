import { useState, useCallback } from "react";
import { I18nContext } from "./i18n-context";
import { t as translate } from "../utils/i18n";

const PORTAL_LANGS = ["uk", "ru", "en", "de"];

function normalizeLang(lang) {
  if (!lang) return "uk";
  const short = lang.slice(0, 2).toLowerCase();
  return PORTAL_LANGS.includes(short) ? short : "uk";
}

export function I18nProvider({ children, initialLang = "uk" }) {
  const [lang, setLangState] = useState(() => normalizeLang(initialLang));

  const setLang = useCallback((newLang) => {
    setLangState(normalizeLang(newLang));
  }, []);

  return (
    <I18nContext.Provider value={{ lang, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export { translate };
