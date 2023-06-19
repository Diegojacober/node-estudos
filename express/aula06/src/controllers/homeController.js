exports.paginaInicial = (req, res) => {
    console.log(req.query)
    res.render('index')
}

exports.create = (req, res) => {
    res.send('Rota de post')
}