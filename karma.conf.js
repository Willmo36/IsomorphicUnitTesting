var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        browsers: [ 'Chrome', "IE" ], //run in Chrome
        singleRun: true, //just run once by default
        frameworks: [ "mocha"], //use the mocha test framework
        files: [
            'test/tests.webpack.js' //just load this file
        ],
        preprocessors: {
            'test/tests.webpack.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
        },
        reporters: [ 'progress' ], //report results in this format
        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map' //just do inline source maps instead of the default
        },
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        }
    });
};