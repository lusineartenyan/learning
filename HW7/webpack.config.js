const path = require('path');
const {
  NODE_ENV = 'production',
} = process.env;

    module.exports = {
        entry: './src/index.ts',
        mode: NODE_ENV,
        target: 'node',
        module: {
            rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            ],
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'main.js'
        },
        devServer: {
            static: path.join(__dirname, "dist"),
            compress: true,
            port: 4000,
        },
}