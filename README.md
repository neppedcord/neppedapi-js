![img](https://cdn.discordapp.com/attachments/762217988451074069/858831788453134356/neppedapi.png)

# NeppedAPI
NeppedAPI Это простой API для поставки картинок по разным категориям а так же простой инструмент для работы с глобальным черным списком

# Требования для работы пакета
**Версия Node.JS должна быть [v14.15.1 или выше](https://nodejs.org/en/)**
**Вам нужен [git-scm](http://git-scm.com/)**

## Установка
1. Установите пакет **neppedapi-js** с помощью **NPM** (также должен быть установлен **Git**)
```bash
$ npm install github:neppedcord/neppedapi-js
```

2. Интегрируйте SDK в свой проект
```js
let token = "***"; // Токен разработчика (получить можно тут - https://api-docs.neppedcord.top/start/auth)

const NeppedSDK = require('neppedapi');
const client = new NeppedSDK(token);
```

## Использование
```js
// Images API (https://api-docs.neppedcord.top/api/images)
client.images('baka') // baka, cry, cuddle, happy, hug, kiss, sad, wag
    .then(data => {
        /* {
            url: 'https://cdn.neppedcord.top/content/baka/baka_038.gif'
        } */
    }).catch(console.error);

// SHARP (https://api-docs.neppedcord.top/api/sharp)
// Общедоступные API-методы:
client.sharp.check('SOME_ID') // ID пользователя/сервера/бота
    .then(data => {
        /* {
            userID: "SOME_ID",
            moderatorID: "SOME_MODERATOR_ID",
            banData: {
                reason: "Спам-рассылка",
                image: null,
                dateTime: 1607527840923
            }
        } */
    }).catch(console.error);

// Для доверенных разработчиков:
client.sharp.ban('SOME_ID') // ID пользователя/сервера/бота
    .then(data => {
        /* {
            banned: true
        } */
    }).catch(console.error);

// Для администрации API:
client.sharp.unban('SOME_ID') // ID пользователя/сервера/бота
    .then(data => {
        /* {
            unbanned: true
        } */
    }).catch(console.error);
```

## Images API: Типы картинок
SFW: baka, cry, cuddle, happy, hug, kiss, sad, wag, smug, pat, dance, poke.

Так-же будут и другие тэги: five, slap, punch, feed.
