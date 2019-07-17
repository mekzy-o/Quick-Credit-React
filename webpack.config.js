const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist' ),
        filename: 'index_bundle.js'
    },
    //For transforming our JSX and ES6 into normal JS
    module : {
        rules: [{test:/\.(js)$/, use: 'babel-loader'},
        {test:/\.css$/, use: ['style-loader', 'css-loader']}
    ]
    },
    mode: 'development',

    plugins: [
        new HTMLWebpackPlugin({
            template: __dirname + './app/index.html',
            filename: index.html
        })
    ]
}