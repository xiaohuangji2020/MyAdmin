module.exports = {
  extends: 'stylelint-config-hudochenkov/full',
  overrides: [
    {
      'files': ['*.vue', '**/*.vue'],
      'customSyntax': 'postcss-html',
    }
  ],
  rules: {
    'selector-pseudo-class-no-unknown': [true, { 'ignorePseudoClasses': ['deep'] }],
    'selector-max-type': 3,
  },
}