const webpack = require('webpack');
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
const autoprefixer = require('autoprefixer');
// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || '/';
module.exports = {
   context: __dirname,
   entry: './src/index.js',
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'bundle.js',
      chunkFilename: '[id].js',
      publicPath: ASSET_PATH,
   },
   resolve: {
    extensions: ['.js', '.jsx']
   },
   devServer: {
      historyApiFallback: true
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
         },
         {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader']
         },
         {
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
         }
]
   },
   plugins: [
           // This makes it possible for us to safely use env vars on our code
      new webpack.DefinePlugin({
        'process.env.PUBLIC_URL': JSON.stringify(ASSET_PATH),
      }),
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'src/index.html' ),
         filename: 'index.html',
         inject: 'body'
      })
   ]
};