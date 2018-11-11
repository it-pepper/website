"use strict";

var path = require('path');
global.DEFAULT_DIR = path.join(__dirname);

var webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


// mode: development
var _outputPath = path.join(__dirname, "public", "javascripts");
var _filesEntry = {
    'index': './src/index.jsx'
};


// mode: production
var _plugins = [];
if (process.env.NODE_ENV === "production") {
    _plugins.push(new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
            output: {
                comments: false
            }
        }
    }));
}


module.exports = {
    mode: process.env.NODE_ENV,
    entry: _filesEntry,
    output: {
        filename: `[name]${process.env.NODE_ENV === "production" ? ".min" : ""}.js`,
        path: _outputPath
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['web_moodules','node_modules']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules|bin|obj)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    plugins: _plugins
};
