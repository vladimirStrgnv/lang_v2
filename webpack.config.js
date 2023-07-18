const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    publicPath: '/',
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          "style-loader", 
          {
            loader: "css-loader",
            options: {
              modules: {localIdentName: "[name]__[local]___[hash:base64:5]"},              
            },
          }
          ,
          {
            loader: "sass-loader",
            options: {
              implementation: require.resolve("sass")
            },
          },
        ],
      }
    ],
  },
  resolve: {

    extensions: [".*", ".js", ".jsx", ".ts", ".tsx", '.css', '.scss']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
  },
};
