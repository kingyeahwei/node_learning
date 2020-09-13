var http = require('http');
const querystring = require('querystring')
http.createServer(function (req, res) {
    // 有一段数据到达的时候(很多次)
    var str = '';
    var i = 0;
    req.on('data', function (data) {
        console.log(`第${i++}次收到数据`);
        str += data;
    })
    // 数据全部到达的时候(一次)
    req.on('end', function () {
        var post = querystring.parse(str);
        console.log(post);
    })
}).listen(8080)
