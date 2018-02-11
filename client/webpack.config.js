const webpack = require("webpack");
const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        "index": "./src/pages/index.jsx"
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },

    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/template.html'
        })
    ]
};

module.exports = config;