const path = require('path');

module.exports = {
  entry: ['./src/main.js', './src/toggleModal.js', './src/addTask.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Creates style nodes from JS strings
          'css-loader', // Translates CSS into CommonJS
          'sass-loader', // Compiles Sass to CSS
        ],
      },
    ],
  },
};
