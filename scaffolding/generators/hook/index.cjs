/**
 * Hook Generator
 */
const features = require("../constants.cjs");

module.exports = {
  description: "Create a new hook",
  prompts: [
    {
      type: "input",
      name: "name",
      message:
        "What should it be called? (needs to be prefixed with the word use)",
      default: "useAuth",
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
      message: "Will this hook be shared across features?",
      default: "true",
    },
    {
      type: "list",
      name: "whichFeature",
      message: "Which feature will use this hook?",
      choices: features,
      when: (answers) => !answers.isShared,
    },
  ],
  actions: ({ isShared }) => {
    // Generate index.js and index.test.js
    const hookTemplate = "./hook/hook.js.hbs";
    const typesTemplate = "./hook/types.js.hbs";

    const actions = [];

    if (isShared) {
      actions.push(
        {
          type: "add",
          path: "../../src/common/hooks/{{camelCase name}}/index.ts",
          templateFile: hookTemplate,
          abortOnFail: true,
        },
        {
          type: "add",
          path: "../../src/common/hooks/{{camelCase name}}/types.ts",
          templateFile: typesTemplate,
          abortOnFail: true,
        },
        {
          type: "prettify",
          path: "../../src/common/hooks",
        }
      );

      return actions;
    }

    actions.push(
      {
        type: "add",
        path: "../../src/features/{{camelCase whichFeature}}/hooks/{{camelCase name}}/index.ts",
        templateFile: hookTemplate,
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../../src/features/{{camelCase whichFeature}}/hooks/{{camelCase name}}/types.ts",
        templateFile: typesTemplate,
        abortOnFail: true,
      },
      {
        type: "prettify",
        path: "../../src/features/{{camelCase whichFeature}}/hooks",
      }
    );

    return actions;
  },
};
