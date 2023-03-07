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
    path: __dirname + "/bundle",
    publicPath: "",
    filename: "bundle.min.js",
  },
  devServer: {
    contentBase: "./bundle",
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
        // generator: {
        //   outputPath: "images/",
        // },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        exclude: /node_modules/,
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
