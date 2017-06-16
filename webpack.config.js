const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/optim8.scss',
  output: {
    filename: 'dist/optim8.bundle.css',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1',
        }),
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'dist/optim8.bundle.css',
      allChunks: true,
    }),
  ],
};
