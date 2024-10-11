const express=require('express');
const router=express.Router();
const {getItems,getbygodown,getoneItem}=require('../controllers/Item.js');
router.route('/getitem').get(getItems);
router.route('/getitem/:id').get(getoneItem);
router.route('/getitembygodown/:id').get(getbygodown);
module.exports=router;