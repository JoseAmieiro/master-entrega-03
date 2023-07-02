const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");


console.log("__dirname", __dirname);
module.exports = {
    mode: "development",
    context: path.resolve(__dirname, "./src"),
    resolve: {
        extensions: [".js", ".ts"],
      },  
    entry: {
        app: ["./index.ts"],
      },
      output: {
        filename: "[name].[chunkhash].js",
        clean: true,
      },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: "asset/resource",
            },
        ],
    },
    devServer: {
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./index.html",
          filename: "index.html",
          scriptLoading: "blocking",
          hash: true,
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
            chunkFilename: "[id].css",
          }),
    ],
};