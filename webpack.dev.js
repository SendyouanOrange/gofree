const path = require('path')
const root = __dirname
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StringReplacePlugin = require('string-replace-webpack-plugin')

module.exports = {
    entry: [
        'react-hot-loader/patch', // 激活HMR
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
        path.resolve(root, 'src/index.js')
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(root, 'dist'),
        publicPath: '/'
    },
    devServer: {
        hot: true, // 激活服务器的HMR
        contentBase: './src/',
        compress: true,
        publicPath: '/',
        port: 8000,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
        alias: {
            components: `src/components/`,
            styles: `src/styles/`,
            'react/lib/ReactMount': 'react-dom/lib/ReactMount'
        }
    },
    // loaders
    module: {
        rules: [
            {
                test: /\.jsx?$/,
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
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
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
                        pattern: /https\:\/\/fonts\.googleapis\.com/ig,
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
        new StringReplacePlugin(),
        new webpack.HotModuleReplacementPlugin(), // 热替换插件
        new webpack.NamedModulesPlugin() // 执行热替换时打印模块名字
    ]
}