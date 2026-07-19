# VR Точка

Український сайт VR-клубу «VR Точка» на Nuxt 4, Vue 3, TypeScript і SCSS.

## Команди

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run preview
```

## Маршрути

- `/` перенаправляє на `/ua`
- `/ua` - головна сторінка
- `/ua/games` - демонстраційний каталог ігор
- `/ua/game/[slug]` - сторінка гри
- `/ua/birthday` - заглушка лендингу дня народження
- `/ua/ps-club` - заглушка PS-клубу
- `/ua/blog` - список матеріалів
- `/ua/blog/[slug]` - заглушка статті
- `/ua/contacts` - контакти

## Нотатки

Сайт має тільки українську версію. i18n, перемикач мов, `[locale]` та словники перекладів не використовуються.

Дані для демонстраційних ігор, тарифів, FAQ і блогу лежать у `data/`. Зображення є локальними SVG-заглушками в `public/images/placeholders/`.

Форми бронювання працюють локально: валідують обов’язкові поля, показують демо-повідомлення й не виконують зовнішніх запитів.

## GitHub Pages

Проект готов к статической публикации через GitHub Actions.

1. Создайте репозиторий на GitHub и отправьте код в ветку `main`.
2. Откройте `Settings → Pages`.
3. В `Build and deployment → Source` выберите `GitHub Actions`.
4. Сделайте push в `main` или запустите workflow вручную во вкладке `Actions`.

Workflow `.github/workflows/deploy-pages.yml` сам определяет имя репозитория, устанавливает `NUXT_APP_BASE_URL`, собирает Nuxt с preset `github_pages` и публикует `.output/public`.

Локальная проверка для репозитория `vrtochka`:

PowerShell:

```powershell
$env:NUXT_APP_BASE_URL="/vrtochka/"
$env:NUXT_PUBLIC_SITE_URL="https://YOUR_GITHUB_LOGIN.github.io/vrtochka"
npm run build:pages
npx serve .output/public
```

При использовании собственного домена задайте `NUXT_APP_BASE_URL=/` и полный домен в `NUXT_PUBLIC_SITE_URL`, затем адаптируйте шаг `Configure Nuxt public paths` в workflow.
