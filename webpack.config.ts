import HtmlWebpackPlugin from "html-webpack-plugin"
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin"
import { Configuration } from "webpack"

const config: Configuration = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader", options: { transpileOnly: true } },
      { test: /.css$/i, use: ["style-loader", "css-loader"] },
    ],
  },
  output: {
    filename: "bundle-[hash].js",
  },
  plugins: [new HtmlWebpackPlugin()],
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".css"],
    plugins: [new TsconfigPathsPlugin()],
  },
}

// tslint:disable-next-line:no-default-export
export default config
