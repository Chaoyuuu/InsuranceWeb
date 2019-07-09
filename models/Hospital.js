const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const HostSchema = new Schema({

    _name: {
        type: String,
        // required: true 
    },

    _userid: {
        type: String,
        // required: true 
    },

    _date: {
        type: String,
        // required: true 
    },
    
    _emergency: {
        type: String,
    },

    _surgery: {
        type: String,
    },

    _admission: {
        type: String,
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Hospital = mongoose.model('hospital', HostSchema);
