exports.paginaInicial = (req, res) => {
    res.render('index')
    return
}

exports.create = (req, res) => {
    res.send(req.body)
    return
}