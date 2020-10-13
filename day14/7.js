const ejs = require('ejs')
ejs.renderFile('./views/7.ejs', {css_path: '../style/admin.css'}, function (err, data) {
    if (err) {
        console.log('编译错误');
    } else {
        console.log(data);
    }
})
