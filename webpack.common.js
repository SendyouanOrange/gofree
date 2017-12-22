const path = require('path')
const root = __dirname
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StringReplacePlugin = require('string-replace-webpack-plugin')

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|mp4|ogg|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|eot)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /semantic\.min\.css$/,
                loader: StringReplacePlugin.replace({
                    replacements: [{
                        pattern: /https\:\/\/fonts\.googleapis\.com[^)']+/ig,
                        replacement: function(match, p1, offset, string) {
                            return 'data:text/css,*{}'
                        }
                    }]
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'gofree',
            template: path.resolve(root, 'src/index.html')
        }),
        new StringReplacePlugin()
    ]
}