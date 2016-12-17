/// <reference path="node_modules/@types/node/index.d.ts"/>

// This config is extented from webpack.config.js. We use it for development with webpack-dev-server and autoreload/refresh

var webpack = require('webpack');
var { Config } = require('webpack-config');
var path = require("path");
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );

var mainConfig = new Config().extend("webpack.config");

var devConfigExtension = {
  entry: {
      app: [
        // We are using next two entries for hot-reload
        'webpack-dev-server/client?http://localhost:3333',
        'webpack/hot/only-dev-server',
      ].concat(mainConfig.entry.app)
  },

  resolve: {
    alias: mainConfig.resolve.alias
  },

  // more options here: http://webpack.github.io/docs/configuration.html#devtool
  devtool: 'eval-source-map',

  watch: true,

  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ['react-hot', 'babel?presets[]=es2015-loose', 'ts-loader?configFileName=tsconfig.webpack.json'], include: path.resolve(__dirname, "App") },
      { test: /\.css$/, exclude: /\.import\.css$/,  loader: "style!css", include: path.resolve(__dirname, "App") },
      { test: /\.import\.css$/,  loader: "style!css", include: path.resolve(__dirname, "App") },
      { test: /\.less$/, exclude: /\.module\.less$/, loader: "style!css!less", include: path.resolve(__dirname, "App") },
      { test: /\.module\.less$/, loader: "style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!less", include: path.resolve(__dirname, "App") },
      { test: /\.(jpg|png|jpg|png|woff|eot|ttf|svg|gif)$/, loader: "file-loader?name=[name].[ext]" },
      { test: /\.json$/, loader: 'json' }
    ]
  },

   plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject:   'body',
      filename: 'index.html'
    }),
    // Used for hot-reload
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

mainConfig.module.loaders = [];
mainConfig.resolve.alias = {};
mainConfig.plugins = [];

module.exports = mainConfig.merge(devConfigExtension);
