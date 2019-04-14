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
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

File.virtual('url').get(function virtualUrl(params) {
    return `http://localhost:1000/files/${encodeURIComponent(this.path)}`
});

module.exports = mongoose.model('File', File);