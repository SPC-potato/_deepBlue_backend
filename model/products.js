//产品的模型文件
const dbConnect = require('../config/db.config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
dbConnect();

function dob (val) {
    if (!val) return val;
    return (val.getMonth() + 1) + "/" + val.getDate() + "/" + val.getFullYear();
}

const prodSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    price_unit: {
        type: String,
        default: "HK",
        required: true
    },
    updataTime: {
        type: Date,
        get: dob
    }
});

const Prod = mongoose.model('products', prodSchema);


module.exports = Prod;
