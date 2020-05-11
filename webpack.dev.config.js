const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    devtool: 'inline-source-map',
    mode:'development',
    /*入口*/
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ]
    },

    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        filename: '[name].[hash].js',
    },
    // 别名
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },
    /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
    /*cacheDirectory是用来缓存编译结果，下次编译加速*/
    module: {
        rules: [
            {
                /**加载css scss**/
                test: [/\.css$/,/\.scss$/],
                use: ['style-loader', 'css-loader', 'sass-loader','postcss-loader']
            }]
    },
    /**
     * @port 端口号
     * @contentBase 启动路径
     * @historyApiFallback 让所有的404定位到index.html（如页面打开是http://localhost:8080/page1,刷新页面 页面404
     *  原因在于dist没有page1.html文件 所以重定向http://localhost:8080/page1/index.html）
     * @host  外部访问地址
     * @proxy  代理
     * **/
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        // host: '10.10.3.106'
        proxy: {
            "/api": "http://localhost:3000"
        }
    },
    plugins:[
        new webpack.DefinePlugin({
            MOCK: true
        })
    ]
};
module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);