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
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules|vue\/src|vue-router\//,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader"
      },
      {test: require.resolve('jquery'), loader: 'expose?jQuery'},
            { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
            { test: /\.svgx$/, loader: "url-loader?mimetype=image/svg+xml" },
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff2"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
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
