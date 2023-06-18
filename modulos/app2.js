// const multiplicacao = require('./mod2')

// console.log(multiplicacao(5, 2))

const path = require('path')
const dog = require('./mod2')

const c1 = new dog('Toby')

console.log(c1.latir())

// console.log(__dirname) // caminho até pasta
// console.log(__filename) // caminho até o arquivo

console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'))
