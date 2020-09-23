const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const server = express();

server.use(cookieParser())
server.use(cookieSession({
    keys: ['aaa', 'bbb', 'ccc']
}))

server.use('/', function (req, res) {
    console.log(req.session);
    res.send('ok')
})

server.listen(8080);
