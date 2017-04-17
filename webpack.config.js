module.exports = {
  entry: './public/js/main-app.js',
  output:{
    path: __dirname + '/public/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
        inline: false,
        contentBase: "./dist",
    },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  watch: true
}