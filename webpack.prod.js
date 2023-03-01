const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

// webpack compression plugin:
// https://webpack.js.org/plugins/compression-webpack-plugin/
const CompressionWebpackPlugin = require("compression-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",

  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/,
        exclude: /node_modules/,
        type: "asset",
        // generator: {
        //   outputPath: "assets/images/",
        // },
      },
    ],
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CompressionWebpackPlugin({
      algorithm: "gzip",
    }),
    new CompressionWebpackPlugin({
      algorithm: "brotliCompress",
    }),
  ],
});
