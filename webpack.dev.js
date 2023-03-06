const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const DeadCodePlugin = require("webpack-deadcode-plugin");

// const ESLintPlugin = require("eslint-webpack-plugin");
// const { HotModuleReplacementPlugin } = require('webpack')
// new WebpackBundleAnalyzer.BundleAnalyzerPlugin(),

module.exports = merge(common, {
  mode: "development",

  devtool: "inline-source-map",
  output: {
    path: __dirname + "/bundle-dev",
    publicPath: "",
    filename: "bundle.min.js",
  },
  devServer: {
    contentBase: "./bundle-dev",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp|mp4)$/,
        exclude: /node_modules/,
        type: "asset/resource",
        generator: {
          outputPath: "images/",
        },
      },
    ],
  },
  optimization: {
    usedExports: true,
  },
  plugins: [
    new DeadCodePlugin({
      patterns: ["client/**/*.(js|jsx|css)", "server/**/*.(js|jsx|css)"],
      exclude: ["**/*.(stories|spec).(js|jsx)"],
    }),
  ],
});
