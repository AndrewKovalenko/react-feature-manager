import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';


export default {
  input: 'src/index.js',
  output: [
    {
      file: 'build/umd/react-feature-switch.js',
      name: 'react-feature-switch',
      format: 'umd',
      globals: {
        react: 'React',
        'prop-types': 'PropTypes'
      }
    },
    {
      file: 'build/module/index.js',
      format: 'es'
    }
  ],
  external: ['react', 'prop-types'],
  entry: 'src/index.js',
  watch: {
    include: 'src/**',
    clearScreen: false
  },
  plugins: [
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
    serve({
      open: true,

      // Show server address in console (default: true)
      verbose: false,

      // Multiple folders to serve from
      contentBase: ['build', 'example'],

      // Set to true to return index.html instead of 404
      historyApiFallback: false,

      // Options used in setting up server
      host: 'localhost',
      port: 10001
    }),
    livereload()
  ]
};
