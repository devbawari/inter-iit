const express = require('express');
const router = express.Router();
const { getGodowns,getonegodown,getsubgodowns, searchGodownsbyname } = require('../controllers/Godown.js');
router.route('/getgodown').get(getGodowns);
router.route('/getgodown/:id').get(getonegodown);
router.route('/getsubgodowns/:id').get(getsubgodowns);
router.route('/searchgodown').get(searchGodownsbyname);
module.exports = router;