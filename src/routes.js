const express = require('express');
const multer = require('multer');
const multerConfig  = require('./config/multer');

const router = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

router.get('/', (req, res)=>{
    res.send('servidor de pé');
})

router.post('/boxes', BoxController.store);
router.post('/files', multer(multerConfig).single('file') , FileController.store);


module.exports = router;