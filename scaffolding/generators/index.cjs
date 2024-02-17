/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const componentGenerator = require("./component/index.cjs");
const containerGenerator = require("./screen/index.cjs");
const storeGenerator = require("./store/index.cjs");
const featureGenerator = require("./feature/index.cjs");
const hookGenerator = require("./hook/index.cjs");

module.exports = (plop) => {
  plop.setGenerator("component", componentGenerator);
  plop.setGenerator("page", containerGenerator);
  plop.setGenerator("feature", featureGenerator);
  plop.setGenerator("store", storeGenerator);
  plop.setGenerator("hook", hookGenerator);
  plop.addHelper("directory", (comp) => {
    try {
      fs.accessSync(path.join(__dirname, `../../src/pages/${comp}`), fs.F_OK);
      return `src/pages/${comp}`;
    } catch (e) {
      return `src/common/components/${comp}`;
    }
  });
  plop.addHelper("curly", (object, open) => (open ? "{" : "}"));
  plop.setActionType("prettify", (answers, config) => {
    const folderPath = `${path.join(
      __dirname,
      "/../../src/",
      config.path,

      "**.ts"
    )}`;
    exec(`npm run prettify -- "${folderPath}"`);
    return folderPath;
  });
};
