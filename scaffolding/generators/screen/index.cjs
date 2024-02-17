/**
 * Container Generator
 */

const componentExists = require("../utils/componentExists.cjs");
const features = require("../constants.cjs");

module.exports = {
  description: "Create a new page",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Home",
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? "A component or screen with this name already exists"
            : true;
        }

        return "The name is required";
      },
    },
    {
      type: "confirm",
      name: "isShared",
      message: "Will this page be shared across features?",
      default: "true",
    },
    {
      type: "list",
      name: "whichFeature",
      message: "Which feature will use this page?",
      choices: features,
      when: (answers) => !answers.isShared,
    },
  ],
  actions: ({ isShared }) => {
    // Generate index.js and index.test.js
    const pageTemplate = "./screen/screen.js.hbs"; // eslint-disable-line no-var

    const actions = [];

    if (isShared) {
      actions.push(
        {
          type: "add",
          path: "../../src/common/pages/{{camelCase name}}/index.tsx",
          templateFile: pageTemplate,
          abortOnFail: true,
        },
        {
          type: "prettify",
          path: "../../src/common/pages",
        }
      );

      return actions;
    }

    actions.push(
      {
        type: "add",
        path: "../../src/features/{{camelCase whichFeature}}/pages/{{camelCase name}}/index.tsx",
        templateFile: pageTemplate,
        abortOnFail: true,
      },
      {
        type: "prettify",
        path: "../../src/common/pages",
      }
    );

    return actions;
  },
};
