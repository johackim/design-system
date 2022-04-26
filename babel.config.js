module.exports = {
    presets: ['@babel/preset-react'],
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    '@components': './src/components',
                    '@styles': './styles',
                },
            },
        ],
    ],
};
