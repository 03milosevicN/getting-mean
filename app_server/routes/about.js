let express = require('express');
let router = express.Router();
const mainController = require('../controllers/others.controller');

router.get('/', mainController.aboutController);

module.exports = router;