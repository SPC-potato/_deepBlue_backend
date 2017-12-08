const express = require('express');
const app = express();

const path = require('path');
const dir = require('./config/dir.config');

const devPath = 'http://loacalhost';
const devPort = 3000;
const proPath = '';

const stylus = require('stylus');
app.use(stylus.middleware(path.resolve(dir.STATIC_PATH, 'stylus')));

const prod = require('./controller/products');
const user = require('./controller/user');

app.use('/statics', express.static('./build/statics'));

const ejs = require('ejs');
app.set('views', './view');
// app.engine('html',ejs.__express);
app.set('view engine', 'pug');

app.all('/admin/user', function (req, res) {
    if(req.query.name){
        console.log(req.query.name);
        user.getUserData({'name': req.query.name}, function (err, resData) {
            if (err) res.send(err);
            console.log(resData)
        });
        // prod.getProdData({}, function (err, resData) {
        //     if (err) res.send(err);
        //     res.render('backend/page/product/index', {resData: resData})
        // })
    }
    res.render('backend/page/user')
});

app.get('/admin/product/del', function (req, res) {
    console.log();
    if(req.query.name){
        return prod.delProdData(req.query, function (err, dataRes) {
            console.log(dataRes);
            res.redirect(req.headers.referer);
        });
    }
    res.send('找不到被删除的对象');
});

app.get('/admin/product/add', function (req, res) {
    prod.getProdData({}, function (err, allData) {
        if (err) res.send(err + '没有获取到相关数据');
        console.log(req.query.name);
        if(req.query.name){
            return prod.addProdData(req.query, function (status, resData) {
                if(status) {
                    if(status.code === 11000) console.error('数据库已经存在此数据');
                    console.error('未知错误(有可能是该填的参数没有填上去)' + status.code);
                }
                res.render('backend/page/product/add', {resData: allData})
            });
        }
        res.render('backend/page/product/add', {resData: allData})
    });

});

app.get('/admin/product', function (req, res) {
    prod.getProdData({}, function (err, resData) {
        if (err) {
            res.json(err);
        }
        res.render('backend/page/product/index', {resData: resData})
    })
});

app.get('/admin', function (req, res) {
    res.render('index')
});

app.get('/', function (req, res) {
    prod.getProdData({}, function (err, resData) {
        if(err){
            res.json(err);
        }
        console.log(resData);
        res.render('index', {resData: resData})
    });

});

app.use(function(req, res, next) {
    res.status(404).send('没有找到这个路径');
});

const server = app.listen(devPort, function () {
   const host = server.address().address;
   const port = server.address().port;
   // console.log(host)
});

