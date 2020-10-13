const ejs = require('ejs')
ejs.renderFile('./views/3.ejs', {json: {arr: [
    {user: 'blue', pass: '123456'},
    {user: 'zhangsan', pass: '123456'},
    {user: 'xiaoming', pass: '999999'},
    ]}}, function (err, data) {
    if (err) {
        console.log('编译错误');
    } else {
        console.log(data);
    }

})
