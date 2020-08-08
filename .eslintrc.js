module.exports = {
  root: true,

  env: {
    node: true,
    browser: true
  },

  plugins: ['prettier'],

  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'react-app'
  ],

  rules: {
    // prettier 설정
    'prettier/prettier': [
      'error',
      {
				useTabs: false,
        tabWidth: 2, 
        singleQuote: true,
        trailingComma: 'none',
        arrowParens: 'avoid'
      }
    ],
  },

  globals: {
    $nuxt: true
  },

  parserOptions: {
    parser: 'babel-eslint'
  }
};