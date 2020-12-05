# neppedapi-js
Node.js SDK для работы с NeppedAPI

## Установка
1. Установите пакет **neppedapi-js** с помощью npm
```bash
$ npm install github:neppedcord/neppedapi-js/
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
    .then(data => { ... }) // data: { url: 'https://cdn.neppedcord.top/content/baka/baka_038.gif' }
    .catch(console.error);
```

## Images API: Типы картинок
SFW: baka, cry, cuddle, happy, hug, kiss, sad, wag.

Так-же будут и другие тэги: five, poke, slap, punch, dance, feed, smug, pat.

