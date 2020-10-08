// instale o express 'npm i --save express'
// instale o body-parser 'npm i --save body-parse

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { response } = require('express')

// urlencoded é o padrão que vem apartir da submissão, por isso deve ser feito o parse
// O body-parser interpreta o urlencoded e cria um objeto preenchido com os dados 
app.use(bodyParser.urlencoded({ extended: true }))

// requisições
app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Incluido!!!</h1>')
})

app.post('/usuario/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Alterado!!!</h1>')
})

app.listen(3003) 