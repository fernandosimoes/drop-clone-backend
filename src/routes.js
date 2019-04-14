const express = require('express');
const multer = require('multer');
const multerConfig  = require('./config/multer');

const app = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

app.get('/', (req, res)=>{
    res.send('servidor de pé');
});

app.get('/boxes/:id', BoxController.show);

app.post('/boxes', BoxController.store);
app.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store);


module.exports = app;