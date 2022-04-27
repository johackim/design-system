import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'src/index.js',
    output: [
        { format: 'esm', file: 'dist/esm/index.js' },
    ],
    external: ['react', 'react-dom', 'next/link'],
    plugins: [
        nodeResolve(),
        babel({ babelHelpers: 'bundled' }),
        postcss(),
    ],
};
