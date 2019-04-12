const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title: {
        require: true,
        type: String
    },
    path: {
        require: true,
        type: String
    },
},{
    timestamps: true
});

module.exports = mongoose.model('File', File);