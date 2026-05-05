FROM node:20-alpine

# Устанавливаем переменную окружения
ENV NODE_ENV=production

# Создаём рабочую папку
WORKDIR /app

# Копируем только package.json для кэша
COPY package*.json ./

# Устанавливаем только production зависимости
RUN npm install --omit=dev

# Копируем остальной код
COPY . .

# Создаём пользователя и переключаемся на него
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Открываем порт
EXPOSE 5000

# Запуск приложения
CMD ["npm", "run", "dev"]