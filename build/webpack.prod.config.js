/**
 * Created by raniys on 5/24/17.
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SWPrecachePlugin = require('sw-precache-webpack-plugin');

const srcDir = path.resolve(__dirname, '../dist/').replace(/\\/g, "\/");
const prefixMulti = {};
prefixMulti[srcDir] = '';

module.exports = {
    devtool: false,
    module: {
        rules: [{
            test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: 'static/img/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(['css-loader', 'style-loader'])
        }]
    },
    plugins: [
        new ExtractTextPlugin('static/css/[name].[hash:7].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module, count) {
                return (module.resource && /\.js$/.test(module.resource) && module.resource.indexOf('node_modules') > 0)
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({name: 'manifest', chunks: ['vendor']}),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new SWPrecachePlugin({
            cacheId: 'mmf-blog-vue2-ssr',
            filename: 'service-worker.js',
            dontCacheBustUrlsMatching: /./,
            staticFileGlobsIgnorePatterns: [/index\.html$/, /\.map$/],
            stripPrefixMulti: prefixMulti
        }),
        new HtmlWebpackPlugin({
            chunks: [
                'manifest', 'vendor', 'app',
            ],
            filename: 'index.html',
            template: 'app/template/index.html',
            inject: true,
        })
    ]
};