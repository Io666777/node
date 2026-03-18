# basic-nodejs-mitso

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package
  manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm start
```

## Development

If you're using VSCode, you can get a better developer experience from integration with
[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and
[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging

## докер команды
docker-compose up --build -d ---собиарет образ

docker-compose up -d --- запуск в фоне

docker-compose stop --- остановка контейнера

docker-compose down --- остановка + удаленик

## призма команды

npx prisma migrate dev ---миграции

## порядок команд
# 1. Установить зависимости и сгенерировать типы Prisma
npm install
npx prisma generate

# 2. Собрать и запустить базу с приложением в Докере
docker-compose up --build -d эт 1 

# 3. Создать таблицы внутри базы данных (в Докере)
docker-compose exec app npx prisma migrate dev --name init эт2

###### для демонстрации
npx prisma studio
