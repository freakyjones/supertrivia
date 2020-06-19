const path=require('path')
const html_plugin=require('html-webpack-plugin')
module.exports={
    mode:"development",
    entry:"./src/index.js",
    output:{
        path:path.join(__dirname,'dist'),
        filename:"index_bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env','@babel/preset-react']
              }
            }
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  // bypassOnDebug: true, // webpack@1.x
                  disable: true, // webpack@2.x and newer
                },
              },
            ],
          }
        ]
      },

      plugins: [new html_plugin({template:'./src/index.html'})]
      ,
      devServer: {
        historyApiFallback: true
      }
      
}