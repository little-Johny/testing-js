module.exports = {
    extends: ['airbnb-base'],
    env: {
        node: true,
        jest: true,
    },
    rules: {
        indent: ['error', 4], // si prefieres 4 espacios
        'no-console': 'off',
        'quote-props': 'off',
        'object-curly-newline': 'off',
        'no-restricted-syntax': 'off',
        'import/no-extraneous-dependencies': 'off',
    },
};
