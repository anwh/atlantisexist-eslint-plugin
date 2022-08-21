import {featureName} from './rules/featureName';

const configs = {
  'white': {
    'plugins': [
      '@atlantisexist/eslint-plugin',
    ],
  },
};

const rules = {
  'feature-name': featureName,
};

module.exports = {
  configs,
  rules,
};
