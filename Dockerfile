# Используем базовый образ Node.js
FROM node:22

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json в контейнер
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект в контейнер
COPY . .

# Открываем порт, который будет использован приложением
EXPOSE 5173

# Команда для запуска вашего приложения
RUN cd /app
RUN npm run dev