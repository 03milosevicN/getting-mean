let express = require('express');
let router = express.Router();
const mainController = require('../controllers/main');

router.get('/', mainController.aboutController);

module.exports = router;