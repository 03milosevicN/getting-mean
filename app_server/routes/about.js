const express = require('express');
const router = express.Router();
const othersController = require('../controllers/others.controller');

router.get('/', othersController.aboutController);

module.exports = router;