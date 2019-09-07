var express = require('express');
var bodyParser = require('body-parser')
var characterRoutes = require('./routes/Character')
var cors = require('cors')

var app = express()

const porta = 8888

app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/', characterRoutes)

app.listen(porta, ()=>console.log(`Aplicativo rodando na porta ${porta}`))