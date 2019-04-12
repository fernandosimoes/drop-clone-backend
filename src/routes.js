const express = require('express');

const router = express.Router();

const BoxController = require('./controllers/BoxController');

router.post('/boxes', BoxController.store);


module.exports = router;