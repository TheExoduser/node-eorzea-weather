# eorzea-weather [![CircleCI](https://circleci.com/gh/eorzea-weather/eorzea-weather.svg?style=shield)](https://circleci.com/gh/flowercartelet/eorzea-weather)

Weather forecast for Eorzea.

Extended by [ex0tiq](https://github.com/ex0tiq/) to include the new endwalker areas

## Install

```console
$ yarn install eorzea-weather
```

or

```console
$ npm install --save eorzea-weather
```

## Usage

```javascript
const EorzeaWeather = require('eorzea-weather');

EorzeaWeather.getWeather(EorzeaWeather.ZONE_EUREKA_ANEMOS, new Date()); // Gales
```

## License

[MIT](LICENSE)

```plain
FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.
FINAL FANTASY XIV © 2010 - 2018 SQUARE ENIX CO., LTD. All Rights Reserved.
```
