var HTMLWebpakPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpakPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: __dirname + '/src/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['latest', 'stage-0', 'react']
        }
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      },
      {
    		test: /\.css$/,
    		loader: 'style-loader!css-loader!autoprefixer-loader'
    	},
    	{
    		test: /\.scss$/,
    		loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
    	}
    ]
  },
  output: {
    filename: 'transformed.js',
    path: __dirname + '/build'
  },
  plugins: [HTMLWebpackPluginConfig]
};
