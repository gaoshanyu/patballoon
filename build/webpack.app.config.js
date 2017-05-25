/**
 * Created by raniys on 5/24/17.
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');
const devConfig = require('./webpack.dev.config');
const prodConfig = require('./webpack.prod.config');
const vueConfig = require('./vue-loader.config');

let config = merge(baseConfig, {
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: vueConfig
        }]
    }
});

if (process.env.NODE_ENV === 'production') {
    config = merge(config, prodConfig)
} else {
    config = merge(config, devConfig)
}

module.exports = config;