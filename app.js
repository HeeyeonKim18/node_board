const express = require('express')
const helmet = require('helmet')
const app = express()

app.use(helmet());
app.use(express.json())
app.use(express.urlencoded())

const mainRouter = require('./router/mainRouter')
const usersRouter = require('./router/usersRouter')
const boardRouter = require('./router/boardRouter')

app.use('/', mainRouter)
app.use('/user', usersRouter)
app.use('/board', boardRouter)

app.listen(3000, function(req, res){
    console.log('connect localhost')
})
