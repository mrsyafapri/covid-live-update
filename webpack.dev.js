/* eslint-disable no-undef */
const {
    merge
} = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            favicon: './src/images/coronavirus.png',
        })
    ],
    devServer: {
        contentBase: './dist',
    },
    optimization: {
        minimize: true
    }
})