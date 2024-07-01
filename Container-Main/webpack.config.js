const HtmlWebPackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});
module.exports = {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
    historyApiFallback:{
      index:'/public/index.html'
    },
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }
    ]
  },
  plugins: [
    htmlPlugin,
    new ModuleFederationPlugin({
      name: "Host",
      filename: "remoteEntry.js",
      remotes: {
        MicroFrontend2: "MicroFrontend2@http://localhost:3002/remoteEntry.js",
        MicroFrontend1: "MicroFrontend1@http://localhost:3001/remoteEntry.js",
      },
      exposes:{
        './Button':'./components/Button'
      }
    })
  ]
};
//"./Component01":"./src/components/Component01"
// MicroFrontend: "MicroFrontend@http://localhost:3000/remoteEntry.js"
// Checkout: "Checkout@http://localhost:3000/remoteEntry.js"