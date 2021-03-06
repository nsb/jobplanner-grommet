/// <reference path="node_modules/@types/node/index.d.ts"/>

var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );

var nodeModulesPath = path.join(__dirname, 'node_modules');
var isProduction = process.env.NODE_ENV == "production";

var config = {
  // entry points - each will produce one bundled js file and one css file if there is any css in dependency tree
  entry: {
    vendors: [
      'mobx',
      'mobx-react',
      'react',
      'react-dom',
      'react-router',
      'whatwg-fetch',
      'babel-polyfill',
       path.join(__dirname, 'babel', 'babelhelpers.js'),
       path.join(__dirname, 'babel', 'babelOldIE.js'),
    ],
    app: [
      path.join(__dirname, 'App', 'Index.tsx')
    ]
  },

  // This is path to loaders
  resolveLoader: {
    root: nodeModulesPath
  },

  resolve: {
    extensions: ['', '.tsx', '.ts', '.js', '.less', '.css', '.json'],
    modulesDirectories: ["node_modules", "resources"],
    alias: {
       'react$': path.join(nodeModulesPath, 'react', 'react.js'),
       'react-dom': path.join(nodeModulesPath, 'react-dom', 'index.js'),
       'react-router': path.join(nodeModulesPath, 'react-router', 'umd', 'ReactRouter.js'),
       'mobx': path.join(nodeModulesPath, 'mobx', 'lib', 'mobx.js'),
       'mobx-react': path.join(nodeModulesPath, 'mobx-react', 'index.js'),
       'babel-polyfill': path.join(nodeModulesPath, 'babel-polyfill', 'lib', 'index.js'),
      //  'grommet': path.join(nodeModulesPath, 'grommet', 'index.js')
    }
  },

  output: {
      path: path.join(__dirname, 'build'),
      filename: '[name]_[chunkhash].js'
  },

  module: {
    preLoaders: [
      { test: /\.tsx?$/, loader: "tslint", include: path.resolve(__dirname, "App") },
    ],
    noParse: [],
    loaders: [
      // TODO remove crazy require when https://github.com/babel/babel-loader/issues/166 is fixed.
      {
        test: /\.tsx?$/,
        loader: 'babel?cacheDirectory,plugins[]=' + require.resolve(path.join(nodeModulesPath, 'babel-plugin-external-helpers-2')) +
                ',presets[]=' + require.resolve(path.join(nodeModulesPath, 'babel-preset-es2015-loose')) +
                '!ts-loader?configFileName=tsconfig.webpack.json',
        include: path.resolve(__dirname, "App")
      },
      { test: /\.css$/,  loader: "style-loader!css-loader?minimize", include: path.resolve(__dirname, "App") },
      { test: /\.(jpg|png|woff|eot|ttf|svg|gif)$/, loader: "file-loader?name=[name]_[hash].[ext]", include: path.resolve(__dirname, "App") },
      { test: /\.json$/, loader: 'json' },
      { test: /\.scss$/, loader: 'style!css!sass?outputStyle=expanded&includePaths[]=' +
                 (encodeURIComponent(path.resolve('./node_modules')))}    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors_[chunkhash].js'),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject:   'body',
      filename: 'index.html'
    })
    // new ServiceWorkerWebpackPlugin({
    //   entry: path.join(__dirname, 'src/static/sw.js'),
    // }),
  ],

  tslint: {
    // Rules are in tslint.json
    emitErrors: true, // false = WARNING for webpack, true = ERROR for webpack
    formattersDirectory: path.join(nodeModulesPath, 'tslint-loader', 'formatters')
  },
};

if (isProduction) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
     compress: {
        warnings: false
    }
  }));
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {NODE_ENV: '"production"'}
  }));
}

module.exports = config;
