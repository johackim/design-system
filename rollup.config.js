import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/index.js',
    output: [
        { format: 'esm', file: 'dist/esm/index.js' },
    ],
    external: ['react', 'react-dom', 'next/link', 'twind', 'twind/shim', '@heroicons/react/solid'],
    plugins: [
        babel({ babelHelpers: 'bundled' }),
        postcss(),
    ],
};
