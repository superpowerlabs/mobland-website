const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

// webpack compression plugin:
// https://webpack.js.org/plugins/compression-webpack-plugin/
const CompressionWebpackPlugin = require("compression-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",

  devtool: "source-map",
  output: {
    path: path.join(__dirname, "/bundle0"),
    publicPath: "/",
    filename: "bundle.min.[fullhash].js",
  },
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
      {
        test: /\.(mp4)$/,
        exclude: /node_modules/,
        type: "asset",
        // generator: {
        //   outputPath: "assets/videos/",
        // },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        exclude: /node_modules/,
        // generator: {
        //   outputPath: "assets/fonts/",
        // },
      },
    ],
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // filename: "assets/css/[name].[contenthash].css",
    }),
    new CompressionWebpackPlugin({
      deleteOriginalAssets: true,
      test: /\.(js|css|html|webp|ttf|mp4)$/,
      algorithm: "gzip",
    }),
    new CompressionWebpackPlugin({
      deleteOriginalAssets: true,
      test: /\.(js|css|html|webp|ttf|mp4)$/,
      algorithm: "brotliCompress",
    }),
  ],
});
