/**
 * Created by rqzheng on 2017/2/7.
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const bundleConfig = require("../dist/config/bundle-config.json");

module.exports = {
    entry: {
        main: './src/js/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(process.cwd(), 'dist')
    },
    /*resolve: {
     modules: [path.resolve(__dirname, 'node_modules')]
     },*/
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url?limit=8192&context=client&name=[path][name].[ext]'
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                /*include: path.resolve(__dirname, 'src/css'),*/
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {}
                }]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                /*include: path.resolve(__dirname, 'src/css'),*/
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {}
                }, {
                    loader: "postcss-loader", options: {}
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            },

            /* {
             test: /\.css$/,
             exclude: /node_modules/,
             include: path.resolve(__dirname, 'src/css'),
             loader: 'style-loader!css-loader?sourceMap'
             },*/
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader?cacheDirectory',
                exclude: /node_modules/,
                /*include: path.resolve(__dirname, 'src/js')*/
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        port: 9000,
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../dist/config/manifest.json'),
        }),
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            filename: 'index.html',
            bundleName: bundleConfig.dll.js,
        }),
        /*  new webpack.optimize.CommonsChunkPlugin({
         name: 'vendor', // Specify the common bundle's name.
         minChunks: function (module) {
         // this assumes your vendor imports exist in the node_modules directory
         return module.context && module.context.indexOf('node_modules') !== -1;
         }
         }),*/

        //全局变量定义
        new webpack.DefinePlugin({
            // 全局debug标识
            __DEV__: 'debug',
        }),

    ]
};