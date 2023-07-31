export default {
    stories: ['../src/**/*.stories.js'],
    addons: [
        'storybook-tailwind-dark-mode',
        'storybook-css-modules-preset',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    staticDirs: ['../public'],
    docs: {
        autodocs: true,
    },
};
