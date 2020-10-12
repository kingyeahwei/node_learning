const jade = require('jade')
console.log(jade.renderFile(
    './views/12.jade',
    {
        pretty: true,
        content: "<h2>你好呀</h2><p>发生的方式</p>"
    }
));
