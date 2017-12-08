//产品的模型文件
const dbConnect = require('../config/db.config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
dbConnect();

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    passwork: {
        type: String,
        required: true
    }
});

const User = mongoose.model('users', userSchema);


module.exports = User;
