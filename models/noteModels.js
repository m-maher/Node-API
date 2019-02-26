const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    title:String,
    content:String
},{
    timestamps: true
});

module.exports = mongoose.model('data',dataSchema);