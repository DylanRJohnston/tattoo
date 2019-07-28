import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
  entry: './src/app.tsx',
  output: {
    filename: 'bundle-[hash].js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader' }
    ]
  }
}

export default config;