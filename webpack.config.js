module.exports = {
  mode: "production",
  entry: {
    'react-powerbi': './src/react-powerbi.ts',
  },
  output: {
    path: __dirname + "/dist",
    filename: '[name].js',
    library: 'react-powerbi',
    libraryTarget: 'commonjs'
  },
  externals: {
    "powerbi-client": "powerbi-client",
    "react": "react"
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.map$/, loader: 'ignore-loader' },
      { test: /\.d.ts$/, loader: 'ignore-loader' },
      { test: /\.tsx?$/, exclude: /\.d.ts$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
          },
        },
      ],},
      { test: /\.json$/, loader: 'json-loader' }
    ]
  }
};