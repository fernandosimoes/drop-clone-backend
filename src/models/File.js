const mongoose = require('mongoose');
const enviroment = require('../config/enviroment');

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
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

File.virtual('url').get(function virtualUrl(params) {
    return `${enviroment.url}/files/${encodeURIComponent(this.path)}`
});

module.exports = mongoose.model('File', File);