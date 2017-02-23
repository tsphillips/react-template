var webpack = require('webpack');
var path = require('path');
var libraryName = 'bundle';
var outputFile = libraryName + '.js';
var plugins = [], outputFile;

// var BUILD_DIR = path.resolve(__dirname, 'docs');
var SRC_DIR = path.resolve(__dirname, 'src');

var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;

if (env === 'build') {
    plugins.push(new UglifyJsPlugin({ minimize: true }));
    outputFile = libraryName + '.min.js';
} else {
    outputFile = libraryName + '.js';
}

var config = {
    entry: SRC_DIR + '/app.jsx',
    output: {
        path: __dirname + '/public',
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module : {
        loaders : [
            {
                test : /\.jsx?$/,
                include : SRC_DIR,
                loader : 'babel-loader'
            },
            {
                test : /\.jsx?$/,
                include : SRC_DIR,
                loader : 'eslint-loader'
            },
        ]
    },
    plugins: plugins
};

module.exports = [ config ];
