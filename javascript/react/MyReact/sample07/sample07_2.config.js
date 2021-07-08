const path = require("path");
  
module.exports = {
  entry: "./src/sample07_2.js",
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
    filename: "sample07_2.bundle.js"
  },
  devServer: {
    publicPath: "/dist/"
  }
};