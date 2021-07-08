const path = require("path");
  
module.exports = {
  entry: "./src/sample07_1.js",
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }]
    }]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "sample07_1.bundle.js"
  },
  devServer: {
    publicPath: "/dist/"
  }
};