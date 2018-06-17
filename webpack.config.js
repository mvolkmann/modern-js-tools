module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'dist/main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
      }
    ]
  },
  watch: true
};
