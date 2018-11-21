const express = require('express');
const router = express.Router();
const { Translate } = require('@google-cloud/translate');
const projectId = 'day5-223122';
const axios = require('axios');

// if (process.env.NODE_ENV !== 'production') require('../secrets.json');

const translate = new Translate({
  projectId: projectId,
});

let codes = {
  CA: 'en',
  FR: 'fr',
  DE: 'de',
  HK: 'zh-CN',
  IL: 'iw',
  IT: 'it',
  JP: 'ja',
  MY: 'ms',
  NL: 'nl',
  RU: 'ru',
  SG: 'zh-TW',
  ES: 'es',
  SE: 'sv',
  UK: 'en',
  US: 'en',
};

router.get('/', async (req, res, next) => {
  try {
    const text = 'Hello world!';
    let target;
    await axios.get('http://ip-api.com/json').then(res => {
      target = codes[res.data.countryCode];
    });

    translate.translate(text, target).then(results => {
      const translation = results[0];
      res.send(translation);
    });
  } catch (error) {
    console.log(error);
  }
});

// router.get('/', (req, res, next) => {
//   axios
//     .get('http://ip-api.com/json')
//     .then(res => {
//       console.log(res.data.countryCode);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

module.exports = router;
