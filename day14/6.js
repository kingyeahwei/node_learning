const ejs = require('ejs')
ejs.renderFile('./views/6.ejs', {type: 'user'}, function (err, data) {
    if (err) {
        console.log('编译错误');
    } else {
        console.log(data);
    }

})
