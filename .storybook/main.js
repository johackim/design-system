export default {
    stories: ['../src/**/*.stories.js'],
    addons: [
        'storybook-tailwind-dark-mode',
        'storybook-css-modules-preset',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
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
