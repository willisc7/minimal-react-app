const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: [
                    {
                      loader: 'babel-loader',
                    }
                  ],
            },
        ],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
      },
    
};
