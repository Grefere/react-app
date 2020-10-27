const HtmlWebpackPlugin = require('html-webpack-plugin');
const {DefinePlugin} = require('webpack');
const path = require('path');

module.exports = {
    mode: 'none',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.scss'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@models': path.resolve(__dirname, 'src/models/'),
            '@queries': path.resolve(__dirname, 'src/queries/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@talons': path.resolve(__dirname, 'src/talons/')
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new DefinePlugin({
            GITHUB_TOKEN: JSON.stringify(process.env.GITHUB_TOKEN),
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ]
};
