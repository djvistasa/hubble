/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists.cjs');
const features = require('../constants.cjs');

module.exports = {
  description: 'Create a new component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or screen with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'isShared',
      message: 'Will this component be shared across features?',
      default: 'true',
    },
    {
      type: 'list',
      name: 'whichFeature',
      message: 'Which feature will use this component?',
      choices: features,
      when: (answers) => !answers.isShared,
    },
  ],
  actions: ({ isShared }) => {
    // Generate index.js and index.test.js
    const componentTemplate = './component/component.js.hbs';
    const stylesTemplate = './component/styles.js.hbs';
    const typesTemplate = './component/types.js.hbs';

    const actions = [];

    if (isShared) {
      actions.push(
        {
          type: 'add',
          path: '../../src/common/components/{{camelCase name}}/index.tsx',
          templateFile: componentTemplate,
          abortOnFail: true,
        },
        {
          type: 'add',
          path: '../../src/common/components/{{camelCase name}}/index.test.tsx',
          templateFile: './component/test.js.hbs',
          abortOnFail: true,
        },
        {
          type: 'add',
          path: '../../src/common/components/{{camelCase name}}/styles.ts',
          templateFile: stylesTemplate,
          abortOnFail: true,
        },
        {
          type: 'add',
          path: '../../src/common/components/{{camelCase name}}/types.ts',
          templateFile: typesTemplate,
          abortOnFail: true,
        },
        {
          type: 'prettify',
          path: '../../src/common/components',
        },
      );

      return actions;
    }

    actions.push(
      {
        type: 'add',
        path: '../../src/features/{{camelCase whichFeature}}/components/{{camelCase name}}/index.tsx',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/features/{{camelCase whichFeature}}/components/{{camelCase name}}/index.test.tsx',
        templateFile: './component/test.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/features/{{camelCase whichFeature}}/components/{{camelCase name}}/styles.ts',
        templateFile: stylesTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/features/{{camelCase whichFeature}}/components/{{camelCase name}}/types.ts',
        templateFile: typesTemplate,
        abortOnFail: true,
      },
      {
        type: 'prettify',
        path: '../../app/features/{{camelCase whichFeature}}',
      },
    );

    return actions;
  },
};
