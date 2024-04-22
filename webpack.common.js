const path = require('path');

 const HtmlWebpackPlugin = require('html-webpack-plugin');


 module.exports = {
   entry: {
     app: './src/index.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Production',
       template: './src/index.html'
     }),
   ],
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },

        {
            test: /\.mp4$/,
            use: 'file-loader?name=videos/[name].[ext]',
        }
    ]
   }
 };