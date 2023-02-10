const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
// const WebpackBundleAnalyzer = require( "webpack-bundle-analyzer")

const { join } = require("path");
// const { HotModuleReplacementPlugin } = require('webpack')

const mode = "production";

const config = {
  entry: "./client",
  output: {
    path: __dirname + "/public/bundle",
    publicPath: "/bundle/",
    filename: "bundle.min.js",
  },
  devServer: {
    contentBase: "./dist",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new NodePolyfillPlugin(),
    new HTMLWebpackPlugin({
      favicon: false,
      showErrors: true,
      cache: true,
      template: join(__dirname, "/public/index.html"),
    }),
    new CompressionWebpackPlugin({
      algorithm: "gzip",
    }),
    // new WebpackBundleAnalyzer.BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  externals: {},
  mode,
};

module.exports = (env, argv) => {
  if (mode === "development" || argv.mode === "development") {
    config.devtool = "inline-source-map";
  }

  return config;
};
