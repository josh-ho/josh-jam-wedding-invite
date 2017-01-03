module.exports = {
  entry: {
    main: [
      './source/main.js'
    ]
  },
  output: {
    filename: './public/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:['react']
        }
      }
    ]
  }
}
