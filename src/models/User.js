const mongoose = require('mongoose');
const enviroment = require('../config/enviroment');

const User = new mongoose.Schema({
  nome: {
    required: true,
    type: String,
    maxlength: 500
  },
  email: {
    required: true,
    type: String,
    index: {
      unique: true
    }
  },
  password: {
    required: true,
    type: String
  }
})

module.exports = mongoose.model('User', User);