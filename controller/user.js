//关于用户的一些操作接口
const User = require('../model/users');

const getUserData = function (reqData, callback) {

    User.find(reqData, function (err, dataModel) {
        if(err) return console.error(err);
        // console.log(dataModel);
        callback(err, dataModel);
    })
};

const isLogined = function () {

};

const setLoginInfo = function () {

};

const rmLoginInfo = function () {

};

const addProdData = function (reqData, callback) {

    const dataModel = new Prod(reqData);
    dataModel.save(function (err, res) {
        callback(err, res);
    });
};

const delProdData = function (resData, callback) {
    User.remove(resData, function (err, res) {
        callback(err, res)
    })
};

const updataProdData = function (resData) {

};



module.exports = {
    getUserData: getUserData
};
