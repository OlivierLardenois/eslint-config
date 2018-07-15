module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true
    },
    extends: [
        '@nico29/eslint-config-core',
        'plugin:react/recommended',
    ],
    plugins: [
        'babel',
    ],
    rules: {
        'react/jsx-curly-spacing': [
            2,
            'always',
            {
                children: true,
                allowMultiline: false,
                spacing: {
                    objectLiterals: 'always',
                },
            }
        ],
        // the follwing rules are made to make eslint play nice
        // with the React.Fragment shorthand syntax
        quotes: 0,
        'babel/quotes': [1, 'single'],
    },
};
