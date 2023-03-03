const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");

module.exports = {
  entry: "./client",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new NodePolyfillPlugin(),
    new HTMLWebpackPlugin({
      favicon: "./public/favicon.ico",
      showErrors: true,
      cache: true,
      template: join(__dirname, "/public/index.html"),
    }),
  ],
  externals: {},
};
