import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import autoprefixer from "autoprefixer";
import path from "path";

const __dirname = process.cwd();

export default {
  entry: path.resolve(__dirname, "src/main.js"),
  devtool: "source-map",
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: path.resolve(__dirname, "static") }],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      minify: false,
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      // HTML
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },

      // SCSS
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer()],
              },
            },
          },
        ],
      },

      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["esbuild-loader"],
      },

      // Images
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: "asset/resource",
        generator: {
          fileName: "assets/images/[name].[ext]",
        },
      },

      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
        generator: {
          fileName: "assets/fonts/[name].[ext]",
        },
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, "dist"),
  },
};
