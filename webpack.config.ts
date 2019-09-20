import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CheckerPlugin } from 'awesome-typescript-loader'

const config: Configuration = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle-[hash].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [new HtmlWebpackPlugin(), new CheckerPlugin()],
  module: {
    rules: [{ test: /\.tsx?$/, use: 'awesome-typescript-loader' }],
  },
}

export default config
