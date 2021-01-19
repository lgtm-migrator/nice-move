module.exports = {
  extends: ['plugin:unicorn/recommended', 'prettier/unicorn'],
  rules: {
    'unicorn/expiring-todo-comments': 'off',
    'unicorn/import-index': ['warn', { ignoreImports: true }],
    'unicorn/import-style': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-set-has': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
};
