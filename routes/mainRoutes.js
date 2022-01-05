const express = require('express');
const path = require('path');
const mainController = require('../controllers/mainController');
const router = express.Router();


router.get('/', mainController.getMainPage);

router.post('/', mainController.postDate)

module.exports = router;