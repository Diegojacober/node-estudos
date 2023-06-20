require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado a base de dados')
        app.emit('Conectado no banco de dados')
    })
    .catch((e) => {
        console.log(e)
    })

const routes = require('./routes')
const path = require('path')
const meuMiddleware = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }))

// Onde ficarão os conteúdos estáticos
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(meuMiddleware)
app.use(routes)


app.on('Conectado no banco de dados', () => {
    app.listen(3000, () => {
        console.log('Server listening at port 3000')
    })
})

