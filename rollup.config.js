import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'build/umd/react-manage-features.js',
      name: 'react-feature',
      format: 'umd'
    },
    {
      file: 'build/module/index.js',
      format: 'es'
    }
  ],
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
    })
  ]
};
