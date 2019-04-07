const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    resolve: {
        alias: {
            "vue": "vue/dist/vue.esm.js"
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ] 
}