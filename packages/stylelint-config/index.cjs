'use strict';

const { hasConfig } = require('./lib/utils.cjs');

module.exports = {
  reportNeedlessDisables: true,
  reportInvalidScopeDisables: true,
  extends: [
    require.resolve('stylelint-config-standard'),
    require.resolve('stylelint-config-css-modules'),
    require.resolve('./lib/prefix.json'),
    require.resolve('./lib/scss.cjs'),
    require.resolve('./lib/ignore.cjs'),
    require.resolve('./lib/base.cjs'),
    require.resolve('stylelint-config-prettier'),
  ],
  plugins: [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-suitcss',
  ],
  rules: {
    'suitcss/custom-property-no-outside-root': true,
    'suitcss/root-no-standard-properties': true,
    'suitcss/selector-root-no-composition': true,

    'plugin/declaration-block-no-ignored-properties': true,
    'selector-disallowed-list': [/,\s*?,/, /^\s*,\s*/],

    ...hasConfig({
      'selector-type-no-unknown': [true, { ignoreTypes: ['page'] }],
      'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    }),
  },
};
