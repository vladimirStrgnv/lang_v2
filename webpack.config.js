const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, "build"),
    filename: "main.js"
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
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              esModule: false,

            }
          }
        ]
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader'
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
  resolveLoader: {
      modules: [
          path.join(__dirname, 'node_modules')
      ]
  },
  resolve: {
    extensions: [".*", ".js", ".jsx", ".ts", ".tsx", '.css', '.scss'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      favicon: path.join(__dirname, "public", "icon.svg")
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

// publicPath: './' | /
