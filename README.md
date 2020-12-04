# neppedapi-js
Node.js SDK для работы с NeppedAPI

## Установка
1. Склонируйте **neppedapi-js** в папку своего проекта
```bash
$ git clone https://github.com/neppedcord/neppedapi-js.git
# Или.. просто скачайте папку с GitHub.
```
2. Интегрируйте SDK в свой проект
```js
let token = "***"; // Токен разработчика (получить можно тут - https://api-docs.neppedcord.top/start/auth)

const NeppedSDK = require('./neppedapi-js/index.js');
const client = new NeppedSDK(token);
```

## Использование
```js
// Images API (https://api-docs.neppedcord.top/api/images)
client.images('baka') // baka, cry, cuddle, happy, hug, kiss, sad, wag
    .then(data => { ... }) // data: { url: 'https://cdn.neppedcord.top/content/baka/baka_038.gif' }
    .catch(console.error);
```

## Теги картинок
SAFE Тэги: baka, cry, cuddle, happy, hug, kiss, sad, wag.
Так-же будут и другие тэги: five, poke, slap, punch, dance, feed, smug, pat.

