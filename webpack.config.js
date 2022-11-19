const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    about: './src/about.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
            {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};