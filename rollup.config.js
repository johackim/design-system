import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'src/index.js',
    output: [
        { format: 'esm', file: 'dist/esm/index.js' },
        { format: 'cjs', file: 'dist/cjs/index.js', exports: 'named' },
    ],
    external: ['react', 'react-dom', 'next/link'],
    plugins: [
        nodeResolve(),
        babel({ babelHelpers: 'bundled' }),
        commonjs(),
        postcss(),
        terser(),
    ],
};
