const urlLib = require('url')
let obj = urlLib.parse('http://www.zhi.com/index?a=12&b=23', true)
console.log(obj);
