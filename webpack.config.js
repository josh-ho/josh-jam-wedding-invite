var path = require( 'path' );
var webpack = require( 'webpack' );

module.exports = {
  entry: {
    main: [
      './source/main.js'
    ]
  },
  output: {
    filename: './main.js',
    path: path.join( __dirname, 'public' ),
    publicPath: '/public/'
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join( __dirname, 'source' ),
        loader: 'react-hot!babel-loader'
      }
    ]
  }
}
