import React, { useState } from "react";
import languages from "../../data/languages";
import { Checkbox, Typography, Card, Button } from "@material-ui/core";
import { strings } from "../../data/strings";
import { translate } from "../../common/translate";
import { downloadTextFile } from "../../common/downloadTextFile";
// import PropTypes from 'prop-types';

export default function Translations() {
  const [checkboxes, setCheckboxes] = useState({});
  const [running, setRunning] = useState("not running");

  var storedStrings;
  function doTranslations() {
    // retrieve text to be translated from localStorage
    storedStrings = Object.keys(localStorage).filter(
      (key) => localStorage.getItem(key) === "translate"
    );
    var out = strings;
    Object.keys(checkboxes).forEach(async (languageCode, index) => {
      if (checkboxes[languageCode]) {
        setRunning(
          languages.filter((language) => language.code === languageCode)[0]
            .display
        );
        const langResultObj = await translateLanguage({ languageCode });
        // merge new translations
        out[languageCode] = { ...out[languageCode], ...langResultObj };
        await wait(15000); // needed so as to not exceed free quota on API
      }
      if (index === Object.keys(checkboxes).length - 1) {
        setRunning("finished - put the downloaded file in /src/data/");
        downloadTextFile({
          text: "export const strings = " + JSON.stringify(out),
          filename: "strings.js",
        });
      }
    });
  }

  async function translateLanguage({ languageCode }) {
    return new Promise((resolve, reject) => {
      // make a list of words to be translated
      const toBeTranslated = storedStrings.filter(
        (text) =>
          !strings || !strings[languageCode] || !strings[languageCode][text]
      );
      translate({
        text: toBeTranslated.join("\n"),
        toLanguage: languageCode,
      }).then((result) => {
        var out = {};
        const resultArr = result.split("\n");
        // make an object containing translations to be merged
        toBeTranslated.forEach((text, index) => {
          out[text] = resultArr[index];
        });
        resolve(out);
      });
    });
  }

  function wait(timeout) {
    return new Promise((wresolve) => {
      setTimeout(() => {
        wresolve();
      }, timeout);
    });
  }

  return (
    <div className="dev-translations fill vertical layout center start-justified">
      <Card className="vertical layout">
        <Typography variant="h3">Translations</Typography>
        <div className="horizontal layout wrap">
          {languages.map((language) => (
            <div>
              {language.display}
              <Checkbox
                label={language.display}
                checked={!!checkboxes[language.code]}
                onChange={(e) => {
                  setCheckboxes({
                    ...checkboxes,
                    [language.code]: e.target.checked,
                  });
                }}
              />
            </div>
          ))}
        </div>
        <Typography variant="h5">{running}</Typography>
        <Button onClick={doTranslations}>Do translations</Button>
      </Card>
    </div>
  );
}

Translations.propTypes = {};
Translations.defaultProps = {};
