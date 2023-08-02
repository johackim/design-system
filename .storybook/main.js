export default {
    stories: ['../src/**/*.stories.js'],
    addons: [
        'storybook-tailwind-dark-mode',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-styling',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    staticDirs: ['../public'],
    docs: {
        autodocs: true,
    },
};
