const path = require('path')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(tsx?)$/i,
        exclude: /node_modules/i,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  target: 'electron-renderer',
  output: {
    filename: 'sample-plugin.plugin.js',
    path: path.resolve(__dirname, './build/'),
    clean: true
  }
}
