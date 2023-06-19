//chamando um modulo chamado path
const path = require('path') // CommonJS

// objeto com a configuraçõ do webpack
module.exports = {
    mode: 'development', // ou production
    entry: './frontend/main.js', // arquivo de entrada
    output: {
        path: path.resolve(__dirname,'public','assets','js'),
        filename: 'bundle.js'
    }, //arquivo de saida
    module: {
        rules: [{
            exclude: '/node_modules/',
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map' //faz o mapeamento
}