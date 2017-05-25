/**
 * Created by raniys on 5/24/17.
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');

let query = {};
if (process.env.NODE_ENV === 'production') {
    query = {
        limit: 10000,
        name: 'static/img/[name].[hash:7].[ext]'
    }
}

const config = merge(base, {
    target: 'node',
    devtool: false,
    entry: './app.js',
    output: {
        filename: 'server/server-bundle.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
            loader: 'url-loader',
            query
        }]
    },
    resolve: {
        alias: {
            '~api': path.resolve(__dirname, '../src/api/index-server'),
            'api-config': path.resolve(__dirname, '../src/api/config-server')
        }
    },
    node: {
        __dirname: true,
    },
    externals: Object.keys(require('../package.json').dependencies)
});

module.exports = config;