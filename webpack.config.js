module.exports = {
  entry: "./script.js",
  output: {
    path: __dirname,
    filename: "./dist/build.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin("build.js")],
};
