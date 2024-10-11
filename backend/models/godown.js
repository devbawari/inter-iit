const mongoose = require('mongoose');
const godownschema=mongoose.Schema({
    id:String,
    name:String,
    parent:String,
});
module.exports=mongoose.model('Godown',godownschema);