var BowerWebpackPlugin = require("bower-webpack-plugin");
var webpack = require('webpack')
var path = require('path');

module.exports =  {
  entry: [
    './src/main.js'
  ],
  output: {
    path: "/dist/js",
    publicPath: "/dist/",
    filename: "app.js"
  },
  watch: true,
  module: {
    loaders: [
        {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
    },
      {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules|vue\/src|vue-router\//,
        loader: 'babel',
      },

      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader"
      },
            { test: /\.svgx$/, loader: "url-loader?mimetype=image/svg+xml" },
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "file"}
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  resolve: {
    root: path.resolve(__dirname),
    modulesDirectories: ['node_modules']
  },
  plugins: [new BowerWebpackPlugin()]

}
