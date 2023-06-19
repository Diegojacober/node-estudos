//express = microframework que ajuda trabalhar com web
// npm install nodemon --save-dev
const express = require('express')
const app = express()

app.get('/', (req, resp) => {
    resp.send(`
    <form action="/" method="post">
    Nome: <input type="text" name="nome"/> 
    <button>Enviar</button>
    </form>`)
})

app.post('/', (req, resp) => {
    console.log(req.body)
    resp.send('Recebi os dados!')
})

app.get('/contato', (req, resp) => {
    resp.send('Obrigado por entrar em contato')
})

app.listen(3000, () => {
    console.log('Server listening at port 3000')
})
