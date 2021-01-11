const mongoose = require('mongoose');

const UrlSchema = mongoose.Schema({
    lurl: {
        type: String,
        required: true
    },
    surl: {
        type: String,
        unique: true
    },
    clickCount: {
        type: Number,
        default : 0
    }
})


const UrlModel = mongoose.model('urlshorts',UrlSchema);

module.exports = {UrlModel};