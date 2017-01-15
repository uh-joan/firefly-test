var webpack = require('webpack');

var config = {
    context: __dirname + '/app',
    entry: './index.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    plugins:[
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['ng-annotate', 'babel?presets[]=es2015'],
                exclude: /node_modules/
            },
            { test: /\.html$/, loader: 'html', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.sass$/, loader: 'style!css!sass' },
            { test: /\.svg$/, loader: "file" }
            //{ test: /\.svg$/, loader: "file?name=[path][name].[ext]&context=./app/assets" }
        ]
    }
};

if (process.env.NODE_ENV === 'production'){
    var path = require("path");
    config.output.path = path.resolve(__dirname, "dist");
    //config.output.publicPath =  '/assets/';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));
    config.devtool = 'source-map';
}

module.exports = config;