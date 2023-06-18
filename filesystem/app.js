const path = require('path')
const filePath = path.resolve(__dirname, 'test.json')
const write = require('./modules/write')
const read = require('./modules/read')


// const pessoas = [
//     { nome: 'João' },
//     { nome: 'Maria' },
//     { nome: 'Diego' },
//     { nome: 'Luisa' },
// ]

// write(filePath, pessoas)

async function readFile(path) {
    const data = await read(path)
    return data
}

const fileData = readFile(filePath)
.then((data) => console.log(data))
.catch((e) => console.log(e))



