/*
See https://webpack.js.org/concepts/
*/
var webpack = require('webpack');
var path = require('path');

var CLIENT_BUILD_DIR = path.resolve(__dirname, 'public');
var CLIENT_SRC_DIR = path.resolve(__dirname, 'src/client');

var clientConfig = {
    entry: CLIENT_SRC_DIR + '/app.jsx',
    output: {
        path: CLIENT_BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : CLIENT_SRC_DIR,
                loader : 'babel-loader'
            }
        ]
    }
};

module.exports = [ clientConfig ];

