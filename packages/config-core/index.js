module.exports = {
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    globals: {
        Promise: true,
    },
    parser: 'babel-eslint',
    extends: 'eslint:recommended',
    rules: {
        'space-infix-ops': 'warn',
        'no-constant-condition': ['error', { checkLoops: false }],
        'no-empty': 'error',
        'no-unused-vars': 'error',
        curly: [
            'warn',
            'all',
        ],
        eqeqeq: [
            'error',
            'smart',
        ],
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-floating-decimal': 'warn',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-lone-blocks': 'warn',
        'no-loop-func': 'warn',
        'no-magic-numbers': [
            'warn',
            {
                ignore: [0, 1, -1],
                ignoreArrayIndexes: true,
                enforceConst: true,
            },
        ],
        'no-multi-str': 'error',
        'no-native-reassign': 'error',
        'no-new-func': 'error',
        'no-array-constructor': 'error',
        'no-new-wrappers': 'error',
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-return-assign': 'error',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': [
            'warn',
            {
                allowShortCircuit: true,
                allowTernary: true,
            },
        ],
        'no-useless-call': 'error',
        'wrap-iife': [
            'warn',
            'outside',
        ],
        yoda: [
            'error',
            'never',
            { exceptRange: true },
        ],
        'no-shadow-restricted-names': 'error',
        'no-undef-init': 'error',
        'array-bracket-spacing': [
            'warn',
            'never',
        ],
        'block-spacing': [
            'warn',
            'always',
        ],
        'brace-style': [
            'error',
            '1tbs',
        ],
        camelcase: [
            'error',
            { properties: 'always' },
        ],
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        indent: [
            'warn',
            4,
            {
                SwitchCase: 1,
                ObjectExpression: 1,
                ArrayExpression: 1,
                flatTernaryExpressions: false,
            },
        ],
        'key-spacing': [
            'warn',
            {
                beforeColon: false,
                afterColon: true,
            },
        ],
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],
        'new-cap': 'error',
        'new-parens': 'error',
        'no-multiple-empty-lines': [
            'warn',
            { max: 2 },
        ],
        'no-spaced-func': 'error',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-spacing': [
            'error',
            'always',
        ],
    'template-curly-spacing': ['warn', 'always'],
        'quote-props': [
            'warn',
            'as-needed',
            {
                keywords: true,
                unnecessary: false,
            },
        ],
        quotes: [
            'error',
            'single',
        ],
        semi: [
            'error',
            'always',
        ],
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error',
            'always',
        ],
        'space-in-parens': [
            'error',
            'never',
        ],
        'spaced-comment': [
            'warn',
            'always',
        ],
        'comma-dangle': [
            'warn',
            'always-multiline',
            { functions: 'never' },
        ],
        'no-console': 'warn',
        'no-debugger': 'warn',
        'eol-last': ['error', 'always'],
    },
};
