![img](https://cdn.discordapp.com/attachments/762217988451074069/858831788453134356/neppedapi.png)

# NeppedAPI
NeppedAPI Это простой API для поставки картинок по разным категориям а так же простой инструмент для работы с глобальным черным списком от проекта NeppedCord - SHARP

# Документация по работе с API
Обязательно прочитайте документацию по работе с API на нашем сайте: https://api-docs.neppedcord.top/

# Требования для работы пакета
**Версия Node.JS должна быть [v14.15.1 или выше](https://nodejs.org/en/)**, **так же Вам нужен [git-scm](http://git-scm.com/)**

# Начало работы вместе с NeppedAPI
### 1. Установка пакета
Приступим к установке: Вам нужно установить neppedapi-js с помощью **npm**
```red
$ npm install github:neppedcord/neppedapi-js
```
### 2. Начать работу с пакетом
Теперь, нужно интегрировать пакет в Ваш проект
```js
let auth = "token_here"; // Здесь Вы указываете токен который даётся на сайте

const NeppedSDK = require('neppedapi');
const nepa = new NeppedSDK(auth);
```
Готово, теперь Вы подготовлены к работе! 🎉

# Images API - Для Вашего приложения 
Это простой способ сделать в Вашем приложении кавайность: Вы можете обниматься, целоваться и быть счастливыми >w<
# Теги картинок
Теги это индетификаторы или же проще обозначения того, какую фотокарточку Вы хотите отправить: Это как и обнимашки, так же и красивая фотография Менхера Чан<br>
```
Если у вас есть предложения что ещё добавить по тэгам мы рады Вас видеть здесь: api.contact@neppedcord.top
```

### Реакции для хороших детишек ( ´ ω ` )
```
   Обниматься       ::   "hug"
   Прижиматься      ::   "cuddle"
   Целоваться       ::   "kiss"
   Гладить          ::   "pat"
   Любить           ::   "love"
```
### Реакции для злых детишек ヾ(`ヘ´)ﾉﾞ
```
   Потыкать         ::   "poke"
   Обзываться       ::   "baka"
```
### Картинки действий o(≧▽≦)o
``` 
   Счастье          ::   "happy"    ヽ(*・ω・)ﾉ
   Самодовольство   ::   "smug"
   Вилять хвостиком ::   "wag"
   Танцевать        ::   "dance"
   Приветствие      ::   "wave" 
   Грустить         ::   "sad"      (｡T ω T｡)
   Плакать          ::   "cry"      ｡･ﾟﾟ*(>д<)*ﾟﾟ･｡
```
### Картинки с аниме персонажами (つ≧▽≦)つ	
```
   Menhera Chan     ::   "menhera-chan"
```


# SHARP API - Глобальная база для защиты от плохишей 
**С помощью SHARP вы можете обезопасить свой сервер в Дискорде от плохих ребяток, что хотят устроить тьму** >~<
### Управление базой и внос данных
**Эта функция доступна лишь для верифицированных разработчиков проектом NeppedCord, а так же самим руководителям и администраторам***<br>
Временно заявку на верификацию недоступна, она будет доступна при крупном релизе NeppedCord ID
### Просмотр данных
**Эта функция будет доступна каждым пользователям инструмента SHARP**


# Использование

Сейчас мы стоим на этапе готовности, теперь посмотрим как работает это.
## Начнём с Images API.
```js
nepa.images('wag')
    .then(data => {
        /* {
            url: 'https://cdn.neppedcord.top/content/baka/wag_017.gif'
        } */
    }).catch(console.error);
```
## SHARP API
### Функция считывания данных
```js
nepa.sharp.check('SOME_ID') // ID пользователя/сервера/бота
    .then(data => {
        /* {
            userID: "SOME_ID",
            moderatorID: "SOME_MODERATOR_ID",
            banData: {
                reason: "Спам-рассылка",
                image: null,
                dateTime: 1540015593
            }
        } */
    }).catch(console.error);
```
### Функции для верифицированных разработчиков
```js
nepa.sharp.ban('SOME_ID') // ID пользователя/сервера/бота
    .then(data => {
        /* {
            banned: true
        } */
    }).catch(console.error);
```
### Функция только для разработчиков API
```js
nepa.sharp.unban('SOME_ID') // ID пользователя/сервера/бота
    .then(data => {
        /* {
            unbanned: true
        } */
    }).catch(console.error);
```

# Прочая информация
### Иллюстрация NeppedAPI в самом верху сделан разработчиком [neppedboy](https://github.com/neppedboy)<br>
### Каомодзи были взяты с сайта http://kaomoji.ru/


