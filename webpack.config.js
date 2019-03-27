const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './app/javascripts/app.js',
    borrower: './app/javascripts/borrower.js',
    lender: './app/javascripts/lender.js',
    verify: './app/javascripts/verify.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  plugins: [
    // Copy our app's index.html to the build folder.
   
    new CopyWebpackPlugin([
      { from: './app/index.html', to: "index.html" },
      { from: './app/borrower.html', to: "borrower.html" },
      { from: './app/lender.html', to: "lender.html" },
      { from: './app/verify.html', to: "verify.html" },
      { from: '/home/gaurav/WeLend-master/images/*', to: './' },
    ])
    ],    
  module: {
    rules: [
      {
       test: /\.css$/,
       use: [ 'style-loader', 'css-loader' ]
      }
    ],
    loaders: [
      { test: /\.json$/, use: 'json-loader' },
      { test: /\.png$/, use: 'file-loader' },
      {
        test: /\.(png|jp(e*)g|gif)$/,
        exclude: /node_modules/,
        use: [{ 
          loader: 'url-loader',
          options: {
            limit: 10000,
            publicPath: "/"
          }
        }]
      },

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  },

  devServer: {
    compress: true,
    disableHostCheck: true
  }
}
