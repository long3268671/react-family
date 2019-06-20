const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');//自动创建html文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//清除多余文件

module.exports = {
    devtool: 'inline-source-map',// 用于开发调试，方便清楚是那个文件出错 (共有7种)
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        filename: 'bundle.js', // 输出的文件名
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use:"style-loader!css-loader"
        }, {
            test: /\.scss$/,
            use:["style-loader","css-loader","sass-loader"]
            // 加载时顺序从右向左
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }, {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
            }]
    },
    plugins: [
        new CleanWebpackPlugin(),//每次编译都会把默认dist下的文件清除，新版clean-webpack-plugin 只能接受一个对象
        // new webpack.HotModuleReplacementPlugin(),  //热更新
        new HtmlWebpackPlugin({
            template: 'src/index.html' //使用一个模板
        })
    ],
    devServer: {
        contentBase: './dist',   //目录文件
        // hot: true,    //热更新
        inline: true,
        port: 9999   //端口
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src'),
        }
    }
};
