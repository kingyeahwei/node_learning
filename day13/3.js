const jade = require('jade')
console.log(jade.renderFile(
    './views/9.jade',
    {
        pretty: true,
        json: {
            width: '200px',
            height: '200px',
            background: 'red'
        },
        arr: ['aaa', 'left-wrap']
    }
));
