import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default [
    {
        input: './src/index.ts',
        output: {
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: true,
        },
        plugins: [
            resolve({
                preferBuiltins: true,
            }),
            commonjs(),
            typescript({
                tsconfig: './tsconfig.rollup.json', // Use the Rollup-specific tsconfig
            }),
            json(),
        ],
    },
    {
        input: './src/index.ts',
        output: {
            file: 'dist/index.d.ts',
            format: 'es',
        },
        plugins: [dts()],
    },
];
