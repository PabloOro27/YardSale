// archivo de configuracion para produccion 
const { merge } = require("webpack-merge"); //se realiza el merge de las configuraciones 
const common = require("./webpack.common"); //se llama el archivo comun 

/** @type {import('webpack').Configuration} */

const prodConfig = {
    mode: "production",
};

module.exports = merge(common, prodConfig);