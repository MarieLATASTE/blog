const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    nickname:{
        type: String,
        required: true
    },
    createdAt: Date,
    article:{
        type: String,
        required: true
    },
    titre:{
        type: String,
        required: true
    },
    article:{
        type: String,
        required: true
    },
    ressourceUrl:{
        type: String,
        required: true
    },
});

module.exports = mongoose.model('article', articleSchema);