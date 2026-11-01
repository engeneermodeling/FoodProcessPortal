# Відкрита лекція Перемішування в харчових технологіях

Підготовлено в FoodProcessPortal 31 жовтня 2026 року. Зміни локальні; публікація на Vercel не виконувалася.

## Результат

- Сторінка порталу: `/uk/topics/mixing/open-lecture`.
- Самостійна презентація: `/presentations/mixing/index.html`.
- Вхід до лекції додано в огляд теми `/uk/topics/mixing`.
- Збережено 43 слайди. Нотатки узгоджено з їхнім фактичним порядком.
- Таймінг становить рівно 80 хвилин і включає пояснення, розбір ілюстрацій, короткі демонстрації, запитання та вправи.
- Доповідь DOCX містить 24 сторінки: вступ, текст і завдання до всіх 43 слайдів, джерела та контрольні відповіді.
- На вузьких екранах матеріал перебудовується у вертикальну послідовність. Технічні рисунки можна збільшити в окремому діалозі.
- Є навігація кнопками, клавішами, номером слайда і змістом; нотатки лектора, друк, повноекранний режим і прямі посилання `#s1`–`#s43`.
- Режим `?embed=1` прибирає дубльовану шапку та зовнішні поля презентації. У вбудованому програвачі світла й темна теми синхронізуються зі сторінкою порталу, включно з перемиканням під час перегляду.

## Перевірка схем і зображень

Осьовий рух показано в осьовому розрізі з нагнітанням униз і поверненням біля стінок. Радіальний — зі струменем до стінок і верхнім та нижнім контурами циркуляції. Тангенціальний — на вигляді зверху з напрямом по дотичній до кола навколо вала. Схеми умовні й пояснюють домінантні складові реального тривимірного руху. Це SVG креслення, а не AI растрові зображення.

За посиланнями наданої презентації локалізовано 22 файли зображень. Збережено 11 оригінальних ілюстрацій із ZIP. Джерела локальних зображень записано в `public/presentations/mixing/sources.json`; посилання на першоджерела залишено у слайдах.

| Слайд | Що перевірено або уточнено |
| --- | --- |
| 4 | Видно три похилі лопаті; підпис уточнено без непідтвердженої характеристики профілю. |
| 5 | Підпис описує видимі вал і робочі органи, не приписуючи фотографії невидимі вузли. |
| 10 | Фото показує пропелерні органи на вертикальному валу. |
| 12 | На фото BME Systems видно диск і шість прямих лопатей турбіни Руштона. |
| 14 | Видно якірний пристінний орган; твердження про обов’язково видимі скребки прибрано. |
| 15 | Горизонтальний стрічковий змішувач сипких продуктів відмежовано від вертикальної стрічкової мішалки в’язких рідин. |
| 16 | Фото показує двовальну лопатеву машину. |
| 17–19 | Фотографії планетарного міксера, спірального тістоміса та Z-подібних лопатей відповідають темам. |
| 21 | Зображення позначено як технічну візуалізацію Kenics WVM; це приклад принципу, а не рекомендація водогосподарської моделі для харчової лінії. |
| 22, 24 | Підписи розрізняють окремий проточний вузол, насосний модуль і повну установку. |
| 25 | Початкове фото майонезної установки недоступне, HTTP 404. Використано вже наданий і перевірений знімок проточного вузла зі слайда 22 з відповідним підписом. |
| 26, 31–34 | Видимі конструкції відповідають темам; для закритих апаратів не приписано фотографії невидимі внутрішні деталі. |

