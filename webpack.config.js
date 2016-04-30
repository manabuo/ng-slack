'use strict';

let path = require('path'),
   poststylus = require('poststylus'),
   webpack = require('webpack');

module.exports = {
   context: __dirname,
   entry: {
      app: [
         'babel-polyfill',
         './app/app.js'
      ],
      'vendors': [

         'angular-animate',
         'angular-aria',
         'angular-jwt',
         'angular-sanitize',
         'bootstrap',
         'angular-ui-router',
         'core-js'
      ]
   },
   devtools: 'source-map',
   output: {
      //publicPath: '/',
      path: path.resolve(__dirname, './dist'),
      publicPath: path.resolve(__dirname, './app'),
      filename: 'bundle.js'
   },
   module: {
      preLoaders: [
         {
            test: /\.js$/,
            exclude: /node_modules/, // exclude any and all files in the node_modules folder
            loader: 'jshint-loader'
         }
      ],
      loaders: [
         {
            test: /\.js$/,
            loader: 'babel',
            exclude: [
               path.resolve(__dirname, 'node_modules')
            ],
            query: {
               presets: ['es2015', 'stage-0'],
               plugins: ['transform-decorators-legacy']
            }
         },
         {test: /\.html$/, loader: 'html', exclude: /node_modules/},
         {test: /\.css$/,  loader: 'style!css', exclude: /node_modules/},
         {test: /\.styl$/, loader: 'style!css!stylus', exclude: /node_modules/},
         {test: /\.(jpe?g|png|gif|svg)$/i, loader:'url'}
      ]
   },

   stylus: {
      use: [
         poststylus(['autoprefixer'])
      ]
   },
   plugins: [
      new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      // Limit the maximum chunk count
      new webpack.optimize.LimitChunkCountPlugin({maxChunks: 10}),
      // Limit the minimum chunk size
      new webpack.optimize.MinChunkSizePlugin({minChunkSize: 3000})
   ],
   externals: {
      angular: true,
      'core-js': true
   }
};