const path = require('path');

module.exports = {
    stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        'storybook-dark-mode',
        'storybook-css-modules-preset',
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    framework: "@storybook/react",
    webpackFinal: async (config, { configType }) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@components': path.resolve(__dirname, "../src/components"),
            '@styles': path.resolve(__dirname, "../styles"),
        };
        return config;
    },
    staticDirs: ['../public'],
};
