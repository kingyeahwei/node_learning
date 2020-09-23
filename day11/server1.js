const express = require('express');
const cookieParser = require('cookie-parser');
const server = express();

server.use(cookieParser())

server.use('/', function (req, res) {
    res.clearCookie('user')
    res.send('ok')
})

server.listen(8080);
