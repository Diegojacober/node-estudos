const fs = require('fs').promises
const path = require('path')


module.exports = (caminho, dados) => {

    const json = JSON.stringify(dados, '', 2)
    
    fs.writeFile(caminho, json, {
        encoding: 'utf-8',
        flag: 'w' // rescreve w, append a
    })
}




