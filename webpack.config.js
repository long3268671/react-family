const merge = require('webpack-merge');

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清除dist
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const commonConfig = require('./webpack.common.config.js');

const publicConfig = {
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                // test 表示测试什么文件类型
                test:/\.css$/,
                // 使用 'style-loader','css-loader'
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader', // 回滚
                    use:["css-loader", "postcss-loader"],
                    publicPath:'../' //解决css背景图的路径问题
                })
            },{
                test:/\.(sass|scss)$/,
                use:['style-loader','css-loader','sass-loader','postcss-loader']
            },]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin({
            filename: '[name]_[md5:contenthash:hex:8].css',
            allChunks: true
        })
    ]

};

module.exports = merge(commonConfig, publicConfig);