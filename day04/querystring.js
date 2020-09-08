const http = require('http');
const querystring = require("querystring")
var json = querystring.parse('user=blue&pass=12345&age=18')
console.log(json);
