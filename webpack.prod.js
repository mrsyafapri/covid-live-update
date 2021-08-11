/* eslint-disable no-undef */
const {
    merge
} = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [{
            test: /\.js$/,
            exclude: "/node_modules/",
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                },
            }, ],
        }, ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            favicon: './src/images/coronavirus.png',
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        splitChunks: {
            chunks: "async",
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
});