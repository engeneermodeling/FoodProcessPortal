import { useState } from 'react';

const HISTORY_KEY = 'h2o.history';
const HISTORY_LIMIT = 10;

// SSR guard
const isClient = typeof window !== 'undefined';

function sameHistoryEntry(a, b) {
  const aData = { ...a };
  const bData = { ...b };
  delete aData.timestamp;
  delete bData.timestamp;
  return JSON.stringify(aData) === JSON.stringify(bData);
}

export function useHistory(storageKey = HISTORY_KEY, limit = HISTORY_LIMIT) {
  const [history, setHistoryState] = useState(() => {
    if (!isClient) return [];
    try {
      const raw = localStorage.getItem(storageKey);
      const data = raw ? JSON.parse(raw) : [];
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  });

  const addToHistory = (entry) => {
    setHistoryState((prev) => {
      const filtered = prev.filter((e) => !sameHistoryEntry(e, entry));
      const updated = [entry, ...filtered].slice(0, limit);
      if (isClient) {
        try {
          localStorage.setItem(storageKey, JSON.stringify(updated));
        } catch {
          // ignore
        }
      }
      return updated;
    });
  };

  const clearHistory = () => {
    setHistoryState([]);
    if (isClient) {
      try {
        localStorage.removeItem(storageKey);
      } catch {
        // ignore
      }
    }
  };

  return { history, addToHistory, clearHistory };
}
