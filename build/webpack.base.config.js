/**
 * Created by raniys on 5/24/17.
 */

const webpack = require('webpack');
const path = require('path');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

const config = {
    entry: { app: path.resolve(__dirname, '../app/index.js') }, // string | object | array
    // 这里应用程序开始执行 webpack 开始打包
    output: {
        path: path.resolve(__dirname, "../dist"), // string
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）

        filename: "[name].[chunkhash:7].bundle.js", // string
        // 「入口分块(entry chunk)」的文件名模板（出口分块？）

        pathinfo: true, // boolean
        // 在生成代码时，引入相关的模块、导出、请求等有帮助的路径信息。

        chunkFilename: "[name].[chunkhash:7].bundle.js", // 长效缓存(/guides/caching)
        // 「附加分块(additional chunk)」的文件名模板
    },
    resolve: {
        // 解析模块请求的选项
        // （不适用于对 loader 解析）

        // 使用的扩展名
        extensions: ['.js', '.vue', '.json', '.css'],

        // 用于查找模块的目录
        modules: [
            path.join(__dirname, '../node_modules')
        ]

    },
    resolveLoader: {
        modules: [
            path.join(__dirname, '../node_modules')
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ]
};

!isProd && config.plugins.push(new FriendlyErrorsPlugin());

module.exports = config;