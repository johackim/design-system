import '@styles/globals.css';

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: {
        default: 'light',
        values: [
            {
                name: 'light',
                value: '#FFFFFF',
            },
            {
                name: 'dark',
                value: '#101821',
            },
        ],
    },
    darkMode: {
        darkClass: 'tw-dark',
        stylePreview: true,
    },
};
