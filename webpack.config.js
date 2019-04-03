const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")
var path = require("path")
module.exports = {
	output: {
    	path: path.join(__dirname,'/dist'),
    	filename: 'main.js'
    },
	module: {
		rules: [
			{
				test:/\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: {
					loader: "html-loader",
					options: { minimize: true }
				}
			},
			{
				test: /\.css$/,
				use: [MiniCSSExtractPlugin.loader, "css-loader"]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		}),
		new MiniCSSExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	]
};