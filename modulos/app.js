const modulo1 = require('./mod1')
// const name = modulo1.nome
// const { nome, sobrenome } = require('./mod1') 
// const sayName = require('./mod1').sayName

// console.log(sayName())

const path = require('path')
const axios = require('axios')
const { Pessoa } = require('./mod1')

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response))
    .catch(e => console.log(e))

const p1 = new Pessoa('Diego')
console.log(p1)
