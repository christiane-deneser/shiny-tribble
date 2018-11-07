const path = require( 'path' );
module.exports = {
  parser: 'sugarss',
  plugins: {
    'postcss-smart-import': {
      path: [ path.resolve( __dirname, 'src/css/' ) ],
    },
    'postcss-import': {},
    'postcss-preset-env': {},
    'cssnano': {},
    'autoprefixer': true
  }
};
