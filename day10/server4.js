const express = require('express')
const bodyParser2 = require('./libs/my-body-parser')
const server = express()
server.listen(8080)
server.use(bodyParser2)

server.use('/', function (req, res) {
    console.log(req.body);
})
