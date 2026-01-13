module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-clean-order',
  ],

  plugins: ['stylelint-scss', 'stylelint-order'],

  rules: {
    /* ===== БАЗОВОЕ ===== */
    'color-hex-length': 'short',

    /* ===== ИМЕНА КЛАССОВ ===== */
    'selector-class-pattern': null,

    /* ===== ПОРЯДОК СВОЙСТВ ===== */
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'declarations',
      'rules',
      'at-rules',
    ],

    /* ===== SCSS ===== */
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-pattern': '^[a-z][a-zA-Z0-9-]*$',

    /* ===== РЕАКТ / CSS MODULES ===== */
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },

  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx',
    '**/node_modules/**',
  ],
};
