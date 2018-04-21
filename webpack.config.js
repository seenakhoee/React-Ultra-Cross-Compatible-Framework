const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
  fallback: "style-loader",
  use: ['css-loader', 'sass-loader'],
})

const cssConfig = isProd ? cssProd : cssDev

module.exports = {
  entry: './dev/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      "react-native": path.resolve(__dirname, "./src/components/"),
      "react-zeolite-styles": path.resolve(__dirname, "./src/styles/"),
      "global-styles$": path.resolve(__dirname, "./src/styles/Global.css"),
    },
    extensions: [".js", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              'transform-class-properties',
              '@babel/plugin-transform-classes',
              '@babel/plugin-proposal-object-rest-spread'
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]_[local]"
            }
          }
        ]
      }
    ]
  },
  mode: 'development',
  plugins: [
    new ExtractTextPlugin({
      filename: 'main.css',
      disable: !isProd,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      title: 'Bash Script ES6',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: './index-template.ejs'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, "build"),
    port: 3000,
    open: true,
    inline: true
  }
};