Інженерні звірки: [EKATO](https://www.ekato.com/products/impellers/conventional-impellers/), [BME Systems](https://www.bmesystems.com/product/custom-rushton-impellers/), [NOV](https://www.nov.com/products/wvm-mixers), [Tetra Pak](https://dairyprocessinghandbook.tetrapak.com/chapter/mixers).

## Відео

На слайдах 4, 5, 7, 22 і 32 підключено п’ять наданих користувачем MP4 за їхнім фактичним змістом. На слайді 32 розміщено файл «до презентації 1.mp4» — фрагмент «Чарлі і шоколадна фабрика». Його позначено як художню ілюстрацію, а не демонстрацію реального коншування.

Довгі ролики мають короткі фрагменти для лекції: MSH 300i — 00:55–01:25, «ГУРТ» — 00:00–00:30, Video Project 9 — 02:15–02:50. Сироп і фрагмент фільму показують повністю, приблизно 14 і 26 секунд відповідно. Доступна кнопка переходу до повного відео. Тривалості отримано з метаданих файлів. П’ять заставок узято з кадрів цих самих роликів.

Нотатки й DOCX узгоджено з розміщенням роликів; загальний таймінг залишається 80 хвилин, оскільки демонстрації замінюють частину обговорення. На слайдах 15, 18 і 25 залишено додаткові файлові програвачі без призначених роликів.

Вихідні файли в Downloads не змінювалися. Публікація на Vercel не виконувалася. Зовнішні відео з мережі не завантажувалися. Детальна відповідність файлів і слайдів наведена в `public/videos/lectures/mixing/README.md` та `videos.json`.

## Перевірки

Оновлення після додавання п’яти відео: локальне відтворення кожного MP4, відповідність файла слайду, межі фрагментів, перемикання на повне відео та зупинку при зміні слайда перевірено у Chrome. Помилок JavaScript немає; на ширинах 390 і 768 пікселів переповнення сторінки немає. Оновлений DOCX має 24 сторінки; його повторно відрендерено у Word, перевірено всі сторінки, що відрізняються від попередньої перевіреної версії. Останню збірку після додавання відео не виконано: автоматична перевірка дозволу зупинилася через ліміт використання. Результати успішної збірки нижче стосуються попередньої версії без цих відео.

- `node scripts/check-mixing-presentation.mjs` — успішно: 43 слайди, нотатки, 80 хвилин, локальні залежності, п’ять призначених відео, вісім відеослотів і числові приклади.
- Перевірка синтаксису `presentation.js` — успішно.
- Браузер Chrome, 1440 × 1000 і 390 × 844: перевірено всі 43 слайди в обох розмірах. Помилок JavaScript, зламаних зображень, HTTP помилок залежностей і горизонтального переповнення сторінки немає.
- Додатково перевірено всі 43 слайди в режимі вбудовування на планшетах 768 × 1024 та 1024 × 768. Помилок і горизонтального переповнення сторінки немає. Перевірено приховування дубльованої шапки й синхронізацію теми після перемикання на сторінці порталу. Кнопки збільшення винесено під рисунки, щоб вони не перекривали підписи.
- Зіставлено з вихідним HTML: назви та порядок усіх 43 слайдів збережено. Перевірено наявність усіх текстів доповіді в DOCX і сумарний таймінг 80 хвилин.
- Перевірено зміст, введення номера, клавіатурну навігацію, межі першого й останнього слайда, нотатки, збільшення рисунків, повноекранний режим із нотатками та відтворення локального відео.
- Режим друку показує всі 43 слайди.
- DOCX відрендерено через Microsoft Word і Poppler, перевірено всі 24 сторінки. Пакетний DOCX renderer у цьому Windows середовищі не знайшов LibreOffice; для візуальної перевірки використано Word. Контрольні PDF і PNG не є додатковими користувацькими результатами.
- `npm test` виконує збірку, smoke і аудит маршрутів. Збірка успішна: 612 сторінок Astro; разом зі статичним HTML презентації перевірено 613 HTML файлів. Smoke успішний.
- Під час остаточної перевірки обмежене середовище двічі повертало EPERM на штатному копіюванні наявного `optimization-course-2021.pdf` з `public` у `dist`. Повторний запуск перевірки поза обмеженим середовищем успішно завершив збірку та smoke. Сам PDF не змінювався.
- Аудит маршрутів завершується помилкою через ті самі 12 маршрутів інших розділів, що були відсутні в sitemap до інтеграції: `/{uk,en,ru,de}/learning`, `/{uk,en,ru,de}/topics/modeling-optimization`, `/{uk,en,ru,de}/topics/processes-apparatus`. Нові маршрути лекції та презентації включено до sitemap. Інші розділи не виправлялися.

Числові перевірки: Reₘ = 36 800; P = 1589,76 Вт; CV ≈ 1,5811%. Значення Nₚ = 5 є заданою умовою прикладу. Двигун 2,2 кВт — навчальний орієнтир, а поріг допустимого CV потребує окремого встановлення.

## Межі змін

Вихідні ZIP та HTML у Downloads не змінено. `Microsoft.Services.Store.winmd` не пов’язаний із матеріалами лекції й не використаний. FoodExpertisePortal не залучався. У робочій папці вже були зміни інших розділів; їх збережено. У попередньо зміненому `sitemap-index.xml.ts` додано лише два маршрути цієї лекції.

## Перелік змінених і доданих файлів

Наведено тільки файли цієї роботи, включно з двома виправленнями схеми та лекції 8 з попереднього етапу. Тимчасові файли перевірок і `dist` не включено.

Усього 59 файлів, з них 33 файли зображень у папці презентації, п’ять кадрів заставок і п’ять MP4.

- `public/images/lectures/mixing/impeller-flow-patterns.svg`
- `src/content/lectures/uk/mixing/lecture-08-mixing-basics.md`
- `src/content/topics/uk/mixing.md`
- `src/pages/sitemap-index.xml.ts`
- `src/pages/uk/topics/mixing/open-lecture.astro`
- `scripts/build-mixing-lecture-docx.py`
- `scripts/check-mixing-presentation.mjs`
- `public/docs/mixing/open-lecture-43-slides.docx`
- `public/videos/lectures/mixing/README.md`
- `docs/mixing-open-lecture-report.md`
- `public/presentations/mixing/index.html`
- `public/presentations/mixing/lecture-notes.json`
- `public/presentations/mixing/mixing_assets/original_slide_10.jpg`
- `public/presentations/mixing/mixing_assets/original_slide_12.jpg`
- `public/presentations/mixing/mixing_assets/original_slide_13.jpg`
- `public/presentations/mixing/mixing_assets/original_slide_15.jpg`
- `public/presentations/mixing/mixing_assets/original_slide_17.jpg`
- `public/presentations/mixing/mixing_assets/original_slide_4.jpg`
- `public/presentations/mixing/mixing_assets/original_slide_5.jpg`
- `public/presentations/mixing/mixing_assets/original_slide_6.jpg`
- `public/presentations/mixing/mixing_assets/original_slide_7.jpg`
- `public/presentations/mixing/mixing_assets/original_slide_8.jpg`
- `public/presentations/mixing/mixing_assets/original_slide_9.jpg`
- `public/presentations/mixing/mixing_assets/s1-photo.webp`
- `public/presentations/mixing/mixing_assets/s10-photo.webp`
- `public/presentations/mixing/mixing_assets/s12-photo.webp`
- `public/presentations/mixing/mixing_assets/s14-photo.webp`
- `public/presentations/mixing/mixing_assets/s15-photo.webp`
- `public/presentations/mixing/mixing_assets/s16-photo.webp`
- `public/presentations/mixing/mixing_assets/s17-photo.webp`
- `public/presentations/mixing/mixing_assets/s18-photo.webp`
- `public/presentations/mixing/mixing_assets/s19-photo.webp`
- `public/presentations/mixing/mixing_assets/s2-photo.webp`
- `public/presentations/mixing/mixing_assets/s21-photo.webp`
- `public/presentations/mixing/mixing_assets/s22-photo.webp`
- `public/presentations/mixing/mixing_assets/s24-photo.webp`
- `public/presentations/mixing/mixing_assets/s26-photo.webp`
- `public/presentations/mixing/mixing_assets/s3-photo.webp`
- `public/presentations/mixing/mixing_assets/s31-photo.webp`
- `public/presentations/mixing/mixing_assets/s32-photo.webp`
- `public/presentations/mixing/mixing_assets/s33-photo.webp`
- `public/presentations/mixing/mixing_assets/s34-photo.webp`
- `public/presentations/mixing/mixing_assets/s4-photo.webp`
- `public/presentations/mixing/mixing_assets/s5-photo.webp`
- `public/presentations/mixing/mixing_assets/s8-photo.webp`
- `public/presentations/mixing/presentation.css`
- `public/presentations/mixing/presentation.js`
- `public/presentations/mixing/sources.json`
- `public/presentations/mixing/videos.json`

- `public/videos/lectures/mixing/magnetic-stirrer-msh-300i.mp4`
- `public/images/lectures/mixing/video-posters/magnetic-stirrer.jpg`
- `public/videos/lectures/mixing/sugar-syrup-mixing.mp4`
- `public/images/lectures/mixing/video-posters/sugar-syrup.jpg`
- `public/videos/lectures/mixing/stirred-vessel-baffles.mp4`
- `public/images/lectures/mixing/video-posters/stirred-vessel.jpg`
- `public/videos/lectures/mixing/rotor-stator-mixing-demo.mp4`
- `public/images/lectures/mixing/video-posters/rotor-stator.jpg`
- `public/videos/lectures/mixing/charlie-chocolate-factory-excerpt.mp4`
- `public/images/lectures/mixing/video-posters/chocolate-film.jpg`
