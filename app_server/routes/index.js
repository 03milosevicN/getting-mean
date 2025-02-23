let express = require('express');
let router = express.Router();
const mainController = require('../controllers/main');

router.get('/', mainController.indexController);

module.exports = router;
