var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills');

/* GET skills listing. */
router.get('/', skillsCtrl.index);

module.exports = router;
