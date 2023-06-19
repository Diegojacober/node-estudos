const express = require('express')
const app = express()

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
