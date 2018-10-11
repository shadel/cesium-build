const CopywebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';

module.exports = {
	context: __dirname,
  mode: "development",
  entry: {
    'cesium-build': './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'cesium-build',
    libraryTarget: 'umd',
    // Needed to compile multiline strings in Cesium
    sourcePrefix: ''
  },
  amd: {
      // Enable webpack-friendly use of require in Cesium
      toUrlUndefined: true
  },
  node: {
      // Resolve node module use of fs
      fs: 'empty'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
		alias: {
			// Cesium module name
			"./cesium": path.resolve(__dirname, cesiumSource)
		}
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
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },{
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
      // Copy Cesium Assets, Widgets, and Workers to a static directory
      new CopywebpackPlugin([ { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' } ]),
      new CopywebpackPlugin([ { from: path.join(cesiumSource, 'Assets'), to: 'Assets' } ]),
      new CopywebpackPlugin([ { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' } ]),
      new CopywebpackPlugin([ { from: path.join(__dirname, 'src/cesium'), to: 'dist/src/cesium' } ]),
      new webpack.DefinePlugin({
          // Define relative base path in cesium for loading assets
          CESIUM_BASE_URL: JSON.stringify('')
      })
],
};