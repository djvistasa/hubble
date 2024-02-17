/**
 * Feature Generator
 */

const componentExists = require("../utils/componentExists");

module.exports = {
  description: "Create a new feature",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "auth",
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? "A component or screen with this name already exists"
            : true;
        }

        return "The name is required";
      },
    },
  ],
  actions: (_data) => {
    // Generate index.js and index.test.js
    const featureTemplate = "./feature/feature.js.hbs";
    const findLineToModifyRegex = /,\s*](?![^[]*])/g;
    const addFeatureTemplate = "./feature/addFeature.js.hbs";

    const actions = [
      {
        type: "add",
        path: "../../src/features/{{camelCase name}}/pages/index.ts",
        templateFile: featureTemplate,
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../../src/features/{{camelCase name}}/components/index.ts",

        templateFile: featureTemplate,
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../../src/features/{{camelCase name}}/hooks/index.ts",
        templateFile: featureTemplate,
        abortOnFail: true,
      },
      {
        type: "modify",
        pattern: findLineToModifyRegex,
        path: "./constants.cjs",
        templateFile: addFeatureTemplate,
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
