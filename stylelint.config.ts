import type { Config } from 'stylelint'

const config: Config = {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    // SCSS compatibility
    'at-rule-no-unknown': undefined,
    'scss/at-rule-no-unknown': true,

    // Reasonable defaults
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'unit-no-unknown': true,

    // Optional: relax specificity warnings (for media queries, etc.)
    'no-descending-specificity': undefined,
  },
  ignoreFiles: [
    '**/node_modules/**',
    '**/dist/**',
    '**/*.js',
    '**/*.ts',
    '**/*.html',
  ],
}

export default config
