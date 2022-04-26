import '@styles/roboto.css';
import 'twind/shim';
import { withForms } from '@twind/forms'
import { setup } from 'twind';

setup({
    hash: true,
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: 'Roboto, sans-serif',
            },
        },
    },
    preflight: withForms(),
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
