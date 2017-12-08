//MongoDB的一些配置文件
//MongoDB config
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
/////////////华丽的分隔符//////////////////

const dbHost = 'mongodb://localhost/deepblue';



const dbConnect = function () {
    mongoose.connect(dbHost,{useMongoClient:true});
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, '数据库连接错误：'));
    db.once('open', function (callback) {
        console.log('数据库连接成功！')
    });
    db.on('disconnected', function (callback) {
        console.log('数据库连接断开！');
    });

};
module.exports = dbConnect;
