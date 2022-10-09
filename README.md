# text-file-webpack-plugin

A very simple webpack plugin for injecting a new file into your build directory. 

## Install

    npm i --save-dev text-file-webpack-plugin

## Usage

**webpack.config.js**

    const path = require('path');
    const TextFileWebpackPlugin = require('text-file-webpack-plugin');

    module.exports = {
      entry: './index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
      },
      plugins: [
        new TextFileWebpackPlugin({
          filename: 'CNAME',
          text: 'google.com'
        })
      ]
    };
