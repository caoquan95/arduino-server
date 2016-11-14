var express = require('express');
var router = express.Router();
var buttonController = require('../controllers/ButtonController');
/* GET home page. */
router.get('/', buttonController.buttons);
router.get('/create-button', buttonController.createButton);
module.exports = router;
