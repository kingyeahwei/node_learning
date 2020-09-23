const express = require('express');
const cookieParser = require('cookie-parser');
const server = express();

server.use(cookieParser('wesdfsdfsdf'))

server.use('/', function (req, res) {
    req.secret = 'wesdfsdfsdf';
    res.cookie('user', 'blue', {signed: true})
    console.log(req.signedCookies);
    console.log(req.cookies);
    res.send('ok')
})

server.listen(8080);
