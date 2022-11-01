const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.tsx', // точка входа в проект
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"// выходной бандл
},
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      exclude: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: [ "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    port: 3000,
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: 'inline-source-map'
};
