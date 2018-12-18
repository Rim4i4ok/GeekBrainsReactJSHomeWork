const path = require("path");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const fallbackApi = require('connect-history-api-fallback');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    index: "index.html"
  },
  entry: "./src/app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "development",
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      middleware: fallbackApi(),
      server: {baseDir: ['dist']}
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            exclude: /(node_modules)/,
            plugins: [
              // Stage 0
              "@babel/plugin-proposal-function-bind",
              // Stage 1
              "@babel/plugin-proposal-export-default-from",
              "@babel/plugin-proposal-logical-assignment-operators",
              ["@babel/plugin-proposal-optional-chaining", { loose: false }],
              [
                "@babel/plugin-proposal-pipeline-operator",
                { proposal: "minimal" }
              ],
              [
                "@babel/plugin-proposal-nullish-coalescing-operator",
                { loose: false }
              ],
              "@babel/plugin-proposal-do-expressions",
              // Stage 2
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              "@babel/plugin-proposal-function-sent",
              "@babel/plugin-proposal-export-namespace-from",
              "@babel/plugin-proposal-numeric-separator",
              "@babel/plugin-proposal-throw-expressions",
              // Stage 3
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-syntax-import-meta",
              ["@babel/plugin-proposal-class-properties", { loose: false }],
              "@babel/plugin-proposal-json-strings"
            ]
          }
        }
      }
    ]
  }
};
