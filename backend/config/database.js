const mongoose = require('mongoose');

exports.connectDatabase = () => {

    mongoose.connect("mongodb://127.0.0.1:27017/interiit").then(con => {
console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
    })
    }
