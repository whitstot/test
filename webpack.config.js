var path = require('path');
//const webpack = require('webpack');

module.exports = {
  entry: './js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },


  /*




  module: {
  	rules: [
    /*
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: require.resolve('path/to/answer.js'),
        use: [
          {
            loader: 'val-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}  
          }
        ]
      },
      * /
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
	    }
      /*
	    {
        test: /\.exec\.js$/,
        use: [ 'script-loader' ]
      },
      {
        test: /\.html$/,
        use: [ "html-loader" ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      } * /
    ],
    loaders: [ /*
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.json5$/,
        loader: 'json5-loader'
      },


       * /


      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },


  */



  //"plugins": ["transform-runtime"],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080
  }
};