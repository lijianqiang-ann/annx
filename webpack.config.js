const path = require('path')
const HTMLWEBPACKPLUGIN = require('html-webpack-plugin')
module.exports = {
    entry: {
        'annx': path.join(__dirname, 'src/annx/annx.js'),
        'annx-react': path.join(__dirname, 'src/annx/annx-react.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]/index.js',
        library: '@lijianqiang01/annx',
        libraryTarget: 'umd',
    },
    resolve: {
        mainFiles: ['index.js', 'index.jsx'],
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
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ]
    },
    // plugins:
    //     [
    //         new HTMLWEBPACKPLUGIN(
    //           {
    //               template: "./public/index.html"
    //           }
    //         )
    //     ],
    devServer: {
        open: true,
        hot: true,
        port: 4324,
    },
    mode: 'production',
    devtool: 'source-map'
}
