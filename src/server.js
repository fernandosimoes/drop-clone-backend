const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    'mongodb+srv://oministack:oministack@cluster0-gglfc.mongodb.net/oministack?retryWrites=true', 
    {
        useNewUrlParser: true
    }
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(require('./routes'));

app.listen(1000);