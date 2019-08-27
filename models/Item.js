const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
    // <th>My Contract</th>
    // <th>Start Date</th>
    // <th>Due Date</th>
    // <th>Action</th>
    _addr: {
        type: String,
        // required: true 
    },

    _contract: {
        type: String,
        // required: true 
    },
    
    _start: {
        type: String,
    },

    _due: {
        type: String,
    },

    _action: {
        type: String,
    },

    _blockhash: {
        type: String,
    },

    _blocknum: {
        type: String,
    },

    _txhash: {
        type: String,
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);