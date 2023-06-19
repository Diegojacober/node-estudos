const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({ extended: true }))
app.set('views', path.resolve(__dirname, 'src', 'views'))
// npm install ejs
app.set('view engine', 'ejs')

app.use(routes)

app.listen(3000, () => {
    console.log('Server listening at port 3000')
})
