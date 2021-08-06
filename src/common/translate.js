const _translate = {
  translateSourceUrl:
    "https://translate.googleapis.com/translate_a/single?client=gtx&sl={SOURCE_LANG}&tl={TARGET_LANG}&dt=t&q={TEXT}",
  getTranslateSourceUrl: function () {
    return this.translateSourceUrl
  },
  mergeSentences: function (a) {
    return a
      .map(function (b) {
        return b[0]
      })
      .join("")
  },
  generatePostUrl: function (a, b, c) {
    return this.getTranslateSourceUrl()
      .replace("{SOURCE_LANG}", c)
      .replace("{TARGET_LANG}", b)
      .replace("{TEXT}", encodeURI(a))
      .toString()
  },
  translateText: function ({ text, toLanguage, fromLanguage }) {
    if ("" === text) return ""
    let d = fromLanguage ? fromLanguage : "auto",
      e = toLanguage ? toLanguage : "tr",
      f = this.generatePostUrl(text, e, d),
      g = this
    return fetch(f)
      .then(function (h) {
        return h.json()
      })
      .then(function (h) {
        return {
          sourceLang: h[2],
          targetLang: e,
          originalText: text,
          text: g.mergeSentences(h[0]),
        }
      })
      .catch(function (h) {
        return Promise.reject(Error(h))
      })
  },
}

export function translate({ text, toLanguage, fromLanguage }) {
  return new Promise(async (trResolve, trReject) => {
    // await wait(15000);
    console.log("translating", text, toLanguage)
    // text = text.length < 300 ? text : text.substr(0, 300);
    try {
      var result = await _translate.translateText({
        text: text,
        toLanguage: toLanguage,
        fromLanguage: fromLanguage,
      })
      console.log("tr result:", text, result)
      // result = "translated"
      trResolve(result.text ? result.text : "")
      // trResolve('result.text')
    } catch (error) {
      console.error("translation failed", error)
      trResolve("error translating")
    }
  })
}

// export const translateEverything = (data, languages, onFinished) => {
//   const keys = Object.keys(data.en);

//   var out = {
//     en: {}
//   };
//   languages.forEach(lang => {
//     out[lang] = {};
//   });

//   doItems();

//   async function doItems() {
//     for (let index = 0; index < keys.length; index++) {
//       const key = keys[index];
//       const text = data.en[key];
//       for (let index = 0; index < languages.length; index++) {
//         const lang = languages[index];
//         if (lang === "en") out.en[key] = text;
//         else await processItem(key, text, lang);
//       }
//     }
//     console.log("finished", JSON.stringify(out));
//     onFinished(out);
//   }

//   function processItem(key, text, lang) {
//     return new Promise(async wresolve => {
//       console.log("translate item", key, text, lang);
//       const translated = await _translate.translateText({
//         text: text,
//         toLanguage: lang
//       });
//       // await wait(15000);  // remove for bulk processing
//       out[lang][key] = translated.text;
//       wresolve();
//     });
//   }
// };

// function wait(timeout) {
//   return new Promise(wresolve => {
//     setTimeout(() => {
//       wresolve();
//     }, timeout);
//   });
// }
