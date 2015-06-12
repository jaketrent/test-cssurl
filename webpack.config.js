module.exports = {
  entry: [
    './index.css'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'main.css'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'css' },
      { test: /\.jpg/, loader: 'file' }
    ]
  }
}