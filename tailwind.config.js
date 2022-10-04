module.exports = {
    content: ['./src/components/*.js', './src/index.js'],
    darkMode: 'class',
    theme: {
        extend: {},
    },
    plugins: [
        import('@tailwindcss/forms'),
    ],
};
