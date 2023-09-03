module.exports = {
    env: {browser: true, es2021: true},
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'standard-with-typescript'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'build'],

    'overrides': [
        {
            "files": ["tests/**", "vitest.config.ts"],
            "parserOptions": {
                "project": "./tsconfig.test.json"
            },
            "plugins": ["vitest"],
            "extends": ["plugin:vitest/all"],
            "rules": {
            "vitest/prefer-called-with": "off",
                "vitest/consistent-test-filename": "off"
            }
        }
    ],


    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn'
        ],
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "eol-last": "off",
        "@typescript-eslint/triple-slash-reference": "off"
    },

}