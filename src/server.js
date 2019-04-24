const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const cors = require('cors');
const enviroment = require('./config/enviroment');

app.use(cors());
mongoose.set('useCreateIndex', true);
mongoose.connect(
    'mongodb+srv://oministack:oministack@cluster0-gglfc.mongodb.net/oministack?retryWrites=true',
    {
        useNewUrlParser: true
    }
);

app.use((req, res, next) => {
    req.io = io;
    return next();
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/files', express.static(path.resolve(__dirname, '..', 'temp')));
app.use(require('./routes'));

const server = app.listen(enviroment.port || 1000);

const io = require('socket.io')(server)

io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    })
})
