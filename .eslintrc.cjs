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
            "extends": [

                "plugin:vitest/all",
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:react-hooks/recommended',
                'standard-with-typescript'],
            "rules": {
                "prefer-const": "off",
                "@typescript-eslint/return-await": "off",
                "vitest/prefer-spy-on": "off",
                "@typescript-eslint/prefer-nullish-coalescing": "off",
                "vitest/prefer-called-with": "off",
                "vitest/consistent-test-filename": "off",
                'react-refresh/only-export-components': [
                    'warn'
                ],
                "@typescript-eslint/no-unused-vars": "off",
                "@typescript-eslint/ban-ts-comment": "off",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/consistent-type-definitions": "off",
                "eol-last": "off",
                "@typescript-eslint/triple-slash-reference": "off",
                "@typescript-eslint/strict-boolean-expressions": "off",
                "@typescript-eslint/no-non-null-assertion": "off",
                "@typescript-eslint/no-namespace": "off",
                "@typescript-eslint/no-floating-promises": "off"

            }
        }
    ],


    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn'
        ],
        '@typescript-eslint/no-extraneous-class': "off",
        "@typescript-eslint/consistent-type-assertions": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "eol-last": "off",
        "@typescript-eslint/triple-slash-reference": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-floating-promises": "off"
    },

}