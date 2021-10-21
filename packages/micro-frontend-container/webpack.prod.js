const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
      },
    plugins: [
        new ModuleFederationPlugin({
            name: "app_container",
            remotes: {
                login_remote: `login_remote@${domain}/login_remote/remoteEntry.js`,
                crud_remote: `crud_remote@${domain}/crud_remote/remoteEntry.js`
            },
            shared: {
                ...deps,
                react: {
                  singleton: true,
                  eager: true,
                  requiredVersion: deps.react,
                },
                "react-dom": {
                  singleton: true,
                  eager: true,
                  requiredVersion: deps["react-dom"],
                },
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}
