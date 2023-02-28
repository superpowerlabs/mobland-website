const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

// const ESLintPlugin = require("eslint-webpack-plugin");
// const { HotModuleReplacementPlugin } = require('webpack')
// new WebpackBundleAnalyzer.BundleAnalyzerPlugin(),

module.exports = merge(common, {
  mode: "development",

  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        exclude: /node_modules/,
        type: "asset/resource",
        generator: {
          outputPath: "images/",
        },
      },
    ],
  },
});
