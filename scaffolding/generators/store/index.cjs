/**
 * Store Generator
 */

const features = require("../constants.cjs");

module.exports = {
  description: "Create a new store",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "User",
      validate: (value) => {
        if (/.+/.test(value)) {
          return true;
        }
        return "The name is required";
      },
    },
    {
      type: "confirm",
      name: "isShared",
      message: "Will this store be shared across features?",
      default: "true",
    },
    {
      type: "list",
      name: "whichFeature",
      message: "Which feature will use this store?",
      choices: features,
      when: (answers) => !answers.isShared,
    },
  ],
  actions: ({ isShared }) => {
    // Generate index.js and index.test.js
    let storeTemplate = "./store/store.js.hbs";
    let typesTemplate = "./store/types.js.hbs";

    const actions = [];

    if (isShared) {
      actions.push(
        {
          type: "add",
          path: "../../src/common/stores/{{camelCase name}}/index.ts",
          templateFile: storeTemplate,
          abortOnFail: true,
        },
        {
          type: "add",
          path: "../../src/common/stores/{{camelCase name}}/types.ts",
          templateFile: typesTemplate,
          abortOnFail: true,
        },
        {
          type: "add",
          path: "../../src/common/stores/{{camelCase name}}/constants.ts",
          templateFile: typesTemplate,
          abortOnFail: true,
        },
        {
          type: "prettify",
          path: "../../src/common/store",
        }
      );

      return actions;
    }

    actions.push(
      {
        type: "add",
        path: "../../src/features/{{camelCase whichFeature}}/stores/{{camelCase name}}/index.ts",
        templateFile: storeTemplate,
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../../src/features/{{camelCase whichFeature}}/stores/{{camelCase name}}/types.ts",
        templateFile: typesTemplate,
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../../src/features/{{camelCase whichFeature}}/stores/{{camelCase name}}/constants.ts",
        templateFile: typesTemplate,
        abortOnFail: true,
      },
      {
        type: "prettify",
        path: "../../src/features/{{camelCase whichFeature}}/store",
      }
    );

    return actions;
  },
};
