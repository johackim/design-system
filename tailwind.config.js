module.exports = {
    content: ['./src/components/*.js', './src/index.js'],
    darkMode: 'class',
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'), // eslint-disable-line
    ],
};
