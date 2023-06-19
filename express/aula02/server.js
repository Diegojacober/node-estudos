const express = require('express')
const app = express()


// A opção "extended" diz para o express qual biblioteca ele deve utilizar para fazer o parsing do conteúdo das requisições que ele recebe.
// Quando extended : true vai utilizar a biblioteca qs e quando for false ele vai utilizar a biblioteca querystring.

// A diferença entre elas é que a biblioteca qs permite o aninhamento de objetos (nested objects), que é praticamente como o JSON trabalha:

// {"animal":{"tipo":"cachorro","raca":"vira-lata","idade":3}}
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, resp) => {
    console.log(req.query)
    resp.send(`
    <form action="/" method="post">
    Nome: <input type="text" name="nome"/> 
    <button>Enviar</button>
    </form>`)
})

app.post('/', (req, resp) => {
    resp.send(`<p>O que você me enviou foi: ${req.body.nome}</p>`)
})

app.get('/profile/:id/:teste?', (req, resp) => {
    resp.send(req.params)
})

app.listen(3000, () => {
    console.log('Server listening at port 3000')
})
