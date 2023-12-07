const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");
const { env } = require("process");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": __dirname + "/src",
    },
  },
  //모듈 해석기
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        options: {
          target: "es2020",
        },
      },
      //슬라이더를 위해 아래 두개의 스타일 로더 추가
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|jpg|png|webp|svg|mp4)$/,
        type: "asset/resource",
      },
    ],
  },
  // 번들링이 완료된 결과물에 대한 설정
  output: {
    filename: "js/[name]-[chunkhash].js",
    assetModuleFilename: "asset/[hash][ext][query]",
    path: __dirname + "/dist",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new ProvidePlugin({
      React: "react",
    }),
    // 번들 분석기
    // !env.WEBPACK_SERVE
      // ? new BundleAnalyzerPlugin({
      //     analyzerMode: "static",
      //     openAnalyzer: false,
      //   })
      // : null,
  ],
  devServer: {
    historyApiFallback: true,
    static: "./dist",
    open: true,
  },
  // 소스맵 최적화
  //앞 쪽이 개발 모드용, 뒤쪽은 배포용
  devtool: env.WEBPACK_SERVE ? "eval-cheap-module-source-map" : false,
  // 빌드 캐시 최적화
  cache: {
    type: env.WEBPACK_SERVE ? "memory" : "filesystem",
  },
};
