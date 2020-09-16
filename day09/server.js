const express = require('express');

var server = express();

// server.get('/', function (req, res) {
//     console.log('get请求')
// })
//
// server.post('/', function (req, res) {
//     console.log('post请求');
// })

server.use('/', function (req, res) {
    console.log('use');
})

server.listen(8080);
