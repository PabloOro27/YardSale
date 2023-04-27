// archivo de configuracion para desarrollo
// archivo de configuracion para produccion 
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

/** @type {import('webpack').Configuration} */

const devConfig = {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 8080,
    compress: true,
    open: true,
    historyApiFallback: true,
  },
};

module.exports = merge(common, devConfig);