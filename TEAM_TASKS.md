# Распределение обязанностей для 5 человек

## Участник 1 — Frontend layout / HTML
**Что делает:**
- собирает основную HTML-структуру
- продумывает блоки интерфейса
- делает форму входа, регистрации и секцию задач

**Файлы:**
- `frontend/index.html`

---

## Участник 2 — Дизайн / CSS
**Что делает:**
- оформляет минималистичный дизайн
- настраивает адаптивность
- делает карточки, кнопки, формы, сетку и состояния интерфейса

**Файлы:**
- `frontend/css/styles.css`

---

## Участник 3 — Frontend logic / JS
**Что делает:**
- пишет запросы к API
- реализует авторизацию на клиенте
- выводит задачи на экран
- делает фильтрацию и интерактивность

**Файлы:**
- `frontend/js/api.js`
- `frontend/js/auth.js`
- `frontend/js/app.js`
- `frontend/js/ui.js`

---

## Участник 4 — Backend / API
**Что делает:**
- создает сервер на Express
- реализует регистрацию и вход
- делает CRUD для задач
- подключает middleware авторизации и роуты

**Файлы:**
- `backend/server.js`
- `backend/src/controllers/authController.js`
- `backend/src/controllers/taskController.js`
- `backend/src/routes/authRoutes.js`
- `backend/src/routes/taskRoutes.js`
- `backend/src/middleware/authMiddleware.js`

---

## Участник 5 — База данных / Docker / Документация
**Что делает:**
- проектирует таблицы БД
- поднимает PostgreSQL в Docker
- настраивает подключение backend к БД
- пишет README и инструкции по запуску

**Файлы:**
- `backend/src/config/db.js`
- `backend/src/db/init.sql`
- `docker-compose.yml`
- `backend.Dockerfile`
- `README.md`
- `.env.example`

---

## Итог по ролям
1. **HTML-разметка**
2. **CSS-дизайн**
3. **Frontend JS**
4. **Backend Node.js / Express**
5. **PostgreSQL + Docker + документация**
