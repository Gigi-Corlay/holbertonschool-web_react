const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: "development",

  // entry principal
  entry: "./js/main.ts",

  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: false // IMPORTANT pour éviter les bugs silencieux
        }
      }
    ]
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true,
    port: 8080,
    hot: true,
    liveReload: true
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      title: "Development",
      template: "./index.html" // IMPORTANT si tu en as un
    }),

    new ForkTsCheckerWebpackPlugin()
  ],

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  }
};
