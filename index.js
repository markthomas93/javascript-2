module.exports = {
  extends: 'airbnb',
  rules: {
    // No semi-colon
    semi: ['error', 'never'],
    // Trailing comma
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],

    // React filename extension
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
}
