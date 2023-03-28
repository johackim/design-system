import '@styles/roboto.css';
import { install } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';
import presetTailwindForms from '@twind/preset-tailwind-forms';

install({
    darkMode: 'class',
    presets: [
        presetAutoprefix(),
        presetTailwind(),
        presetTailwindForms(),
    ],
});

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
};

export const globalTypes = {
    darkMode: true,
};
