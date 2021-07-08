const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      },

    },
    // {
    //   test: /\.ico$|\.jpe?g$|\.gif$|\.png$|\.svg$/,
    //   loader: 'file-loader?name=[name].[ext]'
    // },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
//   plugins: [new HtmlWebpackPlugin({
//     favicon: "./src/favicon.ico",
//     inject: true
// })
// ],
};
