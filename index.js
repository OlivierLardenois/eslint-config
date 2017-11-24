module.exports = {
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },
    env: {
        browser: true,
        node: true,
        jest: true,
        jasmine: true
    },
    globals: {
        Promise: true
    },
    extends: 'eslint:recommended',
    rules: {
        'space-infix-ops': [
            2,
            {
                int32Hint: false
            }
        ],
        'no-cond-assign': 'off',
        'no-constant-condition': 'warn',
        'no-empty': 'warn',
        'no-unused-vars': 'warn',
        curly: 'off',
        eqeqeq: [
            'error',
            'smart'
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
                ignoreArrayIndexes: true
            }
        ],
        'no-multi-str': 'error',
        'no-native-reassign': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'warn',
        'no-octal': 'warn',
        'no-octal-escape': 'warn',
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-return-assign': 'warn',
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-unmodified-loop-condition': 'warn',
        'no-unused-expressions': [
            'warn',
            {
                allowShortCircuit: true,
                allowTernary: true
            }
        ],
        'no-useless-call': 'warn',
        'wrap-iife': [
            'warn',
            'outside'
        ],
        yoda: 'warn',
        'no-shadow-restricted-names': 'error',
        'no-undef-init': 'warn',
        'array-bracket-spacing': [
            'warn',
            'never'
        ],
        'block-spacing': [
            'warn',
            'always'
        ],
        'brace-style': [
            'warn',
            '1tbs',
            {
                allowSingleLine: true
            }
        ],
        camelcase: [
            'warn',
            {
                properties: 'always'
            }
        ],
        'comma-spacing': [
            'warn',
            {
                before: false,
                after: true
            }
        ],
        indent: [
            'warn',
            4,
            {
                SwitchCase: 1
            }
        ],
        'key-spacing': [
            'warn',
            {
                beforeColon: false,
                afterColon: true
            }
        ],
        'keyword-spacing': [
            2,
            {
                before: true,
                after: true
            }
        ],
        'new-cap': 'warn',
        'new-parens': 'warn',
        'no-multiple-empty-lines': [
            'warn',
            {
                max: 2
            }
        ],
        'no-spaced-func': 'warn',
        'no-unneeded-ternary': 'warn',
        'no-whitespace-before-property': 'warn',
        'object-curly-spacing': [
            'warn',
            'always'
        ],
        'quote-props': [
            'warn',
            'as-needed',
            {
                keywords: true,
                unnecessary: false
            }
        ],
        quotes: [
            'error',
            'single'
        ],
        semi: [
            'error',
            'always'
        ],
        'space-before-blocks': 'warn',
        'space-before-function-paren': [
            'warn',
            'always'
        ],
        'space-in-parens': [
            'warn',
            'never'
        ],
        'spaced-comment': [
            'warn',
            'always'
        ],
        'no-console': 'warn',
        'no-debugger': 'warn',
        'no-alert': 'warn'
    }
};
