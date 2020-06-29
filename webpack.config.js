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
                options:{
                  name:"[name].[hash].[ext]",
                  outputPath:"imgs"
                }
              },
            ],
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.html$/i,
            use: ["html-loader"],
          }

        ]
      },

      plugins: [new html_plugin({template:'./src/index.html'})]
      ,
      devServer: {
        historyApiFallback: true
      }
      
}