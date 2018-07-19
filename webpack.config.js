const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const UglifyJsPlugin       = require( 'uglifyjs-webpack-plugin' );
const webpack              = require( 'webpack' );

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: { 
                        dead_code: true,
                        conditionals: true,
                        evaluate: true,
                        unsafe: true,
                        unsafe_comps: true,
                        unused: true
                    },
                    output: {
                        comments: false,
                        beautify: false
                    },
                    ie8: false,
                    toplevel: false
                }
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: "[local]__[name]__[hash:base64:5]"
                        }
                    }
                ]
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build/public'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify( 'production' )
            }
        })
    ]
}