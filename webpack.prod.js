const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

// webpack compression plugin:
// https://webpack.js.org/plugins/compression-webpack-plugin/
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

const PATHS = {
  client: path.join(__dirname, "client"),
  public: path.join(__dirname, "public"),
};

module.exports = merge(common, {
  mode: "production",

  devtool: "source-map",
  output: {
    path: path.join(__dirname, "/bundle"),
    publicPath: "",
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
      filename: "purge.css",
    }),
    new PurgeCSSPlugin({
      ///pass the paths for where the js, css and html files are
      paths: glob.sync([`${PATHS.client}/**/*`, `${PATHS.public}/**/*`], {
        nodir: true,
      }),
    }),
    new CompressionWebpackPlugin({
      // deleteOriginalAssets: true,
      test: /\.(js|css|html|webp|ttf|mp4)$/,
      algorithm: "gzip",
    }),
    new CompressionWebpackPlugin({
      // deleteOriginalAssets: true,
      test: /\.(js|css|html|webp|ttf|mp4)$/,
      algorithm: "brotliCompress",
    }),
  ],
});
