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
    port: 3001,
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
      name: "MicroFrontend1",
      filename: "remoteEntry.js",
      remotes:{
        HostComponent:"Host@http://localhost:3000/remoteEntry.js"

      },
      exposes:{
        './Component01':'./components/Component01',
        './Component02':'./components/Component02'
      },
    })
  ]
};
//"./Component01":"./src/components/Component01"
// MicroFrontend: "MicroFrontend@http://localhost:3000/remoteEntry.js"
// Checkout: "Checkout@http://localhost:3000/remoteEntry.js"