const express = require('express');
const router = express.Router();
const mainController = require('../controllers/locations.controller');

router.get('/', mainController.indexController);

module.exports = router;
