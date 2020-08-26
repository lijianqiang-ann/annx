const path = require('path')
const HTMLWEBPACKPLUGIN = require('html-webpack-plugin')
module.exports = {
    entry: path.join(__dirname, 'src/root.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'lib/lib-[hash:5].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
        ]
    },
    plugins: [
        new HTMLWEBPACKPLUGIN(
            {
                template: "./public/index.html"
            }
        )
    ],
    devServer: {
        open: true,
        hot: true,
        port: 4324,
    },
    mode: 'development'
}
