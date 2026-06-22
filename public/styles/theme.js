// Перевіряємо збережену тему або системні налаштування
const getPreferredTheme = () => {
  const stored = localStorage.getItem('theme');
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Встановлюємо тему
const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateThemeButton(theme);
};

// Оновлюємо іконку кнопки
const updateThemeButton = (theme) => {
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
};

// Ініціалізація
document.addEventListener('DOMContentLoaded', () => {
  const theme = getPreferredTheme();
  setTheme(theme);
  
  // Обробник кліку
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });
  }
});