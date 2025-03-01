const express = require('express');
const router = express.Router();
const othersController = require('../controllers/locations.controller');

router.get('/', othersController.reviewController);

module.exports = router;