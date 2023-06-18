const nome = 'Diego'
const sobrenome = 'Alencar Jacober'

// const sayName = () => {
//    return `${nome} ${sobrenome}`
// }

// // module.exports.nome = nome
// // module.exports.sobrenome = sobrenome
// // module.exports.sayName = sayName

// exports.nome = nome
// exports.sobrenome = sobrenome
// exports.sayName = sayName
// this.qualquerCoisa = 'Qualquer coisa para exportar'

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}

exports.Pessoa = Pessoa

module.exports = {
    nome, sobrenome, Pessoa
}
