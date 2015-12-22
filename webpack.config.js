
var webpack = require('webpack');


var config = {

    entry:{
        app: "./index.js",
        vendor: [ "jquery", 'lodash', 'moment', 'bootstrap-webpack',

            './node_modules/jquery.inputmask/dist/inputmask/jquery.inputmask.js',
            './node_modules/jquery.inputmask/dist/inputmask/jquery.inputmask.date.extensions.js',
            './node_modules/jquery.inputmask/dist/inputmask/jquery.inputmask.numeric.extensions.js'
            ]
    },
    devtool: "source-map",
    output: {
        path: "./public/vendor",
        filename: "bundle.js"
    },
    plugins:[
        //new webpack.optimize.CommonsChunkPlugin("vendor.bundle.js"),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename:"vendor.bundle.js",
            minChunks: Infinity
        }),
        new webpack.ProvidePlugin({
            $               : 'jquery',
            jQuery          : 'jquery',
            'window.jQuery' : 'jquery',
            '_'             : 'lodash',
            'moment'        : 'moment',
            'inputmask'     : 'inputmask',
            'inputmask.date': 'inputmask.date'
        })
    ],
    resolve: {

        alias: {
            'inputmask'             : './node_modules/jquery.inputmask/dist/inputmask/jquery.inputmask.js',
            'inputmask.date'        : './node_modules/jquery.inputmask/dist/inputmask/jquery.inputmask.date.extensions.js',
            'inputmask.dependencyLib'   : './node_modules/jquery.inputmask/dist/inputmask/jquery.inputmask.numeric.extensions.js'

        }
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
            //{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    node: {
        fs: "empty"
    }
};

module.exports = config;
