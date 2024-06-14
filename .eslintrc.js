/* eslint-disable prettier/prettier */
module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        singleQuote: true,
        trailingComma: 'all',
        tabWidth: 4,
      },
    ],
  },
}
