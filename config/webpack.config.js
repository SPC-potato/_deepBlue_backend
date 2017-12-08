const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dir = require('./dir.config');
module.exports = {
    entry: {
        index: path.resolve(dir.ENTRY_PATH, 'index')
    },
    output: {
        path: path.resolve(dir.ROOT_PATH, 'build'),
        filename: "statics/js/[name].js"
        // publicPath: path.resolve(dir.ROOT_PATH, 'statics/js/')
    },
    plugins: [
        new ExtractTextPlugin('statics/css/[name].css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(dir.VIEW_PATH, 'backend/page/product/index.pug'),
            filename: 'backend/page/product/index.html',
            chunks: ['index']
        })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: "pug-loader",
                        options: {
                            pretty: true
                        }
                    }
                ]
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:[
                        'css-loader',
                        'stylus-loader'
                    ]
                    // ,
                    // publicPath: "../../"
                })
            },
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:[
                        {
                            loader: "css-loader"
                        }
                    ]
                })
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "statics/font/",
                            // publicPath: "../../"
                            //解决icon生成在css文件夹
                            useRelativePath: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: "statics/images/"
                        }
                    }
                ]
            }
        ]
    }
};

