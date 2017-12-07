
var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
console.log(__dirname)
module.exports = {
    context: __dirname + "/src",
    entry: {
        login: ["./index.js"], // 为了将来的多入口写法
    },
    devtool: "source-map", // 为了可以在控制台跟踪到自己的代码位置，精确到行
    output: {
        path: path.resolve(__dirname, "/builds"), // 输出目录
        filename: "[name].bundle.js", // 输出文件名
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader?cacheDirectory=true'
            }
        },
            {
                test: /\.(sass|scss|css)$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "sass-loader", "postcss-loader"]
                })

            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: 'index.css'
        }),
    ],

    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css', '.sass'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname, './src')
        ]
    },
    devServer: {             // 打包加自动刷新，webpack-dev-server --hot 可以自动热替换，，，虽然我并没有感觉到有多快。。。
        contentBase: path.resolve(__dirname),
        host: '127.0.0.1',
        port: 3000,
        inline: true,
        historyApiFallback: true
    }
}

