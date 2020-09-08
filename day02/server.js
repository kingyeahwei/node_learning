const http = require('http');
let server = http.createServer(function (req, res) {
  switch (req.url) {
    case '/1.html':
      res.write('1111')
      break;
    case '/2.html':
      res.write('2222')
      break;
    default:
      res.write('404')
      break;
  }
  res.end();
});
server.listen(8080)
