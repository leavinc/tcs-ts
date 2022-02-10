// 引入一个包
const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  //指定文件入口
  entry: "./src/index.ts",

  // 指定打包文件的目录
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",

    // 告诉webpack不使用箭头函数
    environment: {
      arrowFunction: false,
      const:false,
    },
  },

  mode: "production",

  // 配置打包规则
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            // 配置babel
            loader: "babel-loader", // 指定加载器
            options: {
              // 设置babel
              // 设置预定义环境
              presets: [
                [
                  // 指定环境插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      chrome: "58",
                      ie: "8",
                    },
                    // 指定corejs的版本
                    corejs: "3",
                    // 使用corejs的方法 "usage"表示按需加载
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules/,
      },

      // 指定less文件处理
      {
        test:/\.less$/,
        use:[
          "style-loader",
          "css-loader",
          // 引入postcss
          {
            loader:'postcss-loader',
            options:{
              postcssOptions:{
                plugins:[
                  [
                    // 环境插件
                    "postcss-preset-env",
                    // 配置信息
                    {
                      browsers:'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          "less-loader"
        ]
      }
    ],
  },

  //
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],

  resolve: {
    extensions: [".ts", ".js"],
  },
};
