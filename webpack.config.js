var path = require('path');
var webpack = require('webpack');

module.exports = {
 entry: './main.js',
 output: { path: __dirname, filename: 'bundle.js' },
 watch: true,

 devServer: {
  inline: true,
  port: 3333
 },

 module: {
  loaders: [
   {
    test: /.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
     presets: ['es2015', 'react']
    }
   }
  ]
 },
};﻿