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
    ],
  },
  plugins: [
    new NodePolyfillPlugin(),
    new HTMLWebpackPlugin({
      favicon: "./public/favicon.ico",
      showErrors: true,
      cache: true,
      template: join(__dirname, "/public/index.html"),
      meta: {
        viewport: {
          name: "viewport",
          content: "width=device-width,initial-scale=1,maximum-scale=1",
        },
        description: { name: "description", content: "Mobland" },

        "og:type": { property: "og:type", content: "website" },
        "og:title": { property: "og:title", content: "Mobland" },
        "og:url": { property: "og:url", content: "https://www.mob.land" },
        "og:site_name": { property: "og:site_name", content: "Mobland" },
        "og:description": {
          property: "og:description",
          content: "A crypto-metaverse",
        },
        "og:locale": { property: "og:locale", content: "en" },
        "og:image": {
          property: "og:image",
          content: "./public/Mobland_Title_Stylized1000.webp",
        },
        "og:updated_time": {
          property: "og:updated_time",
          content: "2021-11-11T01:32:22.952Z",
        },

        "twitter:card": { name: "twitter:card", content: "Summary" },
        "twitter:title": { name: "twitter:title", content: "Mobland" },
        "twitter:description": {
          name: "twitter:description",
          content: "Mobland",
        },
        "twitter:site": { name: "twitter:site", content: "@MobLandHQ" },
        "twitter:image": {
          name: "twitter:image",
          content: "./public/Mobland_Title_Stylized1000.webp",
        },
      },
    }),
  ],
  externals: {},
};
