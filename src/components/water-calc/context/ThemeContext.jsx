import { useEffect, useState } from "react";
import { ThemeContext } from "./theme-context";

const isClient = typeof window !== "undefined";

function readPortalTheme() {
  if (!isClient) return "auto";
  return document.documentElement.getAttribute("data-theme") || "auto";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => readPortalTheme());

  useEffect(() => {
    if (!isClient) return;

    const syncTheme = () => setTheme(readPortalTheme());
    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", syncTheme);

    return () => {
      observer.disconnect();
      media.removeEventListener("change", syncTheme);
    };
  }, []);

  return (
    <div className="water-calc-root" data-theme={theme}>
      <ThemeContext.Provider value={{ theme, setTheme: () => {}, themes: [] }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}
