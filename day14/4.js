const ejs = require('ejs')
ejs.renderFile('./views/4.ejs', {}, function (err, data) {
    if (err) {
        console.log('编译错误');
    } else {
        console.log(data);
    }

})
