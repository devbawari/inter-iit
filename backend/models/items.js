const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema({

    name:String,
    quantity:Number,
    price:Number,
    category:String,
    status:String,
    brand:String,
    attributes:
    {
        type:String,
        material:String,
        warranty_years:Number,
    },
    godown_id:String,
    image_url:String,
});
module.exports = mongoose.model('Item',ItemSchema);