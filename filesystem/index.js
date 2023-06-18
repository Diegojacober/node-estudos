const fs = require('fs').promises
const path = require('path')

async function readdir(rootDir = path.resolve(__dirname)) {
    const files = await fs.readdir(rootDir)
    walk(files, rootDir)
}

async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath)

        if (/\.git/g.test(fileFullPath) || /node_modules/g.test(fileFullPath)) continue;

        if (stats.isDirectory()) {
            readdir(fileFullPath)
            continue
        } 
        
        // Buscando apenas arquivos css e html
        if (!/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)) continue;
        console.log(fileFullPath)
        
    }
}

readdir('D:/estudos')