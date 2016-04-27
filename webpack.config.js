var BowerWebpackPlugin = require("bower-webpack-plugin");
var webpack = require('webpack')

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
          'url-loader',
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
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.styl$/,
        loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
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
    modulesDirectories: ['node_modules']
  },
  plugins: [new BowerWebpackPlugin()]

}
