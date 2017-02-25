/**
 * Created by rqzheng on 2017/2/7.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const bundleConfig = require("../dist/config/bundle-config.json");

module.exports = {
    entry: {
        main: './src/js/index.js',
    },
    output: {
        filename: '[name].[chunkhash:6].js',
        path: path.resolve(process.cwd(), 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url?limit=8192&context=client&name=[path][name].[ext]'
            },
            //处理node_modules下的ant design的css引用
            {
                test: /\.css$/,
                include: /node_modules/,
                /*include: path.resolve(__dirname, 'src/css'),*/
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader", options: {}
                    }]
                })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                /*include: path.resolve(__dirname, 'src/css'),*/
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader", options: {}
                    }, {
                        loader: "postcss-loader", options: {}
                    }, {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    }]
                })
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader?cacheDirectory',
                exclude: /node_modules/,
                /*include: path.resolve(__dirname, 'src/js')*/
            }
        ]
    },
    devtool: 'cheap-module-source-map',

    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../dist/config/manifest.json'),
        }),
        new webpack.HashedModuleIdsPlugin(),
        //混淆JS
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true,
                // 在UglifyJs删除没有用到的代码时不输出警告
                warnings: false,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true,
                // 删除所有的 `console` 语句
                // 还可以兼容ie浏览器
                drop_console: true,
            },
            //删掉所有的注释
            comments: false,
            sourceMap: true
        }),
        //loader最小化代码（从uglifyJSPlugin中转移出来的配置项，与webpack v1不同）
        /* new webpack.LoaderOptionsPlugin({
         minimize: true,
         debug: false
         }),*/
        //定义变量名替换
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        //CSS打包成分离文件，不打包在js文件里面
        new ExtractTextPlugin({filename: '[name].[contenthash].css', disable: false, allChunks: true}),
        //生成html文件
        new HtmlWebpackPlugin({
            template: './src/html/index.prod.html',
            filename: 'index.html',
            bundleName: bundleConfig.dll.js,
        }),
        /*new webpack.optimize.CommonsChunkPlugin({
         name: 'vendor', // Specify the common bundle's name.
         minChunks: function (module) {
         // this assumes your vendor imports exist in the node_modules directory
         return module.context && module.context.indexOf('node_modules') !== -1;
         }
         }),*/

    ]
};