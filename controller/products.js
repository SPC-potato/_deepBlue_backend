//关于产品的一些操作接口
const Prod = require('../model/products');

const getProdData = function (reqData, callback) {

    Prod.find(reqData, function (err, dataModel) {
        if(err) return console.error(err);
        // console.log(dataModel);
        callback(err, dataModel);
    })
};

const addProdData = function (reqData, callback) {

    const dataModel = new Prod(reqData);
    dataModel.save(function (err, res) {
        callback(err, res);
    });
};

const delProdData = function (resData, callback) {
    Prod.remove(resData, function (err, res) {
        callback(err, res)
    })
};

const updataProdData = function (resData) {

};



module.exports = {
    addProdData: addProdData,
    getProdData: getProdData,
    delProdData: delProdData
};