const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();

router.post('/upload', userController.uploadPhoto, userController.upload);
// router.post('/upload', userController.upload);

module.exports = router;
