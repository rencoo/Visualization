'use strict'
const path = require('path')

module.exports = {
    mode: 'production',
    entry: ['./src/main.js',],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test:/\.css$/, 
                loader: 'style-loader!css-loader'
            },
        ]
    }
}