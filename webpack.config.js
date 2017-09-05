const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ENVIRONMENT = process.env.NODE_ENV || 'development'

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    'index': path.join(__dirname, 'src/index.js'),
  },
  output: {
    path: path.join(__dirname, '/public/'),
    filename: "[name].js",
    publicPath: "/public"
  },
  plugins: [
    new ExtractTextPlugin('/styles/[name].css'),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENVIRONMENT)
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-1', 'react'],
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            "sass-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: function () {
                  return [
                    autoprefixer({ browsers: ['last 2 versions'] })
                  ];
                }
              }
            }
          ]
        })
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.png/,  use: ["file-loader?name=../images/[name].[ext]"] },
      { test: /\.jpg/,  use: ["file-loader?name=../images/[name].[ext]"] },
      { test: /\.svg/,  use: ["svg-inline-loader"] }
    ]
  },
  resolve: {
    alias: {
      config: path.join(__dirname, 'config', ENVIRONMENT)
    },
    extensions: ['.js', '.jsx', '.json']
  }
};
