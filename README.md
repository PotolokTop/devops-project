# Task Manager

Минималистичный Task Manager для GitHub-репозитория с разделением задач на 5 участников.

## Стек
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js + Express
- **База данных:** PostgreSQL
- **Авторизация:** JWT
- **Docker:** PostgreSQL и backend через Docker Compose

## Возможности
- регистрация и вход
- авторизация по JWT
- создание, просмотр, изменение статуса и удаление задач
- фильтрация задач: все / активные / выполненные
- минималистичный интерфейс
- готовое распределение работы на 5 человек

## Структура проекта
```bash
Task-Manager/
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── api.js
│       ├── auth.js
│       ├── app.js
│       └── ui.js
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── .env.example
│   └── src/
│       ├── config/
│       │   └── db.js
│       ├── controllers/
│       │   ├── authController.js
│       │   └── taskController.js
│       ├── middleware/
│       │   └── authMiddleware.js
│       ├── routes/
│       │   ├── authRoutes.js
│       │   └── taskRoutes.js
│       └── db/
│           └── init.sql
├── docker-compose.yml
├── backend.Dockerfile
└── TEAM_TASKS.md
```

## Быстрый старт

### 1. Запуск через Docker Compose
```bash
docker compose up --build
```

После запуска:
- Frontend: открой `frontend/index.html` через Live Server или любой статический сервер
- Backend API: `http://localhost:5000`
- PostgreSQL: `localhost:5432`

### 2. Локальный запуск backend
Сначала подними БД:
```bash
docker compose up db -d
```

Потом backend:
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### 3. Проверка
- зарегистрируй пользователя
- войди в систему
- добавь задачи
- меняй статус и удаляй задачи

## Командная работа
Подробное распределение обязанностей лежит в `TEAM_TASKS.md`.
