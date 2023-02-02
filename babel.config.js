module.exports = {
    presets: ['@babel/preset-react'],
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    '@atoms': './src/atoms',
                    '@molecules': './src/molecules',
                    '@organisms': './src/organisms',
                    '@templates': './src/templates',
                    '@styles': './styles',
                },
            },
        ],
    ],
};
