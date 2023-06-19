exports.paginaInicial = (req, res) => {
    console.log(req.query)
    res.send(`
    <form action="/" method="post">
    Nome: <input type="text" name="nome"/> 
    <button>Enviar</button>
    </form>`)
}

exports.create = (req, res) => {
    res.send('Rota de post')
}