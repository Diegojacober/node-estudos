const HomeModel = require('../models/HomeModels')

// HomeModel.create({
//     titulo: 'Primeiro insert no mongodb',
//     descricao: 'A descrição do documento'
// })
HomeModel.find()
.then((data) => console.log(data))
.catch(e => console.log(e)) 

exports.paginaInicial = (req, res) => {
    res.render('index')
    return
}

exports.create = (req, res) => {
    res.send(req.body)
    return
}