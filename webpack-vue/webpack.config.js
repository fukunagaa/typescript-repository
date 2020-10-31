const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",
  entry: {
    app: path.join(__dirname, "src", "index.ts"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/assets",
  },
  // import 文で .ts ファイルを解決するため
  // これを定義しないと import 文で拡張子を書く必要が生まれる。
  resolve: {
    extensions: [".ts", ".js", ".vue"],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    index: "index.html",
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // 配列の後ろから順に適用
            // preset-env はデフォルト es5 で出力する
            presets: ["@babel/preset-env", "@babel/typescript"],
          },
        },

        // ローダーの処理対象から外すディレクトリ
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader",
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ["vue-style-loader", "style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ["web", "es5"],
};
