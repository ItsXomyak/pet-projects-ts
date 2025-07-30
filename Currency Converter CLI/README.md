# 💱 Currency Converter CLI

Простой CLI-проект на TypeScript для конвертации валют через [currencyapi.com](https://currencyapi.com/). Позволяет быстро узнать актуальный курс между двумя валютами прямо из терминала с помощью команды `node dist/index.js`.

## 📦 Установка

1. Склонируй репозиторий:

```bash
git clone https://github.com/ItsXomyak/pet-projets-ts.git
cd /pet-projects-ts/Currency Converter CLI
```

2. Установи зависимости:

```bash
npm install
```

3. Создай `.env` файл в корне проекта и добавь в него свой API-ключ:

```
API_KEY=your_currencyapi_key_here
```

4. Собери TypeScript-проект:

```bash
npm run build
```

5. Запусти CLI через Node:

```bash
npm start -- <amount> <from_currency> to <to_currency>
```

Пример:

```bash
npm start -- 100 usd to kzt
```

Результат:

```
100 USD = 54025.87 KZT
```

## 📁 Структура проекта

```
├── src/
│   ├── index.ts         # Точка входа
│   ├── parser.ts        # Парсинг CLI-аргументов
│   └── modules/
│       ├── api.ts       # Запросы к currencyapi.com
│       ├── converter.ts # Бизнес-логика конвертации
│       └── types.ts     # Общие типы: Amount, Result и др.
├── dist/                # Скомпилированные файлы
├── .env                 # Переменные окружения (API_KEY)
├── package.json
└── tsconfig.json
```

## 📜 Скрипты

```bash
npm run build     # Компиляция TypeScript → JS
npm start         # Запуск CLI через node dist/index.js
```

## 🧠 Возможности

- Асинхронная загрузка курсов валют
- Поддержка всех кодов ISO валют
- Обработка ошибок (некорректные коды, проблемы с API и сетью)
- Строгая типизация TypeScript

## ⚠️ Требования

- Node.js 18+
- API-ключ с сайта [currencyapi.com](https://currencyapi.com/)

