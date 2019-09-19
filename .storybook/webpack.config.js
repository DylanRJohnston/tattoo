module.exports = ({ config }) => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /\.tsx?$/,
        use: [
          { loader: require.resolve('awesome-typescript-loader') },
          { loader: require.resolve('react-docgen-typescript-loader') },
        ],
      },
    ],
  },
  resolve: {
    ...config.resolve,
    extensions: [...config.resolve.extensions, '.ts', '.tsx'],
  },
})
