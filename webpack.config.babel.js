import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const LAUNCH_COMMAND = process.env.npm_lifecycle_event

const isProduction = LAUNCH_COMMAND === 'production'
process.env.BABEL_ENV = LAUNCH_COMMAND

const PATHS = {
  public: path.join(__dirname, 'craft/templates'),
  build: path.join(__dirname, 'craft/templates'),
}

console.log(PATHS)

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: PATHS.public + '/_layout.html',
  filename: '_layout.html',
  inject: 'body'
})

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

const base = {
  entry: [
    path.join(__dirname, 'public/src/index.js')
  ],
  output: {
    path: path.join(__dirname,'public/dist/'),
    publicPath: "http://localhost:8080/dist/",
    filename: 'main.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  resolve: {
    root: path.resolve('./public'),
    modulesDirectories: ['node_modules'],
  }
}

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    hot: true,
    inline: true,
    progress: true,
  },
  plugins: [HTMLWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()]
}

const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [HTMLWebpackPluginConfig, productionPlugin]
}

export default Object.assign({}, base, isProduction === true ? productionConfig : developmentConfig)
