var webpack = require("webpack")

module.exports = {
    entry: "./src/NumericInput.jsx",
    output: {
        path         : "./dist",
        filename     : "react-numeric-input.min.js",
        libraryTarget: "umd"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loaders: [
                    "babel?presets[]=es2015&presets[]=stage-0&presets[]=react"
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    externals : {
        "react": "React"
    },
    resolve : {
        extensions : [ "", ".jsx", ".js" ]
    }
};
