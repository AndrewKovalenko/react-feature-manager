import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import replace from 'rollup-plugin-replace';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  input: 'example/js/index.jsx',
  output: [
    {
      file: 'public/js/example.js',
      format: 'iife'
    }
  ],
  watch: {
    include: ['example/**', 'build/**'],
    clearScreen: false
  },
  plugins: [
    sourcemaps(),
    resolve({
      extensions: ['.js', '.json', '.jsx']
    }),
    commonjs({
      namedExports: {
        'node_modules/react/index.js': ['Children', 'Component'],
        'node_modules/prop-types/index.js': ['PropTypes']
      }
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    serve({
      open: true,
      verbose: true,
      contentBase: 'public',
      historyApiFallback: false,
      host: 'localhost',
      port: 10001
    }),
    livereload()
  ]
};
