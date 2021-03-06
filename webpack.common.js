const HtmlWebpackPlugin = require('html-webpack-plugin')

// Base configuration used in both production and during development.
module.exports = {
    entry: {
        app: ['@babel/polyfill', './src/index.js'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [{ loader: 'babel-loader' }],
                exclude: /node_modules/,
            },
            {
                test: /\.webapp$/,
                loader: 'json-loader',
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: [
                    /\.bmp$/,
                    /\.gif$/,
                    /\.jpe?g$/,
                    /\.png$/,
                    /\.(png|woff|woff2|eot|ttf|svg)$/,
                ],
                loader: require.resolve('file-loader'),
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'AMR analytical tool',
            filename: 'index.html',
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
        }),
    ],
}
