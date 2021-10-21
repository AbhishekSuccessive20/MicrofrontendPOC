const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = {
    mode: "development",
    output: { publicPath: "http://localhost:3000/" },
    devServer: {
        port: 3000
    },
    resolve: {
        extensions: ['.ts', '.js', '.jsx'],
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
    plugins: [
        new ModuleFederationPlugin({
            name: "crud_remote",
            filename: "remoteEntry.js",
            exposes: {
                './App': "./src/App"
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