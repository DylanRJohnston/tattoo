import { CheckerPlugin } from "awesome-typescript-loader"
import HtmlWebpackPlugin from "html-webpack-plugin"
import { Configuration } from "webpack"

const config: Configuration = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle-[hash].js",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".css"],
  },
  plugins: [new HtmlWebpackPlugin(), new CheckerPlugin()],
  module: {
    rules: [
      { test: /\.tsx?$/, use: "awesome-typescript-loader" },
      { test: /.css$/i, use: ["style-loader", "css-loader"] },
    ],
  },
}

export default config
