const express = require('express');
const multer = require('multer');
const multerConfig  = require('./config/multer');

const jwt = require('jsonwebtoken');

const app = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');
const UserController = require('./controllers/UserController');

app.get('/', (req, res) => {
    res.send('servidor de pé');
});

app.get('/boxes/:id', BoxController.show);

app.post('/boxes', BoxController.store);
app.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store);

/** rotas de adicionar/logar usuario */
app.get('/user/:nome', UserController.findUsers);
app.put('/user/:id', UserController.store);
app.post('/user/login', UserController.login);
app.post('/user/new', UserController.store);
app.delete('/user/remove/:id', UserController.removeUser);

module.exports = app;