import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/index.js',
    output: [
        { format: 'es', file: 'dist/esm/index.js' },
        { format: 'cjs', file: 'dist/cjs/index.js', exports: 'named' },
    ],
    external: ['react', 'react-dom', 'next/link'],
    plugins: [
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-react'],
            plugins: [
                [
                    'module-resolver',
                    {
                        alias: {
                            '@components': './src',
                            '@styles': './styles',
                        },
                    },
                ],
            ],
        }),
        commonjs(),
        postcss(),
    ],
};
