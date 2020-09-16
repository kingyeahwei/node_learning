const express = require('express');
const expressStatic = require('express-static')

const server = express();

// 用户数据

var users = {
    blue: '123456',
    zhangshan: '654321',
    lisi: '987654'
}

server.get('/login', function (req, res) {
    var user = req.query['user'];
    var pass = req.query['pass'];
    if (users[user] === undefined) {
        res.send({ok: false, msg: '此用户不存在'})
    } else {
        if (users[user] !== pass) {
            res.send({ok: false, msg: '密码错误'})
        } else {
            res.send({ok: true, msg: '成功'})
        }
    }
})

server.use(expressStatic('./www'))

server.listen(8080);
