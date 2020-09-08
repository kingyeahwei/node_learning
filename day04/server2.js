const http = require('http')
const urlLib = require('url');
http.createServer(function (req, res) {
    var GET = {}
    var url;
    if (req.url.indexOf('?') !== -1) {
        let obj = urlLib.parse(req.url, true)
        url = obj.pathname
        GET = obj.query;
    } else {
        url = req.url
    }

    console.log(url, GET);
    res.write('aaa')
    res.end()
}).listen(8080)
