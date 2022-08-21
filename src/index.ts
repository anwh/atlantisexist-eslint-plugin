import {featureName} from './rules/featureName';

const configs = {
  'plugins': [
    '@atlantisexist/eslint-plugin-general',
  ],
};

const rules = {
  'feature-name': featureName,
};

module.exports = {
  configs,
  rules,
};
