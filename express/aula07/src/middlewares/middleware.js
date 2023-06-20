module.exports = (req, resp, next) => {
    
    if (req.body.nome) {
        console.log()
        console.log(`Nome: ${req.body.nome}`)
        console.log()
    }
    
    next()
}