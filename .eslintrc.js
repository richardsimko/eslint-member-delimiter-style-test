module.exports = {
  'env': {
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2018
  },
  'plugins': [
    '@typescript-eslint'
  ]
};
