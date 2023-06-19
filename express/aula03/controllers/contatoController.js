exports.paginaInicial = (req, res) => {
    console.log(req.query)
    res.send(`
    <h1>Seja bem vindo a página de contato</h1`)
}