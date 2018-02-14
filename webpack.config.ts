import * as webpack from 'webpack';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';

const config: webpack.Configuration = {
  entry: {
    'belair': './src/themes/belair/styles.scss',
    'intact': './src/themes/intact/styles.scss'
  },
  output: {
    filename: '[name].xyz',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {test: /\.scss/, use: ExtractTextPlugin.extract({
        use: [{
            loader: 'css-loader'
        }, {
            loader: 'sass-loader'
        }],
        // use style-loader in development
        fallback: 'style-loader'
    })}
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      disable: process.env.NODE_ENV === 'development'
    })
  ]
};

export default config;
