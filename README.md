# 🏭 FoodProcessPortal

**Віртуальний підручник з процесів і апаратів харчових виробництв**

---

## 🌍 Мови / Languages / Sprachen

- [🇺🇦 Українська](#українська)
- [🇬🇧 English](#english)
- [🇷🇺 Русский](#русский)
- [🇩🇪 Deutsch](#deutsch)

---

<a id="українська"></a>

## 🇺🇦 Українська

### 📖 Про проєкт

**FoodProcessPortal** — це сучасна веб-платформа для студентів харчових технологій, яка надає комплексний доступ до навчальних матеріалів з дисципліни "Процеси і апарати харчових виробництв".

### ✨ Можливості

- 📚 **Теми** — теоретичний матеріал з основних розділів
- 🧮 **Задачник** — задачі з детальними розв'язками
- 🔬 **Практикум** — лабораторні роботи
- 📖 **Довідник** — формули, таблиці, константи
- 📝 **Курсові** — методичні вказівки
- 🎥 **Відео** — навчальні відеоматеріали

### 🛠️ Технологічний стек

| Технологія        | Призначення                |
| ----------------- | -------------------------- |
| **Astro 6.4**     | Статичний генератор сайтів |
| **TypeScript**    | Типізація коду             |
| **Markdown**      | Контент тем                |
| **CSS Variables** | Система тем                |
| **Vite**          | Збірка проєкту             |

### 🚀 Швидкий старт

```bash
# Клонування репозиторію
git clone <repo-url>
cd FoodProcessPortal

# Встановлення залежностей
npm install

# Запуск dev-сервера
npm run dev

Відкрий http://localhost:4321

📁 Структура проєкту

FoodProcessPortal/
├── public/              # Статичні файли
│   ├── images/          # Логотипи, іконки
│   ├── scripts/         # JS-скрипти
│   └── styles/          # CSS-теми
├── src/
│   ├── components/      # Header, Footer, ThemeToggle
│   ├── content/         # Markdown-контент по мовах
│   │   ├── uk/topics/
│   │   ├── ru/topics/
│   │   ├── en/topics/
│   │   └── de/topics/
│   ├── pages/           # Сторінки по мовах
│   │   ├── uk/
│   │   ├── ru/
│   │   ├── en/
│   │   └── de/
│   └── utils/           # Утиліти (topics.ts)
└── README.md

<a id="english"></a>

🇬🇧 English

📖 About
FoodProcessPortal is a modern web platform for food technology students, providing comprehensive access to educational materials on "Processes and Apparatus of Food Production".
✨ Features
📚 Topics — theoretical material
🧮 Problem Book — problems with solutions
🔬 Practice — laboratory work
📖 Reference — formulas, tables, constants
📝 Courses — methodological guides
🎥 Videos — educational videos


<a id="русский"></a>
🇷🇺 Русский

📖 О проекте
FoodProcessPortal — современная веб-платформа для студентов пищевых технологий, предоставляющая комплексный доступ к учебным материалам по дисциплине "Процессы и аппараты пищевых производств".
✨ Возможности
📚 Темы — теоретический материал
🧮 Задачник — задачи с решениями
🔬 Практикум — лабораторные работы
📖 Справочник — формулы, таблицы, константы
📝 Курсовые — методические указания
🎥 Видео — учебные видеоматериалы

<a id="deutsch"></a>
🇩🇪 Deutsch
📖 Über das Projekt
FoodProcessPortal ist eine moderne Web-Plattform für Lebensmitteltechnologie-Studenten, die umfassenden Zugang zu Lehrmaterialien über "Prozesse und Apparate der Lebensmittelproduktion" bietet.
✨ Funktionen
📚 Themen — theoretisches Material
🧮 Aufgabenbuch — Aufgaben mit Lösungen
🔬 Praktikum — Laborarbeiten
📖 Nachschlagewerk — Formeln, Tabellen, Konstanten
📝 Kursarbeiten — methodische Anleitungen
🎥 Videos — Lehrvideos


📝 Журнал змін / Changelog
🚀 v1.0.0 (20.06.2026) — Initial Release
🎨 UI/UX
✅ Створено проєкт на Astro 6.4 з TypeScript
✅ Адаптивний дизайн для всіх пристроїв
✅ Інженерний стиль (технічна сітка, кутові маркери)
✅ Плавні переходи та hover-ефекти

🌍 Мультимовність
✅ Підтримка 4 мов: UK, RU, EN, DE
✅ Динамічне перемикання мови з збереженням сторінки
✅ Dropdown-меню мов у хедері
✅ Окремий контент для кожної мови

🌓 Система тем
✅ Світла тема (☀️)
✅ Темна тема (🌙)
✅ Авто-режим (🔄) — слідкує за системними налаштуваннями
✅ Збереження вибору в localStorage
✅ Динамічна зміна логотипу залежно від теми

🧩 Компоненти
✅ Header — логотип, назва сайту, dropdown мов, перемикач теми
✅ ThemeToggle — 3 режими з анімованим меню
✅ Footer — компактний (~150px), з навігацією, контактами, соцмережами

📚 Контент
✅ Інтеграція Markdown для тем
✅ Динамічні сторінки [slug].astro
✅ Утиліта getTopics(locale) для завантаження контенту по мовах
✅ Перша тема: "Теплообмінні процеси та апарати" (UK, RU, EN)

🏠 Стартова сторінка
✅ 6 карток: Теми, Задачник, Практикум, Довідник, Курсові, Відео
✅ Компактний дизайн без зайвого простору
✅ Іконки для всіх розділів

🦶 Футер
✅ Компактна структура (2 колонки)
✅ Логотип з динамічною зміною за темою
✅ Навігація в 3 колонки
✅ Контакти (email, GitHub, Telegram)
✅ Версія проєкту та дата оновлення
✅ Анімоване сердечко ♥

🔧 Відомі обмеження
⚠️ DE версія ще не заповнена контентом
⚠️ Сторінки /problems, /practice, /reference, /courses, /videos — заглушки

📅 Плани на майбутнє
Додати більше тем (масообмін, сушіння, механічні процеси)
Реалізувати інтерактивний задачник
Додати пошук по контенту
Інтеграція з CMS для редагування
PWA підтримка (offline режим)
Заповнити німецьку версію
Додати коментарі та обговорення

📄 Ліцензія
© 2026 FoodProcessPortal. Всі права захищені.

Зроблено з ♥ для студентів харчових технологій
```